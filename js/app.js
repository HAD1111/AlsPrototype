/**
 * ALMASA Jewelry - Global Application Core
 * Handles navigation, mobile drawer, live search overlay, toasts,
 * recently viewed items, config hydration, and newsletter validation.
 */

window.ALMASA_APP = {
    RECENTLY_VIEWED_KEY: 'almasa_recently_viewed',

    init: function () {
        this.initHeaderScroll();
        this.initMobileDrawer();
        this.initSearchOverlay();
        this.initNewsletter();
        this.hydrateConfigElements();
        this.initToastContainer();
    },

    /* --- Sticky Header Scroll --- */
    initHeaderScroll: function () {
        const header = document.querySelector('.site-header');
        if (!header) return;

        const onScroll = () => {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    },

    /* --- Mobile Full-Screen Navigation Drawer --- */
    initMobileDrawer: function () {
        const toggle = document.querySelector('.mobile-toggle');
        const drawer = document.querySelector('.mobile-drawer');
        const closeBtn = document.querySelector('.mobile-drawer-close');

        if (!toggle || !drawer) return;

        const openDrawer = () => {
            drawer.classList.add('active');
            toggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeDrawer = () => {
            drawer.classList.remove('active');
            toggle.classList.remove('active');
            document.body.style.overflow = '';
        };

        toggle.addEventListener('click', openDrawer);
        if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && drawer.classList.contains('active')) {
                closeDrawer();
            }
        });
    },

    /* --- Live Search Overlay Drawer --- */
    initSearchOverlay: function () {
        const overlay = document.getElementById('searchOverlay');
        const triggers = document.querySelectorAll('.search-trigger');
        const closeBtn = document.getElementById('searchClose');
        const input = document.getElementById('searchInput');
        const resultsArea = document.getElementById('searchResultsArea');

        if (!overlay || !input) return;

        const openSearch = (e) => {
            if (e) e.preventDefault();
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            setTimeout(() => input.focus(), 150);
        };

        const closeSearch = () => {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            input.value = '';
            if (resultsArea) resultsArea.innerHTML = '';
        };

        triggers.forEach(t => t.addEventListener('click', openSearch));
        if (closeBtn) closeBtn.addEventListener('click', closeSearch);

        // Close when clicking outside content box
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeSearch();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                closeSearch();
            }
        });

        // Instant search debouncing
        let debounceTimer;
        input.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const q = input.value.trim();
                if (!resultsArea) return;

                if (q.length < 2) {
                    resultsArea.innerHTML = '<p class="search-empty-text">Type a collection, stone, or piece name...</p>';
                    return;
                }

                if (typeof ProductsAPI !== 'undefined') {
                    const results = ProductsAPI.search(q);
                    if (results.length === 0) {
                        resultsArea.innerHTML = `<p class="search-empty-text">No jewelry found matching "${q}". Please inquire with our concierge.</p>`;
                    } else {
                        resultsArea.innerHTML = `
                            <div class="search-results-grid">
                                ${results.map(p => `
                                    <a href="product.html?id=${p.id}" class="product-card" style="background: #ffffff;">
                                        <div class="product-card-image-wrap">
                                            <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy">
                                        </div>
                                        <div class="product-card-info">
                                            <span class="product-card-category">${p.category}</span>
                                            <h4 class="product-card-title">${p.name}</h4>
                                            <span class="product-card-price">${ALMASA_CONFIG.currency.format(p.price)}</span>
                                        </div>
                                    </a>
                                `).join('')}
                            </div>
                        `;
                    }
                }
            }, 200);
        });
    },

    /* --- Toast Notifications --- */
    initToastContainer: function () {
        if (!document.getElementById('almasaToastContainer')) {
            const container = document.createElement('div');
            container.id = 'almasaToastContainer';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
    },

    showToast: function (message, duration = 3500) {
        this.initToastContainer();
        const container = document.getElementById('almasaToastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6A267" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${message}</span>
        `;
        container.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        // Animate out
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 400);
        }, duration);
    },

    /* --- Recently Viewed Products Tracking --- */
    addToRecentlyViewed: function (productId) {
        const id = Number(productId);
        if (!id) return;
        try {
            let list = this.getRecentlyViewed();
            list = list.filter(item => item !== id);
            list.unshift(id); // add to top
            if (list.length > 6) list = list.slice(0, 6);
            localStorage.setItem(this.RECENTLY_VIEWED_KEY, JSON.stringify(list));
        } catch (e) {
            console.error("Error saving recently viewed", e);
        }
    },

    getRecentlyViewed: function () {
        try {
            const data = localStorage.getItem(this.RECENTLY_VIEWED_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    },

    /* --- Newsletter Validation --- */
    initNewsletter: function () {
        const forms = document.querySelectorAll('.newsletter-form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const input = form.querySelector('.newsletter-input');
                const msg = form.querySelector('.newsletter-msg');
                if (!input) return;

                const email = input.value.trim();
                const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

                if (!isValid) {
                    if (msg) {
                        msg.style.display = 'block';
                        msg.style.color = '#E0C794';
                        msg.textContent = 'Please enter a valid email address.';
                    }
                    return;
                }

                input.value = '';
                if (msg) {
                    msg.style.display = 'block';
                    msg.style.color = '#C6A267';
                    msg.textContent = 'Thank you for joining the ALMASA Gazette.';
                }
                this.showToast('Subscribed to ALMASA Gazette');
            });
        });
    },

    /* --- Dynamic Config Injection --- */
    hydrateConfigElements: function () {
        if (typeof ALMASA_CONFIG === 'undefined') return;

        // Populate phone numbers
        document.querySelectorAll('[data-config="phone"]').forEach(el => {
            el.textContent = ALMASA_CONFIG.contact.phoneDisplay;
            if (el.tagName === 'A') el.href = `tel:${ALMASA_CONFIG.contact.phoneRaw}`;
        });

        // Populate whatsapp numbers and links
        document.querySelectorAll('[data-config="whatsapp"]').forEach(el => {
            el.textContent = ALMASA_CONFIG.contact.whatsappDisplay;
            if (el.tagName === 'A') el.href = ALMASA_CONFIG.buildWhatsAppUrl("Bonjour ALMASA Concierge, I would like to inquire about your fine jewelry collection.");
        });

        // Populate email
        document.querySelectorAll('[data-config="email"]').forEach(el => {
            el.textContent = ALMASA_CONFIG.contact.email;
            if (el.tagName === 'A') el.href = `mailto:${ALMASA_CONFIG.contact.email}`;
        });

        // Populate showroom address
        document.querySelectorAll('[data-config="address"]').forEach(el => {
            el.textContent = `${ALMASA_CONFIG.showroom.addressLine1}, ${ALMASA_CONFIG.showroom.city}, ${ALMASA_CONFIG.showroom.country}`;
        });

        // Populate opening hours
        document.querySelectorAll('[data-config="hours-weekdays"]').forEach(el => {
            el.textContent = ALMASA_CONFIG.hours.weekdays;
        });

        // Instagram handle
        document.querySelectorAll('[data-config="instagram"]').forEach(el => {
            el.textContent = ALMASA_CONFIG.social.instagram.handle;
            if (el.tagName === 'A') el.href = ALMASA_CONFIG.social.instagram.url;
        });

        // Current Year in footer
        document.querySelectorAll('.current-year').forEach(el => {
            el.textContent = new Date().getFullYear();
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.ALMASA_APP.init();
});
