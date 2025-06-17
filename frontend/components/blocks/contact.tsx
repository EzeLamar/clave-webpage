'use client'

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siWhatsapp } from 'simple-icons';
import { ContactProps } from '@/types/blocks';

export const ContactSection = ({
  title,
  anchorLink,
  description,
  whatsappMessage,
  attentionText,
  showPhone,
  showEmail,
  showAddress,
  company
}: ContactProps) => {
  const generateWhatsAppLink = () => {
    const whatsappPhoneNumber = company.phone.replace(/\D/g, '');
    const message = encodeURIComponent(
      whatsappMessage
    );
    return `https://wa.me/${whatsappPhoneNumber}?text=${message}`;
  };

  return (
    <section id={anchorLink} className="py-16 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105">
              {showPhone && (
                <div className="flex items-center mb-6">
                  <div className="rounded-full bg-blue-100 p-3 mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Teléfono</h3>
                  <p className="text-gray-600">{company.phone}</p>
                </div>
                  </div>
              )}

              {showEmail && (
                <div className="flex items-center mb-6">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Correo electrónico</h3>
                  <p className="text-gray-600">{company.email}</p>
                </div>
              </div>
              )}

              {showAddress && (
                <div className="flex items-center">
                  <div className="rounded-full bg-blue-100 p-3 mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Dirección</h3>
                  <p className="text-gray-600">{company.address}</p>
                </div>
              </div>)}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contáctanos directamente</h3>
              <p className="text-gray-600 mb-6">
                Haz clic en el botón de abajo para iniciar una conversación por WhatsApp 
                con nuestro equipo de ventas. Estamos listos para atender todas tus consultas.
              </p>
              
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-all duration-300"
              >
                <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d={siWhatsapp.path} />
                </svg>
                <span className="font-medium">Contactar por WhatsApp</span>
              </a>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  {attentionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;