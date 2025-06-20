'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { OpinionsProps } from '@/types/blocks';

const testimonials = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    image: 'https://i.pravatar.cc/150?img=44',
    role: 'Cliente Frecuente',
    content: 'He estado comprando aquí durante años y la calidad de los productos y el servicio siempre es excepcional. ¡El nuevo sitio web hace que comprar sea aún más fácil!',
  },
  {
    id: 2,
    name: 'Carlos Sánchez',
    image: 'https://i.pravatar.cc/150?img=68',
    role: 'Primera Compra',
    content: 'Me impresionó lo fácil que era navegar por el sitio y encontrar exactamente lo que necesitaba. ¡El proceso de pago fue fluido y mi pedido llegó antes de lo esperado!',
  },
  {
    id: 3,
    name: 'Laura Fernández',
    image: 'https://i.pravatar.cc/150?img=47',
    role: 'Bloguera de Moda',
    content: 'Como alguien que compra en línea frecuentemente, aprecio la atención al detalle en este sitio. Las fotos de los productos son de alta calidad y las descripciones son precisas.',
  },
  {
    id: 4,
    name: 'Javier Morales',
    image: 'https://i.pravatar.cc/150?img=59',
    role: 'Cliente Recurrente',
    content: 'El servicio al cliente es sobresaliente. Tuve un problema con mi pedido y se resolvió inmediatamente. ¡Definitivamente seguiré comprando aquí!',
  },
];

export function Opinions({ title }: OpinionsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    if (userInteracted) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, userInteracted]);

  const handlePrev = () => {
    setUserInteracted(true);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setUserInteracted(true);
    setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="mx-auto px-4 p-12 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{title}</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-primary">
          <Quote className="text-blue-700/50" size={80} />
        </div>

        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="text-center">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p className="text-lg md:text-xl mb-6 italic">{testimonial.content}</p>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                index === activeIndex
                  ? "bg-blue-700 w-4"
                  : "bg-muted-foreground/30"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Testimonio anterior</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Siguiente testimonio</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Opinions;