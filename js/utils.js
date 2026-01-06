// Utility functions for the SuperMarketGo application

// Local Storage helpers
export function saveUserToStorage(user) {
    try {
        localStorage.setItem('supermarketgo_user', JSON.stringify(user));
    } catch (e) {
        console.warn('Failed to save user to localStorage:', e);
    }
}

export function loadUserFromStorage() {
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

export function clearUserFromStorage() {
    try {
        localStorage.removeItem('supermarketgo_user');
        localStorage.removeItem('supermarketgo_cart');
    } catch (e) {
        console.warn('Failed to clear localStorage:', e);
    }
}

export function saveCartToStorage(cart) {
    try {
        localStorage.setItem('supermarketgo_cart', JSON.stringify(cart));
    } catch (e) {
        console.warn('Failed to save cart to localStorage:', e);
    }
}

export function loadCartFromStorage() {
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

// Toast notification
export function showToast(message) {
    const toast = document.getElementById('toast-notification');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Category emoji helper
export function getCategoryEmoji(category) {
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

// Stars rating helper
export function renderStars(avg) {
    const full = Math.round(avg);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
}

// HTML escape helper
export function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (s) {
        return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[s];
    });
}
