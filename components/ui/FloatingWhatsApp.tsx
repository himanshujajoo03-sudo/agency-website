"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingWhatsApp = () => {
    const message = encodeURIComponent(
        "Hi, I want AI automation for my business.\nName:\nBusiness:\nMain Problem:"
    );
    // Using a placeholder number as requested if none provided
    const whatsappUrl = `https://wa.me/1234567890?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#1DA851] transition-colors"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} />
        </motion.a>
    );
};
