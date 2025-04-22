import { ProductType } from '../types';

export const products: ProductType[] = [
  {
    id: 1,
    name: "Hidrolit Classic",
    description: "Sistema de purificación básico ideal para uso doméstico. Elimina cloro, sedimentos y mal olor del agua, mejorando su sabor significativamente.",
    features: [
      "Elimina cloro y sedimentos",
      "Mejora el sabor del agua",
      "Instalación sencilla",
      "Mantenimiento mínimo"
    ],
    price: "$12,499",
    imageUrl: "https://images.pexels.com/photos/6973895/pexels-photo-6973895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Residencial"
  },
  {
    id: 2,
    name: "Hidrolit Premium",
    description: "Purificador avanzado con tecnología de osmosis inversa que elimina hasta el 99% de contaminantes, incluyendo metales pesados y bacterias.",
    features: [
      "Tecnología de osmosis inversa",
      "Elimina hasta 99% de contaminantes",
      "Incluye 5 etapas de filtración",
      "Monitor de calidad integrado"
    ],
    price: "$18,999",
    imageUrl: "https://images.pexels.com/photos/6973868/pexels-photo-6973868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Residencial"
  },
  {
    id: 3,
    name: "Hidrolit Industrial",
    description: "Solución robusta para negocios e industrias. Diseñado para alto volumen de procesamiento y máxima durabilidad en entornos exigentes.",
    features: [
      "Capacidad de 50 litros por hora",
      "Componentes de grado industrial",
      "Sistema de autodiagnóstico",
      "Certificaciones ISO"
    ],
    price: "$35,899",
    imageUrl: "https://images.pexels.com/photos/9464990/pexels-photo-9464990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Comercial"
  },
  {
    id: 4,
    name: "Hidrolit Mini",
    description: "Compacto y portátil, perfecto para apartamentos pequeños o para llevar de viaje. Proporciona agua purificada al instante donde sea que vayas.",
    features: [
      "Diseño compacto y portátil",
      "No requiere instalación",
      "Filtros reemplazables",
      "Batería recargable opcional"
    ],
    price: "$6,999",
    imageUrl: "https://images.pexels.com/photos/4239168/pexels-photo-4239168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Portátil"
  },
  {
    id: 5,
    name: "Hidrolit UV+",
    description: "Con tecnología ultravioleta que elimina virus, bacterias y parásitos. Ideal para zonas con agua de calidad cuestionable.",
    features: [
      "Lámpara UV de alta intensidad",
      "Elimina el 99.99% de patógenos",
      "Indicador de funcionamiento UV",
      "Bajo consumo energético"
    ],
    price: "$22,499",
    imageUrl: "https://images.pexels.com/photos/6693663/pexels-photo-6693663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Residencial"
  },
  {
    id: 6,
    name: "Hidrolit Office",
    description: "Diseñado específicamente para oficinas y espacios de trabajo. Proporciona agua fría y caliente para todo el personal.",
    features: [
      "Dispensador de agua fría y caliente",
      "Capacidad para oficinas de hasta 30 personas",
      "Sistema de ahorro energético",
      "Diseño elegante"
    ],
    price: "$27,999",
    imageUrl: "https://images.pexels.com/photos/7161956/pexels-photo-7161956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Comercial"
  }
];

export const categories = [
  { id: "all", name: "Todos" },
  { id: "Residencial", name: "Residencial" },
  { id: "Comercial", name: "Comercial" },
  { id: "Portátil", name: "Portátil" }
];