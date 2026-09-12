/**
 * ALMASA Jewelry - Central Brand & Business Configuration
 * Edit this file to update business details, contact information, hours, and WhatsApp settings.
 */
const ALMASA_CONFIG = {
    brand: {
        name: "ALMASA Jewelry",
        legalName: "ALMASA Fine Jewelry Atelier",
        tagline: "Jewelry for the moments that become heirlooms.",
        subtitle: "Thoughtfully crafted 18K gold pieces, designed to be worn now and treasured forever.",
        established: "2018",
        goldStandard: "18K Solid Gold (750 Purity)"
    },
    contact: {
        phoneDisplay: "+961 1 985 420",
        phoneRaw: "+9611985420",
        whatsappDisplay: "+961 70 892 144",
        whatsappRaw: "96170892144", // international digits only for api.whatsapp.com
        email: "concierge@almasajewelry.com",
        pressEmail: "press@almasajewelry.com"
    },
    showroom: {
        title: "ALMASA Flagship Atelier",
        addressLine1: "Rue Foch, Downtown Luxury District",
        addressLine2: "Beirut Central District",
        city: "Beirut",
        country: "Lebanon",
        postalCode: "2011 3105",
        appointmentNote: "Private viewing suites available by appointment."
    },
    hours: {
        weekdays: "Monday – Friday: 10:00 AM – 7:30 PM",
        saturday: "Saturday: 11:00 AM – 8:00 PM",
        sunday: "Sunday: Private Concierge by Appointment Only"
    },
    social: {
        instagram: {
            handle: "@almasajewelry",
            url: "https://www.instagram.com"
        },
        pinterest: {
            handle: "almasajewelry",
            url: "https://www.pinterest.com"
        }
    },
    currency: {
        code: "USD",
        symbol: "$",
        format: function (amount) {
            if (amount === null || amount === undefined || isNaN(amount)) return "Price on Request";
            return "$" + Number(amount).toLocaleString('en-US');
        }
    },
    /**
     * Builds a direct WhatsApp URL with a prefilled message
     * @param {string} text - The unencoded message
     * @returns {string} - WhatsApp URL
     */
    buildWhatsAppUrl: function (text) {
        return `https://wa.me/${this.contact.whatsappRaw}?text=${encodeURIComponent(text)}`;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ALMASA_CONFIG;
}
