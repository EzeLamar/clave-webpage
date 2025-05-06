'use client'

import React from 'react';
import { siWhatsapp } from 'simple-icons';

interface ContactButtonProps {
  productName: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ productName }) => {
  const generateWhatsAppLink = () => {
    const phoneNumber = "5211234567890"; // Replace with actual phone number
    const message = encodeURIComponent(
      `Hola, estoy interesado en obtener más información sobre el purificador ${productName}. ¿Podría proporcionarme más detalles sobre características, precio y disponibilidad?`
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <a
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
    >
      <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d={siWhatsapp.path} />
      </svg>
      <span>Contactar</span>
    </a>
  );
};

export default ContactButton;