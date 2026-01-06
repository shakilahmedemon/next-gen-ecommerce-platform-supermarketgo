import { saveUserToStorage, loadUserFromStorage, clearUserFromStorage, loadCartFromStorage, showToast } from './utils.js';

// Auth illustration shown on the right side of Login & Sign up pages.
const AUTH_SIDE_IMAGE_URL = 'https://static.vecteezy.com/system/resources/previews/002/194/883/non_2x/3d-shopping-online-store-for-sale-mobile-e-commerce-3d-pink-pastel-background-shop-online-on-mobile-app-24-hours-shopping-cart-credit-card-minimal-shopping-online-store-device-3d-rendering-vector.jpg';

// Login form handler
export function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const name = username.charAt(0).toUpperCase() + username.slice(1);
    
    // Simulate login
    const user = { 
        name: name,
        email: username + '@example.com',
        phone: '555-123-4567',
        address: '123 Grocery Lane, Anytown, USA',
        avatarUrl: `https://placehold.co/100x100/a78bfa/ffffff?text=${name.charAt(0).toUpperCase()}`
    };
    
    // Save user to localStorage for persistent login
    saveUserToStorage(user);
    
    // Return user data for the main app to update state
    return {
        user,
        message: "Login successful! Welcome, " + name
    };
}

// Signup form handler
export function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Simulate signup
    const user = { 
        name: name || 'Demo User',
        email: email || 'demo@example.com',
        phone: '555-123-4567',
        address: '123 Grocery Lane, Anytown, USA',
        avatarUrl: `https://placehold.co/100x100/a78bfa/ffffff?text=${name ? name.charAt(0).toUpperCase() : 'D'}`
    };
    
    // Save user to localStorage for persistent login
    saveUserToStorage(user);
    
    // Return user data for the main app to update state
    return {
        user,
        message: "Account created! Welcome, " + (name || 'Demo User')
    };
}

// Logout handler
export function handleLogout() {
    clearUserFromStorage();
    return {
        user: null,
        message: "You have been logged out."
    };
}

// Check for saved user and auto-login
export function checkAutoLogin() {
    const savedUser = loadUserFromStorage();
    if (savedUser) {
        // Restore cart from localStorage
        const savedCart = loadCartFromStorage();
        return {
            user: savedUser,
            cart: savedCart || []
        };
    }
    return null;
}

