<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | TB Crash</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #00ffcc;
            --primary-dark: #00cca3;
            --secondary: #ff00aa;
            --dark: #121212;
            --darker: #0a0a0a;
            --light: #ffffff;
            --gray: #333333;
            --light-gray: #444444;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: var(--dark);
            color: var(--light);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: 
                radial-gradient(circle at 20% 30%, rgba(0, 255, 204, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 80% 70%, rgba(255, 0, 170, 0.1) 0%, transparent 20%);
        }
        
        .auth-container {
            width: 90%;
            max-width: 400px;
            background: rgba(30, 30, 30, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5),
                        0 0 20px rgba(0, 255, 204, 0.3),
                        0 0 40px rgba(255, 0, 170, 0.2);
        }
        
        .logo {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .logo h1 {
            font-size: 2.5rem;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-weight: 800;
            letter-spacing: 1px;
        }
        
        .tabs {
            display: flex;
            margin-bottom: 2rem;
            position: relative;
        }
        
        .tab {
            padding: 0.8rem 0;
            flex: 1;
            text-align: center;
            cursor: pointer;
            position: relative;
            color: var(--light-gray);
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .tab.active {
            color: var(--primary);
        }
        
        .tab.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: var(--primary);
            z-index: 3;
            box-shadow: 0 0 10px var(--primary);
        }
        
        .form {
            display: none;
        }
        
        .form.active {
            display: block;
        }
        
        .input-group {
            position: relative;
            margin-bottom: 1.5rem;
        }
        
        .input-group i {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--light-gray);
        }
        
        input {
            width: 100%;
            padding: 15px 15px 15px 45px;
            background: var(--gray);
            border: 2px solid transparent;
            border-radius: 8px;
            color: var(--light);
            font-size: 1rem;
            transition: all 0.3s ease;
        }
        
        input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 10px rgba(0, 255, 204, 0.3);
        }
        
        .btn {
            width: 100%;
            padding: 15px;
            background: linear-gradient(to right, var(--primary), var(--primary-dark));
            border: none;
            border-radius: 8px;
            color: var(--darker);
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 20px 0 10px;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 255, 204, 0.4);
        }
        
        .message {
            padding: 10px;
            border-radius: 8px;
            margin: 1rem 0;
            text-align: center;
            display: none;
        }
        
        .error {
            background: rgba(255, 0, 0, 0.1);
            color: #ff4444;
            display: block;
        }
    </style>
</head>
<body>
    <div class="auth-container">
        <div class="logo">
            <h1>TB CRASH</h1>
        </div>
        
        <div class="tabs">
            <div class="tab active" id="login-tab">Login</div>
            <div class="tab" id="signup-tab">Sign Up</div>
        </div>
        
        <!-- Login Form -->
        <form id="login-form" class="form active">
            <div class="input-group">
                <i class="fas fa-envelope"></i>
                <input type="email" id="login-email" placeholder="Email" required>
            </div>
            
            <div class="input-group">
                <i class="fas fa-lock"></i>
                <input type="password" id="login-password" placeholder="Password" required>
            </div>
            
            <button type="submit" class="btn">Login</button>
        </form>
        
        <!-- Signup Form -->
        <form id="signup-form" class="form">
            <div class="input-group">
                <i class="fas fa-envelope"></i>
                <input type="email" id="signup-email" placeholder="Email" required>
            </div>
            
            <div class="input-group">
                <i class="fas fa-lock"></i>
                <input type="password" id="signup-password" placeholder="Password" required>
            </div>
            
            <div class="input-group">
                <i class="fas fa-lock"></i>
                <input type="password" id="signup-confirm" placeholder="Confirm Password" required>
            </div>
            
            <div class="input-group">
                <i class="fas fa-user-friends"></i>
                <input type="text" id="referral-code" placeholder="Referral Code (Optional)">
            </div>
            
            <button type="submit" class="btn">Create Account</button>
        </form>
    </div>

    <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore-compat.js"></script>
    <script>
        // Firebase Config
        const firebaseConfig = {
            apiKey: "AIzaSyDfK_HayFBawYzgIcGXQsQ4ynyCrVHHL8A",
            authDomain: "tbgames-d6995.firebaseapp.com",
            projectId: "tbgames-d6995",
            storageBucket: "tbgames-d6995.appspot.com",
            messagingSenderId: "578117532273",
            appId: "1:578117532273:web:3e52426b147f1c7e5af9d0",
            measurementId: "G-VWLDSR92KV"
        };
        
        // Initialize Firebase
        const app = firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const db = firebase.firestore();
        
        // Tab Switching
        document.getElementById('login-tab').addEventListener('click', () => {
            document.getElementById('login-tab').classList.add('active');
            document.getElementById('signup-tab').classList.remove('active');
            document.getElementById('login-form').classList.add('active');
            document.getElementById('signup-form').classList.remove('active');
        });
        
        document.getElementById('signup-tab').addEventListener('click', () => {
            document.getElementById('signup-tab').classList.add('active');
            document.getElementById('login-tab').classList.remove('active');
            document.getElementById('signup-form').classList.add('active');
            document.getElementById('login-form').classList.remove('active');
        });
        
        // Handle Referral Code from URL
        const urlParams = new URLSearchParams(window.location.search);
        const referralCode = urlParams.get('ref');
        if (referralCode) {
            document.getElementById('referral-code').value = referralCode;
        }
        
        // Sign Up
        document.getElementById('signup-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirm = document.getElementById('signup-confirm').value;
            const referral = document.getElementById('referral-code').value;
            
            if (password !== confirm) {
                showError('Passwords do not match');
                return;
            }
            
            try {
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                
                // Create user document
                await db.collection('users').doc(userCredential.user.uid).set({
                    email: email,
                    balance: 1000,
                    referralCode: generateReferralCode(),
                    referredBy: referral || null,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
                
                // Apply referral if exists
                if (referral) {
                    await applyReferral(referral, userCredential.user.uid);
                }
                
                window.location.href = 'home.html';
            } catch (error) {
                showError(error.message);
            }
        });
        
        // Login
        document.getElementById('login-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            try {
                await auth.signInWithEmailAndPassword(email, password);
                window.location.href = 'home.html';
            } catch (error) {
                showError(error.message);
            }
        });
        
        // Helper Functions
        function showError(message) {
            const errorElement = document.createElement('div');
            errorElement.className = 'message error';
            errorElement.textContent = message;
            
            const forms = document.querySelectorAll('.form');
            forms.forEach(form => {
                const existingError = form.querySelector('.message.error');
                if (existingError) {
                    form.removeChild(existingError);
                }
                form.insertBefore(errorElement, form.querySelector('.btn'));
            });
            
            setTimeout(() => {
                errorElement.style.display = 'none';
            }, 5000);
        }
        
        function generateReferralCode() {
            return Math.random().toString(36).substr(2, 8).toUpperCase();
        }
        
        async function applyReferral(code, newUserId) {
            const referrerSnapshot = await db.collection('users')
                .where('referralCode', '==', code).get();
            
            if (!referrerSnapshot.empty) {
                const referrerId = referrerSnapshot.docs[0].id;
                await db.collection('users').doc(referrerId).update({
                    referrals: firebase.firestore.FieldValue.arrayUnion(newUserId),
                    referralEarnings: firebase.firestore.FieldValue.increment(100)
                });
                
                // Give bonus to new user
                await db.collection('users').doc(newUserId).update({
                    balance: firebase.firestore.FieldValue.increment(500)
                });
            }
        }
    </script>
</body>
</html>
