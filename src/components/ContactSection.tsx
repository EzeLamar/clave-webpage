import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const generateWhatsAppLink = () => {
    const phoneNumber = "5211234567890"; // Replace with actual phone number
    const message = encodeURIComponent(
      "Hola, estoy interesado en conocer más sobre los purificadores Hidrolit. ¿Podrían proporcionarme información detallada?"
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <section id="contacto" className="py-16 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Interesado en nuestros productos? Ponte en contacto con nosotros para obtener más información,
            precios especiales o agendar una demostración.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Teléfono</h3>
                  <p className="text-gray-600">+52 (123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Correo electrónico</h3>
                  <p className="text-gray-600">info@hidrolit.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Dirección</h3>
                  <p className="text-gray-600">Av. Principal #123, Ciudad México</p>
                </div>
              </div>
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
                className="group w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                <span className="font-medium">Contactar por WhatsApp</span>
              </a>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Horario de atención: Lunes a Viernes de 9:00 a 18:00 hrs.
                  Sábados de 10:00 a 14:00 hrs.
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