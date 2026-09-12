/**
 * ALMASA Jewelry - Wishlist State Management
 * Persists saved items in localStorage and synchronizes UI across pages.
 */

const WishlistAPI = {
    STORAGE_KEY: 'almasa_wishlist',

    getWishlist: function () {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            if (data === null) {
                const previewWishlist = [1, 2, 5];
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(previewWishlist));
                return previewWishlist;
            }
            return JSON.parse(data);
        } catch (e) {
            console.error("Failed to read wishlist from localStorage", e);
            return [];
        }
    },

    saveWishlist: function (items) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
            this.updateBadges();
            window.dispatchEvent(new CustomEvent('almasa:wishlist-updated', { detail: { items } }));
        } catch (e) {
            console.error("Failed to save wishlist to localStorage", e);
        }
    },

    isInWishlist: function (productId) {
        const id = Number(productId);
        const list = this.getWishlist();
        return list.includes(id);
    },

    toggle: function (productId) {
        const id = Number(productId);
        let list = this.getWishlist();
        const exists = list.includes(id);

        if (exists) {
            list = list.filter(item => item !== id);
            this.saveWishlist(list);
            if (window.ALMASA_APP && typeof window.ALMASA_APP.showToast === 'function') {
                window.ALMASA_APP.showToast("Removed from Wishlist");
            }
            return false;
        } else {
            list.push(id);
            this.saveWishlist(list);
            if (window.ALMASA_APP && typeof window.ALMASA_APP.showToast === 'function') {
                window.ALMASA_APP.showToast("Saved to your Wishlist");
            }
            return true;
        }
    },

    remove: function (productId) {
        const id = Number(productId);
        let list = this.getWishlist();
        list = list.filter(item => item !== id);
        this.saveWishlist(list);
        if (window.ALMASA_APP && typeof window.ALMASA_APP.showToast === 'function') {
            window.ALMASA_APP.showToast("Removed from Wishlist");
        }
    },

    getCount: function () {
        return this.getWishlist().length;
    },

    updateBadges: function () {
        const count = this.getCount();
        const badges = document.querySelectorAll('.wishlist-badge, #wishlistBadge');
        badges.forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'inline-flex' : 'none';
        });
    }
};

// Initial badge update when script loads
document.addEventListener('DOMContentLoaded', () => {
    WishlistAPI.updateBadges();
});
