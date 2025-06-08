'use client'

import React from 'react';
import { siWhatsapp } from 'simple-icons'

const FloatingWhatsAppButton: React.FC = () => {
    const generateWhatsAppLink = () => {
        const phoneNumber = "5211234567890"; // Replace with actual phone number
        const message = encodeURIComponent(
            "Hola, me gustaría obtener más información sobre sus productos y servicios."
        );
        return `https://wa.me/${phoneNumber}?text=${message}`;
    };

    return (
        <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
            aria-label="Contactar"
        >
            <svg role="img" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d={siWhatsapp.path} />
            </svg>
        </a>
    );
};

export default FloatingWhatsAppButton; 