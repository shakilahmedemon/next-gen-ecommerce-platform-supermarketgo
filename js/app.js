// --- 1. DATABASE ---
const productData = [
    // Fresh Produce
    { id: 1, name: 'Fresh Apples', price: 15.99, category: 'Fresh Produce', description: 'Crisp, juicy red apples, perfect for snacking.', image_url: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80' },
    { id: 2, name: 'Organic Bananas', price: 12.99, category: 'Fresh Produce', description: 'A bunch of 6 organic, fair-trade bananas.', image_url: 'https://images.immediate.co.uk/production/volatile/sites/30/2025/03/Bunch-of-bananas-00871a2.jpg' },
    { id: 9, name: 'Baby Carrots', price: 10.49, category: 'Fresh Produce', description: '1lb bag of fresh, crunchy baby carrots.', image_url: 'https://cdn11.bigcommerce.com/s-kc25pb94dz/images/stencil/1280x1280/products/271/762/Carrot__40927.1634584458.jpg?c=2' },
    { id: 11, name: 'Fresh Tomatoes', price: 18.99, category: 'Fresh Produce', description: 'Ripe, juicy tomatoes perfect for salads and cooking.', image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg' },
    { id: 12, name: 'Organic Spinach', price: 14.99, category: 'Fresh Produce', description: 'Fresh organic spinach, rich in vitamins and minerals.', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDr6TxSU65t995cB7IJqr5f-OW2rD9XBdLyA&s' },

    // Dairy & Eggs
    { id: 3, name: 'Whole Milk', price: 22.49, category: 'Dairy & Eggs', description: 'One gallon of fresh, whole milk.', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTce-PQXGsvOQVqF9yjJevGdBuoKrN3m9pHdQ&s' },
    { id: 4, name: 'Dozen Eggs', price: 18.29, category: 'Dairy & Eggs', description: 'A dozen large, grade A white eggs.', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDR8Rrxgh6T8Bv2gh21hkp5YxgfQWfxHyFQ&s'},
    { id: 10, name: 'Greek Yogurt', price: 25.99, category: 'Dairy & Eggs', description: 'Large tub of plain Greek yogurt.', image_url: 'https://m.media-amazon.com/images/I/51NlT7TEhCL._AC_UF894,1000_QL80_.jpg'},
    { id: 13, name: 'Cheddar Cheese', price: 35.99, category: 'Dairy & Eggs', description: 'Premium aged cheddar cheese block.', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGL_9cC4kM0DfB4YpNT2wgbtmMubJV9YL8EA&s' },
    { id: 14, name: 'Butter', price: 19.99, category: 'Dairy & Eggs', description: 'Premium quality salted butter.', image_url: 'https://www.mehadrin.com/wp-content/uploads/2021/09/Butter-2-sticks.png' },

    // Bakery
    { id: 5, name: 'Sourdough Bread', price: 28.99, category: 'Bakery', description: 'Artisanal sourdough loaf, baked fresh daily.', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT8v_EVY743EAWDJSamIqLKHS8T7iBIm-_BA&s' },
    { id: 6, name: 'Croissants (4-pack)', price: 32.49, category: 'Bakery', description: 'Flaky, buttery croissants, perfect for breakfast.', image_url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80' },
    { id: 15, name: 'Chocolate Cake', price: 68.99, category: 'Bakery', description: 'Delicious chocolate cake with rich frosting.', image_url: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg' },
    { id: 16, name: 'Bagels (6-pack)', price: 24.99, category: 'Bakery', description: 'Freshly baked bagels, perfect for breakfast.', image_url: 'https://www.seriouseats.com/thmb/smh66J9YXc-B8PBWXenM-9QTzTg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__01__20170127-bagels-vicky-wasik-2-a2f8b4b04ba74902955c323cfc9df695.jpg' },

    // Pantry
    { id: 7, name: 'Organic Pasta', price: 18.79, category: 'Pantry', description: '500g of organic spaghetti pasta.', image_url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80' },
    { id: 8, name: 'Tomato Sauce', price: 15.19, category: 'Pantry', description: 'Rich and savory tomato and basil pasta sauce.', image_url: 'https://www.primaverakitchen.com/wp-content/uploads/2024/05/Tomato-Sauce-16.jpg' },
    { id: 17, name: 'Rice (5kg)', price: 45.99, category: 'Pantry', description: 'Premium quality long grain white rice.', image_url: 'https://cdn.britannica.com/17/176517-050-6F2B774A/Pile-uncooked-rice-grains-Oryza-sativa.jpg?w=300' },
    { id: 18, name: 'Olive Oil', price: 65.99, category: 'Pantry', description: 'Extra virgin olive oil from Italy.', image_url: 'https://images.everydayhealth.com/images/diet-nutrition/olive-oil-nutrition-facts-benefits-for-skin-and-health-side-effects-more-722x406.jpg?sfvrsn=d588ad6_1' },

    // Meats
    { id: 19, name: 'Fresh Chicken Breast', price: 38.99, category: 'Meats', description: 'Boneless chicken breast, 1kg pack.', image_url: 'https://www.sandravalvassori.com/wp-content/uploads/2023/03/Img1044.jpg' },
    { id: 20, name: 'Beef Steak', price: 128.99, category: 'Meats', description: 'Premium cut beef steak, 500g.', image_url: 'https://www.sbfoods-worldwide.com/recipes/t565ci0000000q4n-img/10_Stake_A.jpg' },
    { id: 21, name: 'Pork Chops', price: 45.99, category: 'Meats', description: 'Fresh pork chops, 1kg pack.', image_url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80' },
    { id: 22, name: 'Salmon Fillet', price: 88.99, category: 'Meats', description: 'Fresh Atlantic salmon fillet, 500g.', image_url: 'https://wildsalmonseafood.com/wp-content/uploads/2023/08/King-Salmon-3-Fillets-scaled.jpg' },

    // Beverages
    { id: 23, name: 'Orange Juice', price: 22.99, category: 'Beverages', description: 'Fresh squeezed orange juice, 1L.', image_url: 'https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Juice-2-of-2.jpeg' },
    { id: 24, name: 'Mineral Water', price: 12.99, category: 'Beverages', description: 'Pack of 6 mineral water bottles.', image_url: 'https://kidspressmagazine.com/wp-content/uploads/2014/04/dreamstime_xl_12522351-685x1024.jpg' },
    { id: 25, name: 'Green Tea', price: 28.99, category: 'Beverages', description: 'Premium green tea leaves, 200g.', image_url: 'https://static.toiimg.com/thumb/msid-121996780,imgsize-60034,width-400,resizemode-4/121996780.jpg' },
    { id: 26, name: 'Coffee Beans', price: 58.99, category: 'Beverages', description: 'Premium arabica coffee beans, 500g.', image_url: 'https://coffeeza.in/cdn/shop/articles/Coffee_Beans_Blog_1080x.jpg?v=1670838724' },

    // Snacks
    { id: 27, name: 'Potato Chips', price: 15.99, category: 'Snacks', description: 'Crispy potato chips, 150g pack.', image_url: 'https://buya1chips.com/cdn/shop/files/PotatoChipsChillyTomato.jpg?v=1742536681&width=800' },
    { id: 28, name: 'Chocolate Cookies', price: 18.99, category: 'Snacks', description: 'Delicious chocolate chip cookies, 200g.', image_url: 'https://thefirstyearblog.com/wp-content/uploads/2024/08/Peanut-Butter-Chocolate-Chip-Cookies-High-Res-42.jpg' },
    { id: 29, name: 'Mixed Nuts', price: 32.99, category: 'Snacks', description: 'Premium mixed nuts, 300g pack.', image_url: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80' },
    { id: 30, name: 'Protein Bar', price: 12.99, category: 'Snacks', description: 'Healthy protein bar, pack of 6.', image_url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80' },

    // Clothing
    { id: 31, name: 'Cotton T-Shirt', price: 68.99, category: 'Clothing', description: 'Comfortable 100% cotton t-shirt.', image_url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80' },
    { id: 32, name: 'Denim Jeans', price: 188.99, category: 'Clothing', description: 'Classic fit denim jeans.', image_url: 'https://inspiring.tonello.com/wp-content/uploads/2024/03/EGO_HIGH-scaled-e1711469471518.jpg.webp' },
    { id: 33, name: 'Winter Jacket', price: 298.99, category: 'Clothing', description: 'Warm winter jacket with hood.', image_url: 'https://www.switchbacktravel.com/sites/default/files/articles%20/Ski%20jacket%20%28Trew%20Gear%20Cosmic%20Jacket%20Primo%20in%20snow%20-%20m%29_0.jpg' },
    { id: 34, name: 'Sports Shoes', price: 258.99, category: 'Clothing', description: 'Comfortable sports shoes for daily wear.', image_url: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/y/21/9e41e168-4e5a-4916-8f2b-d588be5e96ea.jpg' },

    // Electronics
    { id: 35, name: 'Smartphone', price: 2899.99, category: 'Electronics', description: 'Latest model smartphone with high-res camera.', image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80' },
    { id: 36, name: 'Wireless Headphones', price: 458.99, category: 'Electronics', description: 'Noise-cancelling wireless headphones.', image_url: 'https://shop.zebronics.com/cdn/shop/products/Zeb-Jet-pic1.jpg?v=1659157310&width=800' },
    { id: 37, name: 'Smart Watch', price: 1288.99, category: 'Electronics', description: 'Fitness tracking smart watch.', image_url: 'https://i5.walmartimages.com/seo/Clearance-1-7-Smart-Watch-Men-Women-Bluetooth-Call-Make-Calls-Text-Reply-AI-Control-Fitness-Tracker-Compatible-iOS-Android-IP67-Waterproof-3-Days-Use_968b4597-f28f-4227-8553-c1763422632c.bc4b5da0c7cc5f813d85c340eba3138c.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF' },
    { id: 38, name: 'Tablet', price: 1899.99, category: 'Electronics', description: '10-inch tablet with high-resolution display.', image_url: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-1-202410?wid=5120&hei=2880&fmt=webp&qlt=90&.v=eDJDc00wczl1QWk5QmpVYitFNXQwOVgrSXpWVEhWaW9YTGlWRHFoSHU0L1BqbTR3VEdKRWdqMUVib1BPSWdhYWd2S3NaRzcrU0dmYjNHTUFiMnlsWFUxSlgrVWMrMzU1OXo2c2JyNjJZTGdyNS9FSzFhNVRJSXdZQnFCMkJ5K2E&traceId=1' },

    // Household
    { id: 39, name: 'Laundry Detergent', price: 35.99, category: 'Household', description: 'Concentrated laundry detergent, 3L.', image_url: 'https://target.scene7.com/is/image/Target/GUEST_7d68a7e2-c74a-4c8f-99ff-1f5af7f99e3f?wid=1200&hei=1200&qlt=80' },
    { id: 40, name: 'Paper Towels', price: 22.99, category: 'Household', description: 'Pack of 6 premium paper towel rolls.', image_url: 'https://www.aghsupply.com/wp-content/uploads/2022/12/Kitchen-Towel-Roll-aghsupply.jpg' },
    { id: 41, name: 'Trash Bags', price: 28.99, category: 'Household', description: 'Heavy-duty trash bags, pack of 30.', image_url: 'https://afcatusa.com/wp-content/uploads/2024/06/BTGR392_1024x1024@2x-1-768x512.jpg' },
    { id: 42, name: 'Cleaning Spray', price: 18.99, category: 'Household', description: 'All-purpose cleaning spray, 750ml.', image_url: 'data:image/jpeg;base64,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' }
];

const categories = ['All', 'Fresh Produce', 'Dairy & Eggs', 'Bakery', 'Pantry', 'Meats', 'Beverages', 'Snacks', 'Clothing', 'Electronics', 'Household'];

// --- SIMPLE CONFIGURATION ---
// Auth illustration shown on the right side of Login & Sign up pages.
// You can replace this with ANY image URL you like (PNG / JPG / SVG).
const AUTH_SIDE_IMAGE_URL = 'https://static.vecteezy.com/system/resources/previews/002/194/883/non_2x/3d-shopping-online-store-for-sale-mobile-e-commerce-3d-pink-pastel-background-shop-online-on-mobile-app-24-hours-shopping-cart-credit-card-minimal-shopping-online-store-device-3d-rendering-vector.jpg';

// --- DATABASE FOR NEW FEATURES ---
const purchaseHistory = [
    { id: 't-12345', date: '2025-11-20', total: 127.70, items: [{ name: 'Sourdough Bread', qty: 1 }, { name: 'Dozen Eggs', qty: 1 }] },
    { id: 't-12333', date: '2025-11-12', total: 49.80, items: [{ name: 'Fresh Apples', qty: 1 }, { name: 'Organic Bananas', qty: 1 }] },
    { id: 't-12301', date: '2025-11-05', total: 97.70, items: [{ name: 'Organic Pasta', qty: 1 }, { name: 'Tomato Sauce', qty: 2 }] }
];

// --- 2. APPLICATION STATE ---
const appState = {
    currentView: 'login', // Start on the login page
    currentUser: null, // No user logged in by default
    cart: [], // Array of { id, name, price, quantity, image_url }
    currentFilter: 'All',
    searchQuery: '',
    // State for new notification preferences
    notificationPrefs: {
        promotions: true,
        newArrivals: false,
        pastPurchases: true
    },
    // Payment method state
    selectedPaymentMethod: 'alipay',
    paymentCompleted: false
};

// --- LOCAL STORAGE HELPERS ---
function saveUserToStorage(user) {
    try {
        localStorage.setItem('supermarketgo_user', JSON.stringify(user));
    } catch (e) {
        console.warn('Failed to save user to localStorage:', e);
    }
}

function loadUserFromStorage() {
    try {
        const savedUser = localStorage.getItem('supermarketgo_user');
        if (savedUser) {
            return JSON.parse(savedUser);
        }
    } catch (e) {
        console.warn('Failed to load user from localStorage:', e);
    }
    return null;
}

function clearUserFromStorage() {
    try {
        localStorage.removeItem('supermarketgo_user');
        localStorage.removeItem('supermarketgo_cart');
    } catch (e) {
        console.warn('Failed to clear localStorage:', e);
    }
}

function saveCartToStorage(cart) {
    try {
        localStorage.setItem('supermarketgo_cart', JSON.stringify(cart));
    } catch (e) {
        console.warn('Failed to save cart to localStorage:', e);
    }
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('supermarketgo_cart');
        if (savedCart) {
            return JSON.parse(savedCart);
        }
    } catch (e) {
        console.warn('Failed to load cart from localStorage:', e);
    }
    return [];
}

// --- 3. DOM ELEMENTS ---
const appContainer = document.getElementById('app-container');
const navContainer = document.getElementById('main-nav');
const cartBadge = document.createElement('span'); // We'll create this dynamically
const toast = document.getElementById('toast-notification');

cartBadge.id = 'cart-badge';
cartBadge.className = 'absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center hidden';

// --- 4. RENDER FUNCTIONS ---

/**
 * Main render function, acts as a router
 */
function renderApp() {
    // Always render the navigation first, as it depends on appState
    renderNav();
    
    // Clear the main container
    appContainer.innerHTML = '';

    // Handle logged-out views
    if (!appState.currentUser) {
        switch (appState.currentView) {
            case 'login':
                renderLoginPage();
                break;
            case 'signup':
                renderSignupPage();
                break;
            case 'about':
                renderAboutPage();
                break;
            case 'contact':
                renderContactPage();
                break;
            default:
                // If logged out, "Home" and any other page redirects to login
                renderLoginPage();
        }
    } 
    // Handle logged-in views
    else {
         switch (appState.currentView) {
            case 'home':
                renderHomePage();
                break;
            case 'products':
                renderProductsPage();
                break;
            case 'cart':
                renderCartPage();
                break;
            case 'checkout':
                renderCheckoutPage();
                break;
            case 'orderSuccess':
                renderOrderSuccessPage();
                break;
            case 'about':
                renderAboutPage();
                break;
            case 'contact':
                renderContactPage();
                break;
            case 'profile':
                renderProfilePage();
                break;
            // --- NEW VIEWS FOR PROFILE SECTION ---
            case 'editProfile':
                renderEditProfilePage();
                break;
            case 'purchaseHistory':
                renderPurchaseHistoryPage();
                break;
            case 'notifications':
                renderNotificationsPage();
                break;
            default:
                renderHomePage();
        }
    }
    
    // Scroll to top on page change
    window.scrollTo(0, 0);
}

/**
 * Renders the navigation bar based on login state
 */
function renderNav() {
    navContainer.innerHTML = ''; // Clear nav
    let navContent = '';
    
    if (!appState.currentUser) {
        // Logged-out navigation (from your images)
        navContent = `
            <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16 bg-white/70 backdrop-blur-md rounded-lg shadow-md px-6">
                    <!-- Logo -->
                    <a href="#" class="nav-link text-3xl font-bold text-theme-purple-800" data-view="login">
                        SuperMarketGo
                    </a>
                    <!-- Navigation Links -->
                    <div class="hidden md:flex md:items-center md:space-x-8">
                        <a href="#" class="nav-link text-gray-700 hover:text-theme-purple font-medium transition-colors ${appState.currentView === 'home' ? 'text-theme-purple' : ''}" data-view="home">Home</a>
                        <a href="#" class="nav-link text-gray-700 hover:text-theme-purple font-medium transition-colors ${appState.currentView === 'about' ? 'text-theme-purple' : ''}" data-view="about">About Us</a>
                        <a href="#" class="nav-link text-gray-700 hover:text-theme-purple font-medium transition-colors ${appState.currentView === 'contact' ? 'text-theme-purple' : ''}" data-view="contact">Contact</a>
                        <a href="#" class="nav-link text-gray-700 hover:text-theme-purple font-medium transition-colors ${appState.currentView === 'login' ? 'text-theme-purple border-b-2 border-theme-purple' : ''}" data-view="login">Log in</a>
                        <a href="#" class="nav-link text-gray-700 hover:text-theme-purple font-medium transition-colors ${appState.currentView === 'signup' ? 'text-theme-purple border-b-2 border-theme-purple' : ''}" data-view="signup">Sign up</a>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Logged-in navigation
        navContent = `
            <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16 bg-white/70 backdrop-blur-md rounded-lg shadow-md px-6">
                    <!-- Logo -->
                    <a href="#" class="nav-link text-3xl font-bold text-theme-purple-800" data-view="home">
                        SuperMarketGo
                    </a>
                    <!-- Navigation Links -->
                    <div class="hidden md:flex md:items-center md:space-x-8">
                        <a href="#" class="nav-link text-gray-700 hover:text-theme-purple font-medium transition-colors ${appState.currentView === 'home' ? 'text-theme-purple' : ''}" data-view="home">Home</a>
                        <a href="#" class="nav-link text-gray-700 hover:text-theme-purple font-medium transition-colors ${appState.currentView === 'products' ? 'text-theme-purple' : ''}" data-view="products">Products</a>
                        <a href="#" class="nav-link text-gray-700 hover:text-theme-purple font-medium transition-colors ${appState.currentView === 'about' ? 'text-theme-purple' : ''}" data-view="about">About Us</a>
                        <a href="#" class="nav-link text-gray-700 hover:text-theme-purple font-medium transition-colors ${appState.currentView === 'contact' ? 'text-theme-purple' : ''}" data-view="contact">Contact</a>
                    </div>
                    <!-- User & Cart -->
                    <div class="flex items-center gap-6">
                        <a href="#" class="nav-link relative text-gray-600 hover:text-theme-purple transition-colors" data-view="cart">
                            <i class="ph ph-shopping-cart text-3xl"></i>
                        </a>
                        <a href="#" class="nav-link text-gray-700 hover:text-theme-purple font-medium transition-colors" data-view="profile">
                            Welcome, ${appState.currentUser.name}
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
    navContainer.innerHTML = navContent;
    
    // Re-attach cart badge if it exists
    const cartLink = navContainer.querySelector('[data-view="cart"]');
    if (cartLink) {
        cartLink.appendChild(cartBadge);
    }
}

/**
 * Renders the Login Page (based on 1.jpg)
 */
function renderLoginPage() {
    appContainer.innerHTML = `
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

/**
 * Renders the Sign up Page (based on 2.jpg)
 */
function renderSignupPage() {
    appContainer.innerHTML = `
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

/**
 * Renders the (Logged-in) Home Page
 */
function renderHomePage() {
    const heroHTML = `
        <div class="bg-gradient-to-r from-theme-purple-800 to-theme-purple-700 rounded-lg shadow-xl text-white p-8 md:p-16 text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome, ${appState.currentUser.name}!</h1>
            <p class="text-lg md:text-2xl mb-8">Fresh groceries delivered right to your door.</p>
            <button class="nav-link bg-white text-theme-purple-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors" data-view="products">
                Shop All Products
            </button>
        </div>
    `;

    const categoriesHTML = `
        <div class="mt-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Shop by Category</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                ${categories.filter(c => c !== 'All').map(category => `
                    <button class="category-btn bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" data-category="${category}">
                        <span class="text-4xl">${getCategoryEmoji(category)}</span>
                        <h3 class="text-xl font-semibold text-gray-700 mt-4">${category}</h3>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    const featuredProducts = productData.slice(0, 8);
    const featuredHTML = `
         <div class="mt-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Featured Products</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${featuredProducts.map(product => renderProductCard(product)).join('')}
            </div>
        </div>
    `;

    appContainer.innerHTML = heroHTML + categoriesHTML + featuredHTML;
}

/**
 * Renders the "All Products" Page
 */
function renderProductsPage() {
    const filteredProducts = productData
        .filter(product => appState.currentFilter === 'All' || product.category === appState.currentFilter)
        .filter(product => product.name.toLowerCase().includes(appState.searchQuery.toLowerCase()));

    const controlsHTML = `
        <div class="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-md mb-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <h1 class="text-4xl font-bold text-theme-purple-800">Our Products</h1>
                <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <input type="search" id="search-bar" placeholder="Search products..." value="${appState.searchQuery}"
                           class="w-full sm:w-64 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-purple-800">
                    <select id="category-filter" class="w-full sm:w-48 px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-theme-purple-800">
                        ${categories.map(category => `
                            <option value="${category}" ${appState.currentFilter === category ? 'selected' : ''}>${category}</option>
                        `).join('')}
                    </select>
                </div>
            </div>
        </div>
    `;

    const productsGridHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            ${filteredProducts.length > 0 ? 
                filteredProducts.map(product => renderProductCard(product)).join('') :
                `<p class="text-gray-600 col-span-full text-center text-lg bg-white/70 p-8 rounded-lg">No products found matching your criteria.</p>`
            }
        </div>
    `;

    appContainer.innerHTML = controlsHTML + productsGridHTML;
}

/**
 * Renders the "About Us" Page
 */
function renderAboutPage() {
    appContainer.innerHTML = `
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 mt-8">
            <h1 class="text-4xl font-bold text-theme-purple-800 mb-6">About SuperMarketGo</h1>
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
                Welcome to SuperMarketGo, your new favorite online grocery store. Our mission is to bring you the freshest produce, pantry staples, and household goods with the click of a button.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
                Founded in 2025, we believe that grocery shopping should be simple, convenient, and enjoyable. We partner with local farms and trusted brands to ensure every item you receive is of the highest quality.
            </p>
        </div>
    `;
}

/**
 * Renders the "Contact Us" Page
 */
function renderContactPage() {
    appContainer.innerHTML = `
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 mt-8">
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h1 class="text-4xl font-bold text-theme-purple-800 mb-6">Get in Touch</h1>
                    <p class="text-lg text-gray-700 leading-relaxed mb-8">
                        Have a question or feedback? We'd love to hear from you. Fill out the form or reach out to us directly.
                    </p>
                    <div class="space-y-4">
                        <p class="text-lg text-gray-700"><i class="ph ph-phone-call text-xl text-theme-purple-800 mr-2"></i> 1-800-555-GO</p>
                        <p class="text-lg text-gray-700"><i class="ph ph-envelope text-xl text-theme-purple-800 mr-2"></i> help@supermarketgo.com</p>
                        <p class="text-lg text-gray-700"><i class="ph ph-map-pin text-xl text-theme-purple-800 mr-2"></i> 123 Grocery Lane, Anytown, USA</p>
                    </div>
                </div>
                <div>
                    <form id="contact-form" class="space-y-6">
                        <div>
                            <input type="text" placeholder="Your Name" required class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-purple">
                        </div>
                        <div>
                            <input type="email" placeholder="Your Email" required class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-purple">
                        </div>
                        <div>
                            <textarea placeholder="Your Message" required rows="5" class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-purple"></textarea>
                        </div>
                        <div>
                            <button type="submit" class="w-full bg-theme-purple-800 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-theme-purple-700 transition-colors shadow-lg">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}

/**
 * Renders the "Profile" Hub Page
 */
function renderProfilePage() {
    // This is the new Profile Hub page
    appContainer.innerHTML = `
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 mt-8 max-w-3xl mx-auto">
            <!-- Profile Header -->
            <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <img src="${appState.currentUser.avatarUrl}" alt="Profile" class="w-24 h-24 rounded-full shadow-lg border-4 border-white">
                <div class="text-center sm:text-left">
                    <h1 class="text-3xl font-bold text-theme-purple-800">${appState.currentUser.name}</h1>
                    <p class="text-lg text-gray-600">${appState.currentUser.email}</p>
                    <a href="#" class="nav-link text-sm text-theme-purple-800 hover:underline" data-view="editProfile">Edit Profile</a>
                </div>
            </div>

            <!-- Menu List -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" class="profile-menu-item nav-link" data-view="purchaseHistory">
                    <i class="ph ph-archive text-3xl"></i>
                    <span>Purchase History</span>
                    <i class="ph ph-caret-right text-xl text-gray-400"></i>
                </a>
                <a href="#" class="profile-menu-item nav-link" data-view="editProfile">
                    <i class="ph ph-user-circle-gear text-3xl"></i>
                    <span>Manage Account</span>
                    <i class="ph ph-caret-right text-xl text-gray-400"></i>
                </a>
                <a href="#" class="profile-menu-item nav-link" data-view="notifications">
                    <i class="ph ph-bell text-3xl"></i>
                    <span>Notification Settings</span>
                    <i class="ph ph-caret-right text-xl text-gray-400"></i>
                </a>
                <a href="#" class="profile-menu-item">
                    <i class="ph ph-question text-3xl"></i>
                    <span>Help & Support</span>
                    <i class="ph ph-caret-right text-xl text-gray-400"></i>
                </a>
            </div>
            
            <!-- Logout Button -->
            <button id="logout-btn" class="w-full mt-8 bg-theme-purple-100 text-theme-purple-800 font-bold py-3 px-6 rounded-lg text-lg hover:bg-theme-purple-50 transition-colors">
                Log Out
            </button>
        </div>

        <style>
            .profile-menu-item {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1.25rem;
                background-color: white;
                border-radius: 0.75rem;
                border: 1px solid #e5e7eb;
                font-size: 1.1rem;
                font-weight: 500;
                color: #374151; /* gray-700 */
                transition: all 0.2s ease;
                box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            }
            .profile-menu-item:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 10px rgba(0,0,0,0.08);
                color: #581c87; /* theme-purple-800 */
            }
            .profile-menu-item span {
                flex-grow: 1;
            }
            .profile-menu-item i:first-child {
                color: #6b21a8; /* theme-purple-700 */
            }
        </style>
    `;
}

/**
 * Renders the "Edit Profile" Page
 */
function renderEditProfilePage() {
    appContainer.innerHTML = `
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 mt-8 max-w-3xl mx-auto">
            <div class="flex items-center gap-3 mb-6">
                <button class="back-btn p-2 rounded-full hover:bg-gray-200">
                    <i class="ph ph-arrow-left text-2xl text-theme-purple-800"></i>
                </button>
                <h1 class="text-4xl font-bold text-theme-purple-800">Edit Profile</h1>
            </div>
            
            <form id="edit-profile-form" class="space-y-6">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Avatar URL</label>
                    <input type="text" id="avatar" class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm" value="${appState.currentUser.avatarUrl}">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" id="name" required class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm" value="${appState.currentUser.name}">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" id="email" required class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm" value="${appState.currentUser.email}">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" id="phone" class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm" value="${appState.currentUser.phone}">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input type="text" id="address" class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm" value="${appState.currentUser.address}">
                    </div>
                </div>
                
                <div class="border-t border-gray-200 pt-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Change Password</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input type="password" id="new_password" placeholder="New Password" class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm">
                        </div>
                        <div>
                            <input type="password" id="confirm_new_password" placeholder="Confirm New Password" class="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm">
                        </div>
                    </div>
                </div>

                <button type="submit" class="w-full bg-theme-purple-800 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-theme-purple-700 transition-colors shadow-lg">
                    Save Changes
                </button>
            </form>
        </div>
    `;
}

/**
 * Renders the "Purchase History" Page
 */
function renderPurchaseHistoryPage() {
    appContainer.innerHTML = `
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 mt-8 max-w-3xl mx-auto">
            <div class="flex items-center gap-3 mb-6">
                <button class="back-btn p-2 rounded-full hover:bg-gray-200">
                    <i class="ph ph-arrow-left text-2xl text-theme-purple-800"></i>
                </button>
                <h1 class="text-4xl font-bold text-theme-purple-800">Purchase History</h1>
            </div>
            
            <div class="space-y-4">
                ${purchaseHistory.map(order => `
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <div class="flex justify-between items-center mb-2 pb-2 border-b">
                            <div>
                                <span class="font-bold text-lg text-theme-purple-800">Order #${order.id}</span>
                                <span class="text-sm text-gray-500 ml-2">${order.date}</span>
                            </div>
                            <span class="font-bold text-lg text-gray-800">¥${order.total.toFixed(2)}</span>
                        </div>
                        <ul class="text-sm text-gray-600 list-disc list-inside">
                            ${order.items.map(item => `<li>${item.name} (x${item.qty})</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

/**
 * Renders the "Notification Settings" Page
 */
function renderNotificationsPage() {
     appContainer.innerHTML = `
        <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 mt-8 max-w-3xl mx-auto">
            <div class="flex items-center gap-3 mb-6">
                <button class="back-btn p-2 rounded-full hover:bg-gray-200">
                    <i class="ph ph-arrow-left text-2xl text-theme-purple-800"></i>
                </button>
                <h1 class="text-4xl font-bold text-theme-purple-800">Notifications</h1>
            </div>

            <div class="space-y-4" id="notification-form">
                ${renderToggle('promotions', 'General Promotions', 'Receive alerts about store-wide sales.', appState.notificationPrefs.promotions)}
                ${renderToggle('newArrivals', 'New Arrivals', 'Notify me about new products in my favorite categories.', appState.notificationPrefs.newArrivals)}
                ${renderToggle('pastPurchases', 'Personalized Offers', 'Get alerts for promos on items you buy often.', appState.notificationPrefs.pastPurchases)}
            </div>

            <div class="mt-8">
                <h3 class="text-xl font-semibold text-gray-800 mb-4">Favorite Categories</h3>
                <div class="flex flex-wrap gap-3">
                    ${categories.filter(c => c !== 'All').map(cat => `
                        <button class="fav-category-btn bg-white border border-gray-300 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-theme-purple-50 hover:border-theme-purple-800">
                            ${cat}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

/**
 * Helper function to render a notification toggle switch
 */
function renderToggle(id, title, description, isChecked) {
    return `
        <div class="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div class="flex-grow pr-4">
                <h4 class="font-semibold text-lg text-gray-800">${title}</h4>
                <p class="text-sm text-gray-500">${description}</p>
            </div>
            <button type="button" class="notification-toggle flex-shrink-0 w-12 h-7 rounded-full p-1 transition-colors ${isChecked ? 'bg-theme-purple-800' : 'bg-gray-300'}" data-pref-id="${id}">
                <span class="block w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${isChecked ? 'translate-x-5' : 'translate-x-0'}"></span>
            </button>
        </div>
    `;
}

/**
 * Helper function to render a single product card
 */
function renderProductCard(product) {
    const reviews = appState.reviews[product.id] || [];
    const count = reviews.length;
    const avg = count ? (reviews.reduce((s,r) => s + r.rating, 0) / count) : 0;
    const stars = renderStars(avg);
    const reviewLabel = `${count} review${count !== 1 ? 's' : ''}`;

    return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300">
            <img src="${product.image_url}" alt="${product.name}" class="w-full h-48 object-cover" 
                 onerror="this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Available'">
            <div class="p-4 flex flex-col flex-grow">
                <div class="flex justify-between items-start gap-3">
                    <div class="flex-1">
                        <h3 class="text-lg font-semibold text-gray-800">${product.name}</h3>
                        <p class="text-sm text-gray-500 mt-1 line-clamp-3">${product.description}</p>
                    </div>
                    <div class="text-right flex-shrink-0">
                        <div class="inline-block bg-theme-purple-50 text-theme-purple-800 font-bold px-3 py-1 rounded-lg">¥${product.price.toFixed(2)}</div>
                        <div class="text-sm text-gray-500 mt-2">per unit</div>
                    </div>
                </div>

                <div class="mt-4 mt-auto">
                    <div class="flex items-center justify-between py-2">
                        <div class="flex flex-col items-start gap-1">
                            <div class="text-yellow-500 text-sm">${stars}</div>
                            <div class="text-xs text-gray-500">${reviewLabel}</div>
                        </div>
                        <div class="flex items-center gap-2 flex-shrink-0">
                            <button class="add-to-cart-btn inline-flex items-center gap-2 bg-gradient-to-r from-theme-purple-800 to-theme-purple-700 text-white px-3 py-2 rounded-lg shadow font-medium hover:opacity-95 transition-opacity"
                                    data-id="${product.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h13"/></svg>
                                Add
                            </button>
                            <button class="open-reviews-btn bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50 whitespace-nowrap" data-id="${product.id}">Reviews</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Renders the Shopping Cart Page
 */
function renderCartPage() {
    if (appState.cart.length === 0) {
        appContainer.innerHTML = `
            <div class="text-center bg-white/70 backdrop-blur-md p-12 rounded-lg shadow-lg">
                <h1 class="text-4xl font-bold text-theme-purple-800 mb-4">Your Cart is Empty</h1>
                <p class="text-gray-600 text-lg mb-8">Looks like you haven't added anything to your cart yet.</p>
                <button class="nav-link bg-theme-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-theme-purple-700 transition-colors" data-view="products">
                    Start Shopping
                </button>
            </div>
        `;
        return;
    }

    const subtotal = getCartSubtotal();
    const tax = subtotal * 0.05; // 5% simulated tax
    const total = subtotal + tax;

    const itemsHTML = appState.cart.map(item => `
        <div class="flex flex-col sm:flex-row items-center justify-between py-4 border-b border-gray-200">
            <div class="flex items-center gap-4 mb-4 sm:mb-0">
                <img src="${item.image_url}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg shadow"
                     onerror="this.src='https://placehold.co/100x100/cccccc/ffffff?text=Image'">
                <div>
                    <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
                    <p class="text-gray-600">¥${item.price.toFixed(2)} each</p>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex items-center border border-gray-300 rounded-lg">
                    <button class="cart-quantity-btn px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100 rounded-l-lg" data-id="${item.id}" data-change="-1">
                        -
                    </button>
                    <span class="px-4 py-1 text-lg">${item.quantity}</span>
                    <button class="cart-quantity-btn px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100 rounded-r-lg" data-id="${item.id}" data-change="1">
                        +
                    </button>
                </div>
                <span class="text-lg font-bold text-gray-800 w-24 text-right">
                    ¥${(item.price * item.quantity).toFixed(2)}
                </span>
                <button class="cart-remove-btn text-red-500 hover:text-red-700" data-id="${item.id}">
                    <i class="ph ph-trash text-2xl"></i>
                </button>
            </div>
        </div>
    `).join('');

    const summaryHTML = `
        <div class="w-full lg:w-1/3 bg-white/90 p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold text-theme-purple-800 border-b pb-4 mb-4">Order Summary</h2>
            <div class="space-y-3">
                <div class="flex justify-between">
                    <span class="text-gray-600">Subtotal</span>
                    <span class="font-semibold">¥${subtotal.toFixed(2)}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-600">Est. Tax (5%)</span>
                    <span class="font-semibold">¥${tax.toFixed(2)}</span>
                </div>
                <div class="flex justify-between text-2xl font-bold text-gray-800 pt-4 border-t mt-4">
                    <span>Total</span>
                    <span>¥${total.toFixed(2)}</span>
                </div>
            </div>
            <button id="checkout-btn" class="mt-6 w-full bg-theme-purple-800 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-theme-purple-700 transition-colors">
                Proceed to Checkout
            </button>
        </div>
    `;
    
    appContainer.innerHTML = `
        <h1 class="text-4xl font-bold text-theme-purple-800 mb-8">Your Shopping Cart</h1>
        <div class="flex flex-col lg:flex-row gap-8">
            <div class="w-full lg:w-2/3 bg-white/90 p-6 rounded-lg shadow-lg">
                ${itemsHTML}
            </div>
            ${summaryHTML}
        </div>
    `;
}

/**
 * Renders the Checkout Page
 */
function renderCheckoutPage() {
    const subtotal = getCartSubtotal();
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    appContainer.innerHTML = `
        <h1 class="text-4xl font-bold text-theme-purple-800 mb-8">Checkout</h1>
        <div class="flex flex-col-reverse lg:flex-row gap-8">
            <!-- Form -->
            <form id="checkout-form" class="w-full lg:w-2/3 bg-white/90 p-6 md:p-8 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold text-theme-purple-800 mb-6">1. Shipping Information</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="name" name="name" required class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-theme-purple-800 focus:border-theme-purple-800" value="${appState.currentUser.name}">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" name="email" required class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-theme-purple-800 focus:border-theme-purple-800" value="${appState.currentUser.email}">
                    </div>
                    <div class="col-span-1 md:col-span-2">
                        <label for="address" class="block text-sm font-medium text-gray-700">Street Address</label>
                        <input type="text" id="address" name="address" required class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-theme-purple-800 focus:border-theme-purple-800" value="${appState.currentUser.address}">
                    </div>
                    <div>
                        <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                        <input type="text" id="city" name="city" required class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-theme-purple-800 focus:border-theme-purple-800" value="Shanghai">
                    </div>
                    <div>
                        <label for="zipcode" class="block text-sm font-medium text-gray-700">Zip Code</label>
                        <input type="text" id="zipcode" name="zipcode" required class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-theme-purple-800 focus:border-theme-purple-800" value="200000">
                    </div>
                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-theme-purple-800 focus:border-theme-purple-800" value="${appState.currentUser.phone}">
                    </div>
                </div>

                <h2 class="text-2xl font-bold text-theme-purple-800 mt-8 mb-6">2. Payment Method</h2>
                <div class="space-y-3 mb-6">
                    <div class="payment-option ${appState.selectedPaymentMethod === 'alipay' ? 'selected' : ''}" data-payment="alipay">
                        <input type="radio" id="alipay" name="payment" value="alipay" ${appState.selectedPaymentMethod === 'alipay' ? 'checked' : ''}>
                        <label for="alipay" class="flex items-center cursor-pointer">
                            <img src="https://placehold.co/100x40/1677ff/ffffff?text=Alipay" alt="Alipay" class="payment-logo">
                            <span class="font-medium">Alipay</span>
                        </label>
                    </div>
                    <div class="payment-option ${appState.selectedPaymentMethod === 'wechat' ? 'selected' : ''}" data-payment="wechat">
                        <input type="radio" id="wechat" name="payment" value="wechat" ${appState.selectedPaymentMethod === 'wechat' ? 'checked' : ''}>
                        <label for="wechat" class="flex items-center cursor-pointer">
                            <img src="https://placehold.co/100x40/07c160/ffffff?text=WeChat+Pay" alt="WeChat Pay" class="payment-logo">
                            <span class="font-medium">WeChat Pay</span>
                        </label>
                    </div>
                    <div class="payment-option ${appState.selectedPaymentMethod === 'paypal' ? 'selected' : ''}" data-payment="paypal">
                        <input type="radio" id="paypal" name="payment" value="paypal" ${appState.selectedPaymentMethod === 'paypal' ? 'checked' : ''}>
                        <label for="paypal" class="flex items-center cursor-pointer">
                            <img src="https://placehold.co/100x40/003087/ffffff?text=PayPal" alt="PayPal" class="payment-logo">
                            <span class="font-medium">PayPal</span>
                        </label>
                    </div>
                </div>
                
                <!-- QR Code Payment Display -->
                <div id="qr-payment-display" class="mb-6">
                    <div class="bg-white border-2 border-theme-purple-200 rounded-lg p-6 text-center">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">
                            Scan QR Code to Pay with ${appState.selectedPaymentMethod === 'alipay' ? 'Alipay' : appState.selectedPaymentMethod === 'wechat' ? 'WeChat Pay' : 'PayPal'}
                        </h3>
                        <div class="flex justify-center mb-4">
                            <div id="qr-code-container" class="bg-white p-4 rounded-lg border-2 border-gray-200 inline-block">
                                <img id="payment-qr-code" src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=SuperMarketGo-Payment-Demo" alt="Payment QR Code" style="display: block; width: 250px; height: 250px;">
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 mb-2">
                            Open ${appState.selectedPaymentMethod === 'alipay' ? 'Alipay' : appState.selectedPaymentMethod === 'wechat' ? 'WeChat' : 'PayPal'} app on your phone and scan this QR code
                        </p>
                        <p class="text-xs text-gray-500">
                            Amount: <span class="font-semibold text-theme-purple-800" id="qr-payment-amount">${appState.selectedPaymentMethod === 'paypal' ? '$0.00' : '¥0.00'}</span>
                        </p>
                        <div class="mt-4 flex items-center justify-center space-x-2">
                            <div class="flex items-center">
                                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                                <span class="text-sm text-gray-600">Waiting for payment...</span>
                            </div>
                        </div>
                        <button type="button" id="simulate-payment-btn" class="mt-4 px-6 py-2 bg-theme-purple-800 text-white rounded-lg hover:bg-theme-purple-700 transition-colors text-sm">
                            Payment Complete
                        </button>
                    </div>
                </div>

                <button type="submit" class="mt-8 w-full bg-theme-purple-800 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-theme-purple-700 transition-colors">
                    Place Order
                </button>
            </form>

            <!-- Order Summary -->
            <div class="w-full lg:w-1/3 bg-white/90 p-6 rounded-lg shadow-lg h-fit">
                <h2 class="text-2xl font-bold text-theme-purple-800 border-b pb-4 mb-4">Order Summary</h2>
                <div class="space-y-3">
                    <div class="flex justify-between">
                        <span class="text-gray-600">Subtotal</span>
                        <span class="font-semibold">¥${subtotal.toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Est. Tax (5%)</span>
                        <span class="font-semibold">¥${tax.toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between text-2xl font-bold text-gray-800 pt-4 border-t mt-4">
                        <span>Total</span>
                        <span>¥${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Generate QR code when checkout page loads
    setTimeout(() => {
        generatePaymentQRCode(appState.selectedPaymentMethod);
    }, 100);
}

/**
 * Renders the Order Success "Thank You" Page
 */
function renderOrderSuccessPage() {
    appContainer.innerHTML = `
        <div class="text-center bg-white/70 backdrop-blur-md p-12 rounded-lg shadow-lg">
            <span class="text-8xl">🎉</span>
            <h1 class="text-4xl font-bold text-theme-purple-800 my-4">Thank You!</h1>
            <p class="text-gray-600 text-lg mb-8">Your order has been placed successfully. We'll send a confirmation email shortly.</p>
            <div class="flex items-center justify-center gap-4">
                <button id="track-order-btn" class="bg-white text-theme-purple-800 font-bold py-3 px-6 rounded-full text-lg border border-theme-purple-800 hover:bg-theme-purple-50 transition-colors">
                                    Track Order
                </button>
                <button class="nav-link bg-theme-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-theme-purple-700 transition-colors" data-view="home">
                    Back to Home
                </button>
            </div>
        </div>
    `;
}

// --- 5. HELPER & LOGIC FUNCTIONS ---

/**
 * Navigate to a new view
 */
function navigateTo(view) {
    appState.currentView = view;
    appState.currentFilter = 'All'; // Reset filter on nav
    appState.searchQuery = ''; // Clear search when navigating
    renderApp();
}

/**
 * Adds a product to the cart
 */
function addToCart(productId) {
    const product = productData.find(p => p.id === productId);
    if (!product) return;

    const cartItem = appState.cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        appState.cart.push({ ...product, quantity: 1 });
    }
    // Save cart to localStorage
    if (appState.currentUser) {
        saveCartToStorage(appState.cart);
    }
    updateCartBadge();
    showToast("Item added to cart!");
}

/**
 * Updates the quantity of a cart item
 */
function updateCartQuantity(productId, change) {
    const cartItem = appState.cart.find(item => item.id === productId);
    if (!cartItem) return;

    cartItem.quantity += change;

    if (cartItem.quantity <= 0) {
        removeFromCart(productId);
    } else {
        // Save cart to localStorage
        if (appState.currentUser) {
            saveCartToStorage(appState.cart);
        }
        renderApp();
        updateCartBadge();
    }
}

/**
 * Removes an item from the cart completely
 */
function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.id !== productId);
    // Save cart to localStorage
    if (appState.currentUser) {
        saveCartToStorage(appState.cart);
    }
    renderApp();
    updateCartBadge();
    showToast("Item removed from cart.");
}

/**
 * Updates the little red badge on the cart icon
 */
function updateCartBadge() {
    if (!appState.currentUser) {
        cartBadge.classList.add('hidden');
        return;
    }
    const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems > 0) {
        cartBadge.textContent = totalItems;
        cartBadge.classList.remove('hidden');
    } else {
        cartBadge.classList.add('hidden');
    }
}

/**
 * Calculates the total price of all items in the cart
 */
function getCartSubtotal() {
    return appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

/**
 * Dynamically loads QR code library if not already loaded
 */
function loadQRCodeLibrary() {
    return new Promise((resolve, reject) => {
        // Check if already loaded
        if (typeof QRCode !== 'undefined') {
            resolve();
            return;
        }
        
        // Try multiple CDN sources
        const cdnSources = [
            'https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js',
            'https://unpkg.com/qrcode@1.5.3/build/qrcode.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/qrcode/1.5.3/qrcode.min.js'
        ];
        
        let currentSource = 0;
        
        const tryLoad = () => {
            if (currentSource >= cdnSources.length) {
                reject(new Error('All CDN sources failed'));
                return;
            }
            
            const script = document.createElement('script');
            script.src = cdnSources[currentSource];
            script.onload = () => {
                // Wait a bit for the library to initialize
                setTimeout(() => {
                    if (typeof QRCode !== 'undefined') {
                        resolve();
                    } else {
                        currentSource++;
                        tryLoad();
                    }
                }, 100);
            };
            script.onerror = () => {
                currentSource++;
                tryLoad();
            };
            document.head.appendChild(script);
        };
        
        tryLoad();
    });
}

/**
 * Generates QR code for payment (Alipay, WeChat Pay, or PayPal)
 */
function generatePaymentQRCode(paymentMethod) {
    const subtotal = getCartSubtotal();
    const tax = subtotal * 0.05;
    const totalAmount = subtotal + tax;
    const orderId = 'ORD-' + Date.now();
    
    // Update payment amount display
    const amountDisplay = document.getElementById('qr-payment-amount');
    if (amountDisplay) {
        // PayPal uses USD, others use local currency (¥)
        const currency = paymentMethod === 'paypal' ? '$' : '¥';
        amountDisplay.textContent = `${currency}${totalAmount.toFixed(2)}`;
    }
    
    // Update payment method text
    const qrDisplay = document.getElementById('qr-payment-display');
    if (qrDisplay) {
        const title = qrDisplay.querySelector('h3');
        const instruction = qrDisplay.querySelector('p');
        if (title) {
            const paymentName = paymentMethod === 'alipay' ? 'Alipay' : paymentMethod === 'wechat' ? 'WeChat Pay' : 'PayPal';
            title.textContent = `Scan QR Code to Pay with ${paymentName}`;
        }
        if (instruction) {
            const appName = paymentMethod === 'alipay' ? 'Alipay' : paymentMethod === 'wechat' ? 'WeChat' : 'PayPal';
            instruction.textContent = `Open ${appName} app on your phone and scan this QR code`;
        }
    }
    
    // Display QR code image
    const container = document.getElementById('qr-code-container');
    if (!container) {
        console.error('QR code container not found');
        return;
    }
    
    // Use QR code image from QR Server API
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=SuperMarketGo-Payment-${paymentMethod}-${orderId}-Amount-${totalAmount.toFixed(2)}`;
    container.innerHTML = `<img id="payment-qr-code" src="${qrCodeUrl}" alt="Payment QR Code" style="display: block; width: 250px; height: 250px;">`;
    
    // Reset payment button state
    const paymentBtn = document.getElementById('simulate-payment-btn');
    if (paymentBtn) {
        paymentBtn.textContent = 'Payment Complete';
        paymentBtn.classList.remove('bg-green-600', 'cursor-not-allowed');
        paymentBtn.classList.add('bg-theme-purple-800', 'hover:bg-theme-purple-700');
        paymentBtn.disabled = false;
    }
    
    // Reset payment status
    appState.paymentCompleted = false;
}

/**
 * Shows the toast notification
 */
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000); // Hide after 3 seconds
}

/**
 * Gets a fun emoji for a category
 */
function getCategoryEmoji(category) {
    switch (category) {
        case 'Fresh Produce': return '🍎';
        case 'Dairy & Eggs': return '🥛';
        case 'Bakery': return '🍞';
        case 'Pantry': return '🥫';
        case 'Meats': return '🥩';
        case 'Beverages': return '🥤';
        case 'Snacks': return '🍿';
        case 'Clothing': return '👕';
        case 'Electronics': return '📱';
        case 'Household': return '🧹';
        default: return '🛒';
    }
}

// --- 6. EVENT HANDLERS ---

function handleNavClick(e) {
    e.preventDefault();
    const link = e.target.closest('.nav-link');
    if (link && link.dataset.view) {
        navigateTo(link.dataset.view);
    }
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const name = username.charAt(0).toUpperCase() + username.slice(1);
    // Simulate login
    appState.currentUser = { 
        name: name,
        email: username + '@example.com',
        phone: '555-123-4567',
        address: '123 Grocery Lane, Anytown, USA',
        avatarUrl: `https://placehold.co/100x100/a78bfa/ffffff?text=${name.charAt(0).toUpperCase()}`
    };
    // Save user to localStorage for persistent login
    saveUserToStorage(appState.currentUser);
    // Restore cart from localStorage if available
    const savedCart = loadCartFromStorage();
    if (savedCart && savedCart.length > 0) {
        appState.cart = savedCart;
        updateCartBadge();
    }
    showToast("Login successful! Welcome, " + name);
    navigateTo('home');
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // Simulate signup
    appState.currentUser = { 
        name: name || 'Demo User',
        email: email || 'demo@example.com',
        phone: '555-123-4567',
        address: '123 Grocery Lane, Anytown, USA',
        avatarUrl: `https://placehold.co/100x100/a78bfa/ffffff?text=${name ? name.charAt(0).toUpperCase() : 'D'}`
    };
    // Save user to localStorage for persistent login
    saveUserToStorage(appState.currentUser);
    // Restore cart from localStorage if available
    const savedCart = loadCartFromStorage();
    if (savedCart && savedCart.length > 0) {
        appState.cart = savedCart;
        updateCartBadge();
    }
    showToast("Account created! Welcome, " + (name || 'Demo User'));
    navigateTo('home');
}

function handleLogout(e) {
    e.preventDefault();
    appState.currentUser = null;
    appState.cart = [];
    // Clear localStorage on logout
    clearUserFromStorage();
    updateCartBadge();
    showToast("You have been logged out.");
    navigateTo('login');
}

function handleContactSubmit(e) {
    e.preventDefault();
    showToast("Message sent! (Simulation)");
    e.target.reset();
}

/**
 * NEW: Handle saving the profile form
 */
function handleProfileSave(e) {
    e.preventDefault();
    const form = e.target;
    appState.currentUser.name = form.elements.name.value;
    appState.currentUser.email = form.elements.email.value;
    appState.currentUser.phone = form.elements.phone.value;
    appState.currentUser.address = form.elements.address.value;
    appState.currentUser.avatarUrl = form.elements.avatar.value;
    // Save updated user info to localStorage
    saveUserToStorage(appState.currentUser);
    
    // Password change simulation
    if (form.elements.new_password.value) {
        showToast("Profile and password updated!");
    } else {
        showToast("Profile changes saved!");
    }
    navigateTo('profile');
}

/**
 * NEW: Handle notification toggle
 */
function handleNotificationToggle(e) {
    const button = e.target.closest('.notification-toggle');
    if (!button) return;
    
    const prefId = button.dataset.prefId;
    const isChecked = !appState.notificationPrefs[prefId];
    appState.notificationPrefs[prefId] = isChecked;

    // Update UI
    button.classList.toggle('bg-theme-purple-800', isChecked);
    button.classList.toggle('bg-gray-300', !isChecked);
    button.querySelector('span').classList.toggle('translate-x-5', isChecked);
    button.querySelector('span').classList.toggle('translate-x-0', !isChecked);
}

function handleSearch(e) {
    appState.searchQuery = e.target.value;
    renderApp();
}

function handleFilter(e) {
    appState.currentFilter = e.target.value;
    renderApp();
}

function placeOrder(e) {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity() === false) {
        form.reportValidity();
        return;
    }
    
    // Check if payment is completed
    if (!appState.paymentCompleted) {
        showToast('Please complete the payment by scanning the QR code first.');
        return;
    }
    
    // Simulate order placement and keep a reference to the (demo) order
    appState.lastOrder = {
        id: 'T-' + Date.now(),
        placedAt: new Date().toISOString()
    };
    appState.cart = [];
    // Clear cart from localStorage after order is placed
    if (appState.currentUser) {
        saveCartToStorage([]);
    }
    appState.paymentCompleted = false; // Reset payment status
    updateCartBadge();
    navigateTo('orderSuccess');
}

// --- Reviews feature ---
// Structure: { productId: [ { rating, text, author, date } ] }
appState.reviews = {};

// Utility: render star string from average (rounded)
function renderStars(avg) {
    const full = Math.round(avg);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
}

// Reviews for every product
function generateAutoReviews() {
    const asianNames = [
        'Li Wei','Akira Sato','Hiroshi Tanaka','Mariya','Mim','Yuki Nakamura','Xiao Li','Mei Ling','Anika','Nguyễn Văn','Tran Thi','Panya Chai','Fatima','Kaito Yamamoto','Linh Hoang'
    ];
    const sampleTexts = [
        'Very fresh and high quality.',
        'Good value for money.',
        'Packaging was excellent and product arrived on time.',
        'Tasted great — will buy again.',
        'Slightly smaller than expected but still good.',
        'Highly recommend for daily use.',
        'Fast delivery and friendly service.'
    ];

    appState.reviews = {};
    productData.forEach(product => {
        const count = 50 + Math.floor(Math.random() * 11); // 50-60 reviews
        appState.reviews[product.id] = [];
        for (let i = 0; i < count; i++) {
            const rating = 1 + Math.floor(Math.random() * 5);
            const text = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
            const author = asianNames[Math.floor(Math.random() * asianNames.length)];
            const daysAgo = Math.floor(Math.random() * 30);
            const date = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString().slice(0,10);
            appState.reviews[product.id].push({ rating, text, author, date });
        }
    });
}

function openReviewsForProduct(productId) {
    const modal = document.getElementById('reviews-modal');
    const list = document.getElementById('reviews-list');
    const title = document.getElementById('reviews-modal-title');
    const hiddenId = document.getElementById('review-product-id');

    const product = productData.find(p => p.id === parseInt(productId));
    title.textContent = `${product ? product.name : 'Product'} — Reviews`;
    hiddenId.value = productId;

    renderReviewsList(productId);
    modal.classList.add('show');
}

function renderReviewsList(productId) {
    const list = document.getElementById('reviews-list');
    const reviews = appState.reviews[productId] || [];
    if (!list) return;
    if (reviews.length === 0) {
        list.innerHTML = `<p class="text-gray-600">No reviews yet. Be the first to leave feedback!</p>`;
        return;
    }
    list.innerHTML = reviews.map(r => `
        <div class="review-item bg-white p-3 rounded mb-3 border">
            <div class="flex items-center justify-between">
                <div class="font-semibold">${escapeHtml(r.author || 'Anonymous')}</div>
                <div class="text-sm text-gray-500">${r.date}</div>
            </div>
            <div class="text-yellow-500 mt-1">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
            <p class="text-gray-700 mt-2">${escapeHtml(r.text)}</p>
        </div>
    `).join('');
}

function submitReview(event) {
    event.preventDefault();
    const productId = document.getElementById('review-product-id').value;
    const rating = parseInt(document.getElementById('review-rating').value);
    const text = document.getElementById('review-text').value.trim();
    if (!productId || !text) return;

    const review = {
        rating,
        text,
        author: appState.currentUser ? appState.currentUser.name : 'Anonymous',
        date: new Date().toISOString().slice(0,10)
    };
    if (!appState.reviews[productId]) appState.reviews[productId] = [];
    appState.reviews[productId].unshift(review);

    // Reset form
    document.getElementById('review-text').value = '';
    document.getElementById('review-rating').value = '5';

    renderReviewsList(productId);
    // Re-render product listings so counts/averages update immediately
    renderApp();
    showToast('Thanks — your review was submitted.');
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (s) {
        return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[s];
    });
}

// --- 7. EVENT LISTENERS ---
function setupEventListeners() {
    // Navigation
    navContainer.addEventListener('click', handleNavClick);

    // Dynamic Content
    appContainer.addEventListener('click', (e) => {
        const target = e.target;
        
        // Nav links inside app (e.g., "Start Shopping")
        if (target.closest('.nav-link') && target.closest('.nav-link').dataset.view) {
            e.preventDefault();
            navigateTo(target.closest('.nav-link').dataset.view);
        }

        // Add to Cart
        if (target.classList.contains('add-to-cart-btn')) {
            addToCart(parseInt(target.dataset.id));
        }
        // Open Reviews
        if (target.classList.contains('open-reviews-btn')) {
            const pid = target.dataset.id;
            openReviewsForProduct(pid);
        }
        
        // Category buttons
        if (target.closest('.category-btn')) {
            const category = target.closest('.category-btn').dataset.category;
            appState.currentFilter = category;
            navigateTo('products');
        }

        // Cart: Quantity
        if (target.classList.contains('cart-quantity-btn')) {
            const id = parseInt(target.dataset.id);
            const change = parseInt(target.dataset.change);
            updateCartQuantity(id, change);
        }
        
        // Cart: Remove
        if (target.closest('.cart-remove-btn')) {
            const id = parseInt(target.closest('.cart-remove-btn').dataset.id);
            removeFromCart(id);
        }

        // Checkout Button
        if (target.id === 'checkout-btn') {
            navigateTo('checkout');
        }
        
        // Logout Button
        if (target.id === 'logout-btn') {
            handleLogout(e);
        }
        
        // --- NEW: Profile Sub-page Navigation ---
        if (target.closest('.back-btn')) {
            navigateTo('profile');
        }
        
        if (target.closest('.notification-toggle')) {
            handleNotificationToggle(e);
        }

        if (target.closest('.fav-category-btn')) {
            target.closest('.fav-category-btn').classList.toggle('bg-theme-purple-100');
            target.closest('.fav-category-btn').classList.toggle('border-theme-purple-800');
            target.closest('.fav-category-btn').classList.toggle('bg-white');
            target.closest('.fav-category-btn').classList.toggle('border-gray-300');
        }
        
        // Payment method selection
        if (target.closest('.payment-option')) {
            const paymentOption = target.closest('.payment-option');
            const paymentMethod = paymentOption.dataset.payment;
            
            // Update state
            appState.selectedPaymentMethod = paymentMethod;
            appState.paymentCompleted = false; // Reset payment status
            
            // Update UI
            document.querySelectorAll('.payment-option').forEach(option => {
                option.classList.remove('selected');
            });
            paymentOption.classList.add('selected');
            
            // Update radio button
            document.getElementById(paymentMethod).checked = true;
            
            // Show QR code display and generate QR code
            const qrDisplay = document.getElementById('qr-payment-display');
            if (qrDisplay) {
                qrDisplay.classList.remove('hidden');
                generatePaymentQRCode(paymentMethod);
            }
        }
        
        // Payment completion button
        if (target.id === 'simulate-payment-btn') {
            appState.paymentCompleted = true;
            const btn = document.getElementById('simulate-payment-btn');
            btn.textContent = 'Payment Completed ✓';
            btn.classList.remove('bg-theme-purple-800', 'hover:bg-theme-purple-700');
            btn.classList.add('bg-green-600', 'cursor-not-allowed');
            btn.disabled = true;
            showToast('Payment completed successfully! You can now place your order.');
        }
    });

    // Dynamic Forms
    appContainer.addEventListener('submit', (e) => {
        if (e.target.id === 'login-form') {
            handleLogin(e);
        }
        if (e.target.id === 'signup-form') {
            handleSignup(e);
        }
        if (e.target.id === 'contact-form') {
            handleContactSubmit(e);
        }
        if (e.target.id === 'checkout-form') {
            placeOrder(e);
        }
        // --- NEW: Profile Save Form ---
        if (e.target.id === 'edit-profile-form') {
            handleProfileSave(e);
        }
    });

    // Dynamic Inputs
    appContainer.addEventListener('input', (e) => {
        if (e.target.id === 'search-bar') {
            handleSearch(e);
        }
    });

    appContainer.addEventListener('change', (e) => {
        if (e.target.id === 'category-filter') {
            handleFilter(e);
        }
    });
}

// --- 8. INITIALIZE APP ---
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved user and auto-login
    const savedUser = loadUserFromStorage();
    if (savedUser) {
        appState.currentUser = savedUser;
        // Restore cart from localStorage
        const savedCart = loadCartFromStorage();
        if (savedCart && savedCart.length > 0) {
            appState.cart = savedCart;
        }
        // Navigate to home instead of login
        appState.currentView = 'home';
    }
    
    setupEventListeners();
    // Generate reviews first so product cards can display ratings
    generateAutoReviews();
    renderApp(); // Render the initial view (login or home if auto-logged in)
    // Global listeners for the demo Track Order modal
    document.body.addEventListener('click', (e) => {
        const target = e.target;
        // Open tracking page when Track Order button clicked
        if (target && (target.id === 'track-order-btn' || (target.closest && target.closest('#track-order-btn')))) {
            // Redirect to the tracking page
            window.location.href = 'tracking.html';
        }

        // Close modal
        if (target && target.id === 'close-map-modal') {
            const modal = document.getElementById('map-modal');
            if (modal) {
                stopMockTracking();
                modal.classList.remove('show');
            }
        }
        // Close reviews modal
        if (target && target.id === 'close-reviews-modal') {
            const modal = document.getElementById('reviews-modal');
            if (modal) {
                modal.classList.remove('show');
            }
        }
    });

    // Reviews form submit (modal is outside appContainer so use body listener)
    document.body.addEventListener('submit', (e) => {
        if (e.target && e.target.id === 'review-form') {
            submitReview(e);
        }
    });
});
