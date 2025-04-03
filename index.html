<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Sign Up | TB Games</title>
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
            position: relative;
            overflow: visible;
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
            margin-bottom: 0.5rem;
        }
        
        .logo p {
            color: var(--light-gray);
            font-size: 0.9rem;
        }
        
        .tabs {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2rem;
            position: relative;
        }
        
        .tabs::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--gray);
            z-index: 1;
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
            z-index: 2;
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
        
        .form-container {
            min-height: 350px;
            position: relative;
            overflow: visible;
            margin-bottom: 20px;
        }
        
        .form {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            pointer-events: none;
            transform: translateX(100%);
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .form.active {
            opacity: 1;
            pointer-events: all;
            transform: translateX(0);
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
            transition: all 0.3s ease;
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
        
        input:focus + i {
            color: var(--primary);
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
            box-shadow: 0 5px 15px rgba(0, 255, 204, 0.3);
            margin: 20px 0 10px;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 255, 204, 0.4);
        }
        
        .btn:disabled {
            background: var(--gray);
            cursor: not-allowed;
            transform: none;
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
            border: 1px solid #ff4444;
        }
        
        .success {
            background: rgba(0, 255, 0, 0.1);
            color: var(--primary);
            display: block;
            border: 1px solid var(--primary);
        }
        
        .terms {
            margin-top: 1rem;
            font-size: 0.8rem;
            color: var(--light-gray);
            text-align: center;
        }
        
        .terms a {
            color: var(--primary);
            text-decoration: none;
        }
        
        @media (max-width: 480px) {
            .auth-container {
                padding: 1.5rem;
            }
            
            .logo h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="auth-container">
        <div class="logo">
            <h1>TB GAMES</h1>
            <p>Your ultimate gaming experience</p>
        </div>
        
        <div class="tabs">
            <div class="tab active" id="login-tab">Login</div>
            <div class="tab" id="signup-tab">Sign Up</div>
        </div>
        
        <div class="form-container">
            <!-- Login Form -->
            <form class="form login-form active" id="login-form">
                <div class="input-group">
                    <i class="fas fa-envelope"></i>
                    <input type="email" id="login-email" placeholder="Email" required>
                </div>
                
                <div class="input-group">
                    <i class="fas fa-lock"></i>
                    <input type="password" id="login-password" placeholder="Password" required>
                </div>
                
                <button type="submit" class="btn" id="login-btn">
                    <i class="fas fa-sign-in-alt"></i> Login
                </button>
            </form>
            
            <!-- Signup Form -->
            <form class="form signup-form" id="signup-form">
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
                
                <button type="submit" class="btn" id="signup-btn">
                    <i class="fas fa-user-plus"></i> Create Account
                </button>
                
                <div class="terms">
                    By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </div>
            </form>
        </div>
    </div>

    <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-auth-compat.js"></script>
    <script>
        // Firebase configuration
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

        // DOM elements
        const loginTab = document.getElementById('login-tab');
        const signupTab = document.getElementById('signup-tab');
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');

        // Tab switching
        function switchForms(form) {
            if (form === 'login') {
                loginTab.classList.add('active');
                signupTab.classList.remove('active');
                loginForm.classList.add('active');
                signupForm.classList.remove('active');
            } else {
                signupTab.classList.add('active');
                loginTab.classList.remove('active');
                signupForm.classList.add('active');
                loginForm.classList.remove('active');
            }
        }

        // Validate email
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(email)) {
                showMessage('signup', 'Please enter a valid email address', 'error');
                return false;
            }
            return true;
        }

        // Show message
        function showMessage(form, text, type) {
            const element = document.getElementById(`${form}-message`) || document.createElement('div');
            element.id = `${form}-message`;
            element.textContent = text;
            element.className = `message ${type}`;
            
            const formElement = document.getElementById(`${form}-form`);
            if (!formElement.querySelector(`#${form}-message`)) {
                formElement.insertBefore(element, formElement.querySelector('.btn'));
            }
            
            setTimeout(() => {
                element.className = 'message';
                element.textContent = '';
            }, 5000);
        }

        // Sign Up
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            const email = document.getElementById("signup-email").value.trim();
            const password = document.getElementById("signup-password").value;
            const confirm = document.getElementById("signup-confirm").value;
            const btn = document.getElementById("signup-btn");
            
            // Validation
            if (!email || !password || !confirm) {
                showMessage('signup', 'Please fill in all fields', 'error');
                return;
            }
            
            if (!validateEmail(email)) return;
            
            if (password !== confirm) {
                showMessage('signup', 'Passwords do not match', 'error');
                return;
            }
            
            if (password.length < 6) {
                showMessage('signup', 'Password must be at least 6 characters', 'error');
                return;
            }
            
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating...';
            
            try {
                // Create auth user
                await auth.createUserWithEmailAndPassword(email, password);
                
                // Success
                showMessage('signup', 'Account created! Logging you in...', 'success');
                btn.innerHTML = '<i class="fas fa-check"></i> Success!';
                
                // Auto login
                setTimeout(() => {
                    window.location.href = "https://riodev0.github.io/home";
                }, 1500);
                
            } catch (error) {
                console.error("Signup error:", error);
                let errorMessage = "Signup failed. Please try again.";
                
                if (error.code === "auth/email-already-in-use") {
                    errorMessage = "Email already in use";
                } else if (error.code === "auth/invalid-email") {
                    errorMessage = "Invalid email format";
                } else if (error.code === "auth/weak-password") {
                    errorMessage = "Password is too weak (min 6 characters)";
                }
                
                showMessage('signup', errorMessage, 'error');
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-user-plus"></i> Create Account';
            }
        });

        // Login
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            const email = document.getElementById("login-email").value.trim();
            const password = document.getElementById("login-password").value;
            const btn = document.getElementById("login-btn");
            
            if (!email || !password) {
                showMessage('login', 'Please enter both email and password', 'error');
                return;
            }
            
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
            
            try {
                await auth.signInWithEmailAndPassword(email, password);
                
                // Redirect to home
                window.location.href = "https://riodev0.github.io/home";
                
            } catch (error) {
                console.error("Login error:", error);
                let errorMessage = "Login failed. Please try again.";
                
                if (error.code === "auth/user-not-found") {
                    errorMessage = "Email not found";
                } else if (error.code === "auth/wrong-password") {
                    errorMessage = "Incorrect password";
                } else if (error.code === "auth/invalid-email") {
                    errorMessage = "Invalid email format";
                }
                
                showMessage('login', errorMessage, 'error');
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
            }
        });

        // Initialize form
        switchForms('login');

        // Add event listeners for tabs
        loginTab.addEventListener('click', () => switchForms('login'));
        signupTab.addEventListener('click', () => switchForms('signup'));
    </script>
</body>
</html>
