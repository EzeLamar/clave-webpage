import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from '@/components/global/FloatingWhatsAppButton';
import { strapiApi } from "@/services/api";
import { Header, Footer, Banner } from "@/components/global";
import { GlobalProvider } from "@/context/GlobalContext";
import { ProductsProvider } from "@/context/ProductsContext";
import { CategoriesProvider } from "../context/CategoriesContext";
import { ArticlesProvider } from "@/context/ArticlesContext";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clave | Purificadores de Agua y Alimentos Nutracéuticos",
  description: "Descubre, los mejores purificadores de agua, repuestos y alimentos nutracéuticos. Información detallada, atención personalizada y envío a todo el país. Mejora tu calidad de vida con Clave.",
};

// function AlertBanner() {
//   return (
//     <div className="sticky top-0 left-0 w-full z-[100] bg-primary text-primary-foreground h-10 flex items-center overflow-hidden shadow animate-fadeIn">
//       <div className="w-full whitespace-nowrap overflow-hidden relative">
//         <div className="absolute left-full animate-marquee inline-block px-4">
//           ¡Atención! Envíos gratis en compras superiores a $50. Consulta nuestras promociones especiales de temporada.
//         </div>
//         <div className="inline-block px-4">
//           ¡Atención! Envíos gratis en compras superiores a $50. Consulta nuestras promociones especiales de temporada.
//         </div>
//       </div>
//     </div>
//   );
// }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // @ts-expect-error - Strapi API response type is not properly typed
  const { data: global } = await strapiApi.get('/api/global');
  console.log("global", global);
  // @ts-expect-error - Strapi API response type is not properly typed
  const { data: products } = await strapiApi.get('/api/products');
  // @ts-expect-error - Strapi API response type is not properly typed
  const { data: categories } = await strapiApi.get('/api/categories');
  // @ts-expect-error - Strapi API response type is not properly typed
  const { data: articles } = await strapiApi.get('/api/articles');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalProvider global={global}>
          {global.banner && <Banner {...global.banner} />}
          <Header {...global.header} />
          <CategoriesProvider categories={categories}>
            <ArticlesProvider articles={articles}>
              <ProductsProvider products={products}>
                {children}
                {global.isVisibleContactButton && <FloatingWhatsAppButton />}
                <Footer {...global.footer} />
              </ProductsProvider>
            </ArticlesProvider>
          </CategoriesProvider>
        </GlobalProvider>
        <Analytics />
      </body>
    </html>
  );
}
