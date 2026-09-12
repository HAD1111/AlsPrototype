/**
 * ALMASA Jewelry - Shopping Bag & WhatsApp Concierge Checkout
 * Handles shopping bag items, localStorage persistence, quantity calculations,
 * and high-jewelry WhatsApp concierge message formatting.
 */

const CartAPI = {
    STORAGE_KEY: 'almasa_cart',

    getCart: function () {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            if (data === null) {
                const previewCart = [
                    { productId: 1, size: "54 (US 7)", quantity: 1, addedAt: new Date().toISOString() },
                    { productId: 4, size: "52 (US 6)", quantity: 1, addedAt: new Date().toISOString() }
                ];
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(previewCart));
                return previewCart;
            }
            return JSON.parse(data);
        } catch (e) {
            console.error("Failed to read cart from localStorage", e);
            return [];
        }
    },

    saveCart: function (items) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
            this.updateBadges();
            window.dispatchEvent(new CustomEvent('almasa:cart-updated', { detail: { items } }));
        } catch (e) {
            console.error("Failed to save cart to localStorage", e);
        }
    },

    /**
     * Adds an item to the bag
     * @param {number|string} productId 
     * @param {string} size 
     * @param {number} quantity 
     */
    addToCart: function (productId, size = "Standard", quantity = 1) {
        const id = Number(productId);
        const qty = Math.max(1, parseInt(quantity, 10) || 1);
        let cart = this.getCart();

        // Check if item with same ID and same size already exists
        const existingIndex = cart.findIndex(item => item.productId === id && item.size === size);

        if (existingIndex > -1) {
            cart[existingIndex].quantity += qty;
        } else {
            cart.push({
                productId: id,
                size: size,
                quantity: qty,
                addedAt: new Date().toISOString()
            });
        }

        this.saveCart(cart);

        // Toast feedback
        const product = typeof ProductsAPI !== 'undefined' ? ProductsAPI.getById(id) : null;
        const name = product ? product.name : "Item";
        if (window.ALMASA_APP && typeof window.ALMASA_APP.showToast === 'function') {
            window.ALMASA_APP.showToast(`Added to Bag: ${name}`);
        }
        return true;
    },

    /**
     * Updates quantity of an existing item in the cart
     */
    updateQuantity: function (productId, size, quantity) {
        const id = Number(productId);
        const qty = parseInt(quantity, 10);
        let cart = this.getCart();

        if (qty <= 0) {
            this.removeFromCart(id, size);
            return;
        }

        const item = cart.find(i => i.productId === id && i.size === size);
        if (item) {
            item.quantity = qty;
            this.saveCart(cart);
        }
    },

    /**
     * Removes an item matching productId and size
     */
    removeFromCart: function (productId, size) {
        const id = Number(productId);
        let cart = this.getCart();
        cart = cart.filter(i => !(i.productId === id && i.size === size));
        this.saveCart(cart);
        if (window.ALMASA_APP && typeof window.ALMASA_APP.showToast === 'function') {
            window.ALMASA_APP.showToast("Item removed from Bag");
        }
    },

    /**
     * Clears all items from cart (called after WhatsApp handoff)
     */
    clearCart: function () {
        localStorage.removeItem(this.STORAGE_KEY);
        this.updateBadges();
        window.dispatchEvent(new CustomEvent('almasa:cart-updated', { detail: { items: [] } }));
    },

    /**
     * Total item count
     */
    getCount: function () {
        const cart = this.getCart();
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    },

    /**
     * Calculates current subtotal
     */
    getSubtotal: function () {
        const cart = this.getCart();
        if (typeof ProductsAPI === 'undefined') return 0;

        return cart.reduce((sum, item) => {
            const product = ProductsAPI.getById(item.productId);
            if (product && product.price) {
                return sum + (product.price * item.quantity);
            }
            return sum;
        }, 0);
    },

    /**
     * Updates all cart badge elements in DOM
     */
    updateBadges: function () {
        const count = this.getCount();
        const badges = document.querySelectorAll('.cart-badge, #cartBadge');
        badges.forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'inline-flex' : 'none';
        });
    },

    /**
     * Formats an elegant WhatsApp order itinerary from all cart items
     */
    buildWhatsAppOrderUrl: function () {
        const cart = this.getCart();
        if (cart.length === 0) return null;

        const origin = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
        let lines = [];
        lines.push("Bonjour ALMASA Jewelry Concierge,");
        lines.push("");
        lines.push("I would like to inquire about ordering the following pieces from my shopping bag:");
        lines.push("");

        let subtotal = 0;
        cart.forEach((item, index) => {
            const product = typeof ProductsAPI !== 'undefined' ? ProductsAPI.getById(item.productId) : null;
            if (product) {
                const itemTotal = (product.price || 0) * item.quantity;
                subtotal += itemTotal;
                const productUrl = `${origin}/product.html?id=${product.id}`;
                lines.push(`${index + 1}. *${product.name}*`);
                lines.push(`   • Selected Size / Fit: ${item.size}`);
                lines.push(`   • Quantity: ${item.quantity}`);
                lines.push(`   • Price: $${product.price.toLocaleString('en-US')}${item.quantity > 1 ? ` ($${itemTotal.toLocaleString('en-US')} total)` : ''}`);
                lines.push(`   • View Piece: ${productUrl}`);
                lines.push("");
            }
        });

        lines.push(`*Estimated Subtotal: $${subtotal.toLocaleString('en-US')} USD*`);
        lines.push("");
        lines.push("Kindly confirm availability, presentation packaging, and delivery arrangements.");
        lines.push("");
        lines.push("Thank you.");

        const fullMessage = lines.join("\n");
        return ALMASA_CONFIG.buildWhatsAppUrl(fullMessage);
    },

    /**
     * Formats a direct WhatsApp concierge inquiry for a single product
     */
    buildSingleItemWhatsAppUrl: function (productId, size = "Standard", quantity = 1) {
        const product = typeof ProductsAPI !== 'undefined' ? ProductsAPI.getById(productId) : null;
        if (!product) return ALMASA_CONFIG.buildWhatsAppUrl("Bonjour ALMASA Concierge, I would like to inquire about your fine jewelry collection.");

        const origin = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
        const productUrl = `${origin}/product.html?id=${product.id}`;

        let lines = [];
        lines.push("Bonjour ALMASA Jewelry Concierge,");
        lines.push("");
        lines.push(`I am inquiring about *${product.name}*:`);
        lines.push(`• Metal / Purity: ${product.goldPurity || "18K Gold"}`);
        lines.push(`• Selected Size: ${size}`);
        lines.push(`• Quantity: ${quantity}`);
        lines.push(`• Price: ${product.price ? '$' + product.price.toLocaleString('en-US') : 'Price on Request'}`);
        lines.push(`• Direct Link: ${productUrl}`);
        lines.push("");
        lines.push("Could you please share availability, styling guidance, and consultation details?");
        lines.push("");
        lines.push("Thank you.");

        return ALMASA_CONFIG.buildWhatsAppUrl(lines.join("\n"));
    }
};

// Initial badge update on load
document.addEventListener('DOMContentLoaded', () => {
    CartAPI.updateBadges();
});