// Render login page
export function renderLoginPage() {
    return `
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden mt-8">
            <div class="grid md:grid-cols-2 items-center">
                <!-- Left side: Form -->
                <div class="p-8 md:p-12">
                    <h2 class="text-4xl font-bold text-theme-purple-800 mb-8">Log in</h2>
                    <form id="login-form" class="space-y-6">
                        <div>
                            <input type="text" id="username" placeholder="Username" required 
                                   class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-purple" value="">
                        </div>
                        <div>
                            <input type="password" id="password" placeholder="Password" required 
                                   class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-purple" value="">
                        </div>
                        <div class="flex justify-between items-center text-sm">
                            <label class="flex items-center gap-2 text-gray-600">
                                <input type="checkbox" class="rounded text-theme-purple-800 focus:ring-theme-purple">
                                Remember Me
                            </label>
                            <a href="#" class="font-medium text-theme-purple-800 hover:underline">Forgot Password?</a>
                        </div>
                        <div>
                            <button type="submit" class="w-full bg-theme-purple-800 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-theme-purple-700 transition-colors shadow-lg">
                                Log in
                            </button>
                        </div>
                        <p class="text-center text-gray-600">
                            or <a href="#" class="nav-link font-medium text-theme-purple-800 hover:underline" data-view="signup">Sign up</a>
                        </p>
                    </form>
                </div>
                <!-- Right side: Illustration & marketing content -->
                <div class="hidden md:block p-8">
                    <div class="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-theme-purple-800 via-theme-pink-700 to-theme-purple-700 flex flex-col justify-between p-8 text-white">
                        <!-- Top badge -->
                        <div class="flex items-center gap-3">
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-2xl">
                                🛒
                            </span>
                            <div>
                                <p class="text-xs uppercase tracking-[0.2em] text-white/70">Smart Grocery</p>
                                <p class="text-lg font-semibold">SuperMarketGo</p>
                            </div>
                        </div>

                        <!-- Illustration -->
                        <div class="flex-1 flex items-center justify-center">
                            <img 
                                src="${AUTH_SIDE_IMAGE_URL}" 
                                alt="Online grocery shopping illustration" 
                                class="rounded-xl object-cover w-full h-64 shadow-xl border border-white/10"
                                loading="lazy"
                            >
                        </div>

                        <!-- Bottom highlights -->
                        <div class="mt-6 grid grid-cols-1 gap-3 text-sm">
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-full bg-white text-theme-purple-800 flex items-center justify-center text-xs font-bold">1</span>
                                <span>Fresh groceries delivered in under <span class="font-semibold">30 minutes</span>.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-full bg-white text-theme-purple-800 flex items-center justify-center text-xs font-bold">2</span>
                                <span>Real-time order tracking on an interactive map.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-full bg-white text-theme-purple-800 flex items-center justify-center text-xs font-bold">3</span>
                                <span>Secure payments via Alipay, WeChat Pay, and PayPal.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render signup page
export function renderSignupPage() {
    return `
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden mt-8">
            <div class="grid md:grid-cols-2 items-center">
                <!-- Left side: Form -->
                <div class="p-8 md:p-12">
                    <h2 class="text-4xl font-bold text-theme-purple-800 mb-8">Sign up</h2>
                    <form id="signup-form" class="space-y-6">
                        <div>
                            <input type="text" id="name" placeholder="Full Name" required 
                                   class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-purple" value="">
                        </div>
                        <div>
                            <input type="email" id="email" placeholder="Email Address" required 
                                   class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-purple" value="">
                        </div>
                        <div>
                            <input type="password" id="password" placeholder="Password" required 
                                   class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-purple" value="">
                        </div>
                        <div>
                            <input type="password" id="confirm_password" placeholder="Confirm Password" required 
                                   class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-purple" value="">
                        </div>
                        <div>
                            <button type="submit" class="w-full bg-theme-purple-800 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-theme-purple-700 transition-colors shadow-lg">
                                Create Account
                            </button>
                        </div>
                        <p class="text-center text-gray-600">
                            or <a href="#" class="nav-link font-medium text-theme-purple-800 hover:underline" data-view="login">Log in</a>
                        </p>
                    </form>
                </div>
                <!-- Right side: Illustration & marketing content -->
                <div class="hidden md:block p-8">
                    <div class="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-theme-purple-800 via-theme-pink-700 to-theme-purple-700 flex flex-col justify-between p-8 text-white">
                        <!-- Top badge -->
                        <div class="flex items-center gap-3">
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-2xl">
                                🛍️
                            </span>
                            <div>
                                <p class="text-xs uppercase tracking-[0.2em] text-white/70">Join the experience</p>
                                <p class="text-lg font-semibold">Create your SuperMarketGo account</p>
                            </div>
                        </div>

                        <!-- Illustration -->
                        <div class="flex-1 flex items-center justify-center">
                            <img 
                                src="${AUTH_SIDE_IMAGE_URL}" 
                                alt="Customer creating an account illustration" 
                                class="rounded-xl object-cover w-full h-64 shadow-xl border border-white/10"
                                loading="lazy"
                            >
                        </div>

                        <!-- Bottom highlights -->
                        <div class="mt-6 grid grid-cols-1 gap-3 text-sm">
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-full bg-white text-theme-purple-800 flex items-center justify-center text-xs font-bold">✓</span>
                                <span>Save your favourite products & delivery addresses.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-full bg-white text-theme-purple-800 flex items-center justify-center text-xs font-bold">✓</span>
                                <span>View full order history and smart recommendations.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-full bg-white text-theme-purple-800 flex items-center justify-center text-xs font-bold">✓</span>
                                <span>Exclusive member-only deals every week.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
