import React from 'react';
import { MessageSquare } from 'lucide-react';

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
      className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
    >
      <MessageSquare className="w-5 h-5 mr-2" />
      <span>Contactar por WhatsApp</span>
    </a>
  );
};

export default ContactButton;