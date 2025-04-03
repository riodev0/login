const functions = require('firebase-functions');
const admin = require('firebase-admin');
const crypto = require('crypto');
admin.initializeApp();

// Generate server seed and hash for new game
exports.generateGameHash = functions.https.onCall(async (data, context) => {
    if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'Not authenticated');

    const serverSeed = crypto.randomBytes(32).toString('hex');
    const hash = crypto.createHash('sha256').update(serverSeed).digest('hex');

    await admin.firestore().collection('games').doc(data.gameId).set({
        serverSeedHash: hash,
        clientSeed: data.clientSeed,
        status: 'pending',
        userId: context.auth.uid,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    return { hash };
});

// Calculate crash point when game starts
exports.calculateCrashPoint = functions.https.onCall(async (data, context) => {
    if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'Not authenticated');

    const gameRef = admin.firestore().collection('games').doc(data.gameId);
    const gameDoc = await gameRef.get();
    
    if (!gameDoc.exists) throw new functions.https.HttpsError('not-found', 'Game not found');
    
    const serverSeed = crypto.randomBytes(32).toString('hex');
    const clientSeed = gameDoc.data().clientSeed;
    
    // Provably fair calculation
    const combined = serverSeed + clientSeed;
    const hash = crypto.createHash('sha256').update(combined).digest('hex');
    const crashPoint = calculateFairCrashPoint(hash);

    await gameRef.update({
        serverSeed,
        crashPoint,
        status: 'active',
        startedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    return { crashPoint };
});

function calculateFairCrashPoint(hash) {
    const PRIME = 2n ** 256n - 189n;
    const h = BigInt('0x' + hash);
    const crashPoint = Number(PRIME - (h % PRIME)) / 2 ** 256;
    return Math.max(1.00, (1 / (1 - crashPoint))).toFixed(2);
}
