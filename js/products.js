/**
 * ALMASA Jewelry - Fine Jewelry Catalog Data & Helpers
 * Contains all authentic 18K gold products with complete specifications,
 * imagery, descriptions, dimensions, and filter/query functions.
 */

const ALMASA_PRODUCTS = [
    {
        id: 1,
        name: "The Aurelia Serpentine Pavé Ring",
        category: "Rings",
        collection: "Statement Pieces",
        material: "Yellow Gold",
        price: 890,
        image: "images/item-serpentine-ring.jpg",
        images: [
            "images/item-serpentine-ring.jpg",
            "images/product-set-1.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "4.80g",
        stones: "0.28 ct Pavé Brilliant-Cut Diamonds (VS Clarity, F-G Color)",
        dimensions: "Band width 3.5mm, Snakehead motif 12mm x 9mm",
        availableSizes: ["50 (US 5.25)", "52 (US 6)", "54 (US 6.75)", "56 (US 7.5)", "58 (US 8.5)"],
        badge: "Heirloom",
        featured: true,
        inStock: true,
        deliveryEstimate: "2–4 business days with insured white-glove courier",
        description: "An architectural marvel in 18K yellow gold, the Aurelia Serpentine Pavé Ring wraps the finger in supple micro-ribbed fluting capped with dual pavé diamond serpent heads. Designed with fluid ergonomic contouring for supreme daily comfort.",
        details: [
            "Crafted in solid 18K Yellow Gold (750 national hallmark)",
            "Hand-set with 0.28 carats of natural conflict-free diamonds",
            "Ribbed bypass silhouette with comfort-fit interior",
            "Polished and satin dual finish",
            "Stamped with the official ALMASA hallmark"
        ],
        care: "Clean gently with warm water, mild soap, and a soft brush. Store in the provided velvet case away from other jewelry.",
        relatedIds: [2, 3, 7, 9, 11]
    },
    {
        id: 2,
        name: "The Laurel Leaf Bypass Ring",
        category: "Rings",
        collection: "Everyday Gold",
        material: "Yellow Gold",
        price: 540,
        image: "images/item-laurel-ring.jpg",
        images: [
            "images/item-laurel-ring.jpg",
            "images/product-set-2.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "4.20g",
        stones: "Hand-engraved diamond-cut faceted gold",
        dimensions: "Split band width 4.8mm, Motif span 18mm",
        availableSizes: ["50 (US 5.25)", "52 (US 6)", "54 (US 6.75)", "56 (US 7.5)", "58 (US 8.5)"],
        badge: "Best Seller",
        featured: true,
        inStock: true,
        deliveryEstimate: "2–4 business days with insured white-glove courier",
        description: "Inspired by classical Mediterranean victor laurels, this bypass ring features layered diamond-cut gold leaves that catch light like radiant sunlight on water. A timeless everyday talisman.",
        details: [
            "Crafted in 18K solid Yellow Gold",
            "Hand-chiseled diamond facet texturing on every leaf",
            "Ergonomic dual-rail shank for balanced wear",
            "Hypoallergenic and nickel-free",
            "Hallmarked by the national Assay Office"
        ],
        care: "Avoid exposure to household chemicals and saltwater. Buff gently with an ALMASA microfiber jewelry cloth.",
        relatedIds: [1, 4, 8, 10, 12]
    },
    {
        id: 3,
        name: "The Aurelia Serpentine Collar Necklace",
        category: "Necklaces",
        collection: "Statement Pieces",
        material: "Yellow Gold",
        price: 3200,
        image: "images/item-serpentine-necklace.jpg",
        images: [
            "images/item-serpentine-necklace.jpg",
            "images/product-set-1.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "19.80g",
        stones: "0.45 ct Pavé Diamonds (VS Clarity, F-G Color)",
        dimensions: "Internal circumference 41cm with 4cm extension",
        availableSizes: ["Standard 42cm (Adjustable to 45cm)"],
        badge: "Signature",
        featured: true,
        inStock: true,
        deliveryEstimate: "3–5 business days in hand-crafted leather jewel case",
        description: "A dramatic 18K gold collar defined by supple horizontal tubogas ribbing terminating in diamond-tipped bypass finials. Rests smoothly along the collarbone with effortless sensual weight.",
        details: [
            "18K solid Yellow Gold with 0.45ct brilliant-cut diamonds",
            "Articulated link structure ensures skin-hugging drape",
            "Concealed safety pressure clasp with safety catch",
            "Handcrafted in the ALMASA atelier"
        ],
        care: "Lay flat when storing to preserve internal gold tension springs. Professional cleaning recommended annually.",
        relatedIds: [1, 7, 9, 11]
    },
    {
        id: 4,
        name: "The Laurel Leaf Chevron Collar",
        category: "Necklaces",
        collection: "Timeless Romance",
        material: "Yellow Gold",
        price: 1850,
        image: "images/item-laurel-necklace.jpg",
        images: [
            "images/item-laurel-necklace.jpg",
            "images/product-set-2.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "14.50g",
        stones: "Faceted diamond-cut gold accents",
        dimensions: "Length 43cm, Chevron apex drop 14mm",
        availableSizes: ["Standard 43cm (Bespoke extensions on request)"],
        badge: "Timeless",
        featured: true,
        inStock: true,
        deliveryEstimate: "2–4 business days with complimentary gift packaging",
        description: "Graduated laurel leaves cascade toward a flattering central V-shaped chevron, punctuated by two-tone gold leaf accents at the apex. Designed for bridal vows and black-tie galas alike.",
        details: [
            "18K Yellow Gold with rhodium-tipped accent leaves",
            "Fully articulated flexible garland links",
            "Lobster clasp with signature ALMASA diamond plaque tag",
            "Hand-assembled in Beirut"
        ],
        care: "Store in flat presentation sleeve. Buff with dry flannel cloth.",
        relatedIds: [2, 8, 10, 12]
    },
    {
        id: 5,
        name: "The Aura Beaded Sphere Pendant",
        category: "Necklaces",
        collection: "Everyday Gold",
        material: "Yellow Gold",
        price: 680,
        image: "images/product-necklace-1.jpg",
        images: [
            "images/product-necklace-1.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "6.10g",
        stones: "Micro-granulated 18K gold spheres",
        dimensions: "Sphere diameter 12mm, Chain length 45cm with 5cm adjuster",
        availableSizes: ["Adjustable 45cm – 50cm"],
        badge: "Editorial Favorite",
        featured: true,
        inStock: true,
        deliveryEstimate: "2–4 business days with insured courier",
        description: "A three-dimensional globe composed of intricately clustered, textured 18K gold beads, suspended from a delicate diamond-cut cable chain. Catches every ray of natural light.",
        details: [
            "18K solid yellow gold",
            "Three-dimensional filigree bead sphere",
            "Diamond-cut cable chain with teardrop lobster clasp",
            "Versatile length for solitary wear or stacking"
        ],
        care: "Rinse with lukewarm water and mild detergent. Pat dry with lint-free cloth.",
        relatedIds: [6, 14, 2]
    },
    {
        id: 6,
        name: "The Amour Entwined Dual-Heart Pendant",
        category: "Necklaces",
        collection: "Timeless Romance",
        material: "Yellow Gold",
        price: 580,
        image: "images/product-necklace-2.jpg",
        images: [
            "images/product-necklace-2.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "5.40g",
        stones: "Solid satin-brushed 18K gold",
        dimensions: "Pendant 22mm x 18mm, Fine chain length 42cm",
        availableSizes: ["Standard 42cm (Adjustable to 45cm)"],
        badge: "Best Seller",
        featured: true,
        inStock: true,
        deliveryEstimate: "2–4 business days in bespoke gift packaging",
        description: "Two sculpted hearts gracefully interlocking in unbroken 18K yellow gold, representing two lives seamlessly entwined. Finished with satin contouring and mirror-polished bevels.",
        details: [
            "18K Yellow Gold (750)",
            "Double heart openwork motif",
            "Fine anchor link chain included",
            "Presented in signature ALMASA gift box with silk ribbon"
        ],
        care: "Store individually to prevent chain knotting.",
        relatedIds: [5, 2, 4]
    },
    {
        id: 7,
        name: "The Aurelia Serpentine Coil Bangle",
        category: "Bracelets",
        collection: "Statement Pieces",
        material: "Yellow Gold",
        price: 2450,
        image: "images/item-serpentine-bracelet.jpg",
        images: [
            "images/item-serpentine-bracelet.jpg",
            "images/product-set-1.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "16.50g",
        stones: "0.36 ct Pavé Diamonds (VS Clarity)",
        dimensions: "Internal oval 58mm x 48mm, Flexible wrap fit",
        availableSizes: ["Small (15 - 16.5cm wrist)", "Medium (16.5 - 18cm wrist)"],
        badge: "Statement",
        featured: false,
        inStock: true,
        deliveryEstimate: "3–5 business days in signature velvet box",
        description: "A coil bangle that wraps the wrist with flexible tension in 18K gold, culminating in diamond-pavé terminals. Engineered with an internal memory-wire core that yields gently to slip on and retains its silhouette.",
        details: [
            "18K Yellow Gold with 0.36ct VS diamonds",
            "Flexible hinged tension wrap design",
            "Comfort-curved interior profile",
            "Hallmarked and certified"
        ],
        care: "Wipe with damp cloth and dry immediately.",
        relatedIds: [1, 3, 9, 11]
    },
    {
        id: 8,
        name: "The Laurel Leaf Delicate Bracelet",
        category: "Bracelets",
        collection: "Everyday Gold",
        material: "Yellow Gold",
        price: 780,
        image: "images/item-laurel-bracelet.jpg",
        images: [
            "images/item-laurel-bracelet.jpg",
            "images/product-set-2.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "7.60g",
        stones: "Diamond-cut gold foliage",
        dimensions: "Length 18cm with 2cm shortening ring",
        availableSizes: ["Adjustable 16cm – 18cm"],
        badge: "Everyday Gold",
        featured: false,
        inStock: true,
        deliveryEstimate: "2–4 business days with insured courier",
        description: "An arched station of diamond-faceted 18K laurel leaves anchored to a refined box-link chain. Perfect alone as a minimal statement or layered with everyday watches and cuffs.",
        details: [
            "18K solid Yellow Gold",
            "Arched central laurel motif conforms to wrist anatomy",
            "Lobster clasp with ALMASA hallmark plaque"
        ],
        care: "Store flat in jewelry pouch.",
        relatedIds: [2, 4, 10, 12]
    },
    {
        id: 9,
        name: "The Aurelia Serpentine Drop Huggies",
        category: "Earrings",
        collection: "Statement Pieces",
        material: "Yellow Gold",
        price: 980,
        image: "images/item-serpentine-earrings.jpg",
        images: [
            "images/item-serpentine-earrings.jpg",
            "images/product-set-1.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "5.20g (pair)",
        stones: "0.22 ct Pavé Diamonds",
        dimensions: "Drop length 22mm, Huggie inner diameter 9mm",
        availableSizes: ["One Size"],
        badge: "New",
        featured: false,
        inStock: true,
        deliveryEstimate: "2–4 business days in bespoke velvet box",
        description: "A sophisticated pair of 18K gold drop earrings featuring sculpted fluted drops terminating in micro-pavé diamond points. Secure click-post huggie mechanism.",
        details: [
            "18K solid Yellow Gold",
            "0.22 carats of natural diamonds",
            "Click-in hinge post closure for confident wear",
            "Sold as a pair"
        ],
        care: "Clean posts regularly with alcohol swab; clean body with soft microfiber.",
        relatedIds: [1, 3, 7, 11]
    },
    {
        id: 10,
        name: "The Laurel Leaf Huggie Hoops",
        category: "Earrings",
        collection: "Everyday Gold",
        material: "Yellow Gold",
        price: 460,
        image: "images/item-laurel-earrings.jpg",
        images: [
            "images/item-laurel-earrings.jpg",
            "images/product-set-2.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "3.90g (pair)",
        stones: "Diamond-faceted 18K gold",
        dimensions: "Outer diameter 14mm, Leaf motif span 8mm",
        availableSizes: ["One Size"],
        badge: "Everyday Gold",
        featured: false,
        inStock: true,
        deliveryEstimate: "2–4 business days with insured courier",
        description: "Petite huggie hoops adorned with climbing diamond-cut laurel leaves. Lightweight, secure, and luminous for everyday wear.",
        details: [
            "18K solid Yellow Gold",
            "Invisible hinge closure",
            "Beveled leaves with micro-bead borders",
            "Sold as a pair"
        ],
        care: "Snap gently to lock. Clean with lukewarm soapy water.",
        relatedIds: [2, 4, 8, 12]
    },
    {
        id: 11,
        name: "The Aurelia Serpentine High Parure Suite",
        category: "Necklaces",
        collection: "Statement Pieces",
        material: "Yellow Gold",
        price: 6950,
        image: "images/product-set-1.jpg",
        images: [
            "images/product-set-1.jpg",
            "images/item-serpentine-necklace.jpg",
            "images/item-serpentine-bracelet.jpg",
            "images/item-serpentine-ring.jpg",
            "images/item-serpentine-earrings.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "41.85g Total Gold",
        stones: "1.31 ct Total Pavé Diamonds (VS Clarity, F-G Color)",
        dimensions: "Complete 4-Piece High Jewelry Parure",
        availableSizes: ["Made to Measure Suite (Ring size selected upon concierge consultation)"],
        badge: "One of a Kind",
        featured: true,
        inStock: true,
        deliveryEstimate: "Private courier or showroom appointment within 2 days",
        description: "The complete Aurelia Serpentine Parure, encompassing the Collar Necklace, Coil Bangle, Pavé Bypass Ring, and Drop Huggies. A masterwork of goldsmithing that embodies Mediterranean opulence and modern high-jewelry craftsmanship.",
        details: [
            "41.85 grams of solid 18K Yellow Gold (750 hallmark)",
            "1.31 total carats of natural brilliant diamonds",
            "Delivered in custom hand-bound leather presentation casket",
            "Accompanied by Certificate of Authenticity and gemological appraisal"
        ],
        care: "Complimentary biannual atelier inspection and ultrasonic servicing included.",
        relatedIds: [1, 3, 7, 9]
    },
    {
        id: 12,
        name: "The Laurel Bridal & Ceremonial Suite",
        category: "Necklaces",
        collection: "Bridal & Gifts",
        material: "Yellow Gold",
        price: 3400,
        image: "images/product-set-2.jpg",
        images: [
            "images/product-set-2.jpg",
            "images/item-laurel-necklace.jpg",
            "images/item-laurel-bracelet.jpg",
            "images/item-laurel-ring.jpg",
            "images/item-laurel-earrings.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "30.20g Total Gold",
        stones: "Faceted Diamond-Cut 18K Gold",
        dimensions: "Complete 4-Piece Ceremonial Suite",
        availableSizes: ["Complete Bridal Set (Custom Sized upon consultation)"],
        badge: "Bridal",
        featured: true,
        inStock: true,
        deliveryEstimate: "3–5 business days in bespoke bridal heirloom casket",
        description: "The harmonious Laurel Leaf Ceremonial Suite, comprising the Chevron Collar, Station Bracelet, Bypass Ring, and Huggie Hoops. Inspired by antiquity and celebration, it bestows an ethereal golden glow upon the bride.",
        details: [
            "30.20 grams of solid 18K Yellow Gold",
            "Artisan diamond-facet cutting reflects light with diamond-like fire",
            "Packaged in an ALMASA bridal heirloom chest"
        ],
        care: "Store in custom presentation slots.",
        relatedIds: [2, 4, 8, 10]
    },
    {
        id: 13,
        name: "The Milanese Diamond Bezel Watch",
        category: "Watches",
        collection: "Statement Pieces",
        material: "Yellow Gold",
        price: 3800,
        image: "images/item-milanese-watch.jpg",
        images: [
            "images/item-milanese-watch.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "48.00g (Total Weight)",
        stones: "0.52 ct Diamond-Set Bezel (VS1, E-F Color)",
        dimensions: "Case diameter 32mm, Case thickness 6.2mm, Milanese mesh bracelet 16mm",
        availableSizes: ["Adjustable Jewelry Clasp (Fits 14cm to 19cm wrists)"],
        badge: "Limited Edition",
        featured: true,
        inStock: true,
        deliveryEstimate: "3–5 business days with insured white-glove courier",
        description: "A symphony of Swiss horological precision and Mediterranean fine goldsmithing. Encased in solid 18K yellow gold with a minimalist sunburst champagne dial, bordered by 48 hand-set brilliant diamonds on an ultra-supple woven gold Milanese mesh bracelet.",
        details: [
            "Swiss Made high-precision quartz movement",
            "18K solid yellow gold case, caseback, and woven mesh bracelet",
            "Anti-reflective scratch-resistant sapphire crystal",
            "Water resistant to 30 meters (3 ATM)",
            "Hand-engraved individual serial number"
        ],
        care: "Battery replacement and gasket inspection every 3 years by an authorized watchmaker.",
        relatedIds: [14, 1, 7]
    },
    {
        id: 14,
        name: "The Byzantine Woven Curb Chain",
        category: "Chains",
        collection: "Everyday Gold",
        material: "Yellow Gold",
        price: 1920,
        image: "images/item-woven-chain.jpg",
        images: [
            "images/item-woven-chain.jpg"
        ],
        goldPurity: "18K Yellow Gold (750)",
        weight: "22.40g",
        stones: "Solid 18K Yellow Gold",
        dimensions: "Chain width 7.5mm, Total length 50cm",
        availableSizes: ["50cm (Standard Collarbone Fit)", "55cm (Extended Length)"],
        badge: "Classic",
        featured: true,
        inStock: true,
        deliveryEstimate: "2–4 business days in signature gift box",
        description: "Heavy, fluid, and intoxicatingly tactile. Hand-woven double-curb links in solid 18K gold that lie completely flat against the skin with substantial luxury heft. Secured with an architectural box-tongue clasp.",
        details: [
            "Solid 18K Yellow Gold (not hollow)",
            "Double interlocking curb link construction",
            "Seamless integrated box clasp with double figure-eight safety catches",
            "Hand-polished to a warm mirror lustre"
        ],
        care: "Store flat or hanging to maintain link alignment.",
        relatedIds: [13, 3, 5]
    }
];

/**
 * Product Query Helpers
 */
const ProductsAPI = {
    getAll: function () {
        return ALMASA_PRODUCTS;
    },
    getById: function (id) {
        const numId = Number(id);
        return ALMASA_PRODUCTS.find(p => p.id === numId) || null;
    },
    getFeatured: function (limit = 6) {
        return ALMASA_PRODUCTS.filter(p => p.featured).slice(0, limit);
    },
    getByCategory: function (category) {
        if (!category || category === "All") return ALMASA_PRODUCTS;
        return ALMASA_PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
    },
    getByCollection: function (collection) {
        if (!collection || collection === "All") return ALMASA_PRODUCTS;
        return ALMASA_PRODUCTS.filter(p => p.collection.toLowerCase() === collection.toLowerCase());
    },
    getRelated: function (productId, limit = 4) {
        const product = this.getById(productId);
        if (!product) return [];
        if (product.relatedIds && product.relatedIds.length > 0) {
            return product.relatedIds
                .map(id => this.getById(id))
                .filter(Boolean)
                .slice(0, limit);
        }
        return ALMASA_PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, limit);
    },
    getCompleteTheLook: function (productId, limit = 3) {
        const product = this.getById(productId);
        if (!product) return [];
        // Complete the look returns items from the same collection suite
        return ALMASA_PRODUCTS.filter(p => p.id !== product.id && (p.collection === product.collection || (product.relatedIds && product.relatedIds.includes(p.id)))).slice(0, limit);
    },
    search: function (query) {
        if (!query || query.trim() === "") return [];
        const q = query.trim().toLowerCase();
        return ALMASA_PRODUCTS.filter(p => 
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.collection.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ALMASA_PRODUCTS, ProductsAPI };
}
