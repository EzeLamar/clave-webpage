'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatCurrency } from '@/lib/currency';
import { ProductDetailsProps } from '@/types/blocks';
import { useProducts } from '@/context/ProductsContext';
import { StrapiImage } from '../custom/strapi-image';
import { useParams } from 'next/navigation';
import ContactButton from '../ContactButton';
import { BlocksRenderer } from '@/services/block-renderer';

export function ProductDetails({ }: ProductDetailsProps) {
  const params = useParams();
  const slug = params.slug;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const product = useProducts().find(product => slug && product.slug === slug[1]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal: disable background scroll when open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Modal: handle Esc key to close
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : (product?.images.length || 1) - 1));
      }
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev < (product?.images.length || 1) - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, product?.images.length]);

  if (!product) {
    return <div>Product not found</div>
  }

  const { name, images, discount, price, description, shipmentDescription } = product;

  // const router = useRouter();

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images Responsive Layout */}
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            {/* Vertical thumbnails (desktop) */}
            <div className="hidden lg:flex flex-col gap-2 w-16">
              {images.slice(0, 7).map((image, index) => {
                if (index === 6 && images.length > 7) {
                  return (
                    <button
                      key={index}
                      className={cn(
                        "relative aspect-square rounded-md overflow-hidden flex items-center justify-center bg-muted text-lg font-semibold text-primary border border-border cursor-pointer",
                        selectedImageIndex >= index && "ring-2 ring-primary"
                      )}
                      onMouseEnter={() => setSelectedImageIndex(index)}
                      onClick={() => setIsModalOpen(true)}
                    >
                      +{images.length - 6}
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    className={cn(
                      "relative aspect-square rounded-md overflow-hidden border border-border",
                      selectedImageIndex === index && "ring-2 ring-primary"
                    )}
                    onMouseEnter={() => setSelectedImageIndex(index)}
                  >
                    <StrapiImage
                      src={image.url}
                      alt={image.alternativeText}
                      fill
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>

            {/* Main image (always visible, centered on tablet) */}
            <div className="flex-1 flex flex-col items-center">
              <div
                className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden border border-border cursor-zoom-in"
              >
                {/* Badge X/Y */}
                <Badge className="absolute top-4 left-4 z-10 bg-gray-100 text-primary font-semibold px-3 py-1">
                  {selectedImageIndex + 1}/{images.length}
                </Badge>
                <div
                  onClick={() => setIsModalOpen(true)}
                >
                  <StrapiImage
                    src={images[selectedImageIndex].url}
                    alt={images[selectedImageIndex].alternativeText}
                    fill
                    className="object-contain"
                  />
                </div>

                {discount > 0 && (
                  <Badge variant="destructive" className="absolute top-4 right-4">
                    {discount}% OFF
                  </Badge>
                )}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm z-20"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm z-20"
                  onClick={handleNextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Horizontal thumbnails (tablet only) */}
              <div className="hidden md:flex lg:hidden flex-row gap-2 w-full py-2 mt-2">
                {images.slice(0, 5).map((image, index) => {
                  if (index === 4 && images.length > 5) {
                    return (
                      <button
                        key={index}
                        className={cn(
                          "relative min-w-[56px] aspect-square rounded-md overflow-hidden flex items-center justify-center bg-muted text-lg font-semibold text-primary border border-border",
                          selectedImageIndex >= index && "ring-2 ring-primary"
                        )}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        +{images.length - 4}
                      </button>
                    );
                  }
                  return (
                    <button
                      key={index}
                      className={cn(
                        "relative min-w-[56px] aspect-square rounded-md overflow-hidden border border-border",
                        selectedImageIndex === index && "ring-2 ring-primary"
                      )}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <StrapiImage
                        src={image.url}
                        alt={image.alternativeText}
                        fill
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{name}</h1>

              {/* <div className="flex items-center gap-2 mt-2">
            <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < product.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
                )}
                />
                ))}
                </div>
                <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
                </span>
                </div> */}
            </div>

            <div>
              <div className="flex items-center gap-3 mt-4">
                <span className="text-3xl font-bold">{formatCurrency(price - discount * price / 100)}</span>
                {discount > 0 && (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Ahorra {formatCurrency(discount * price / 100)}
                  </Badge>
                )}
              </div>
              {discount > 0 && (
                <span className="text-muted-foreground line-through text-lg">
                  {formatCurrency(price)}
                </span>
              )}

            </div>


            <div>
            </div>

            <div className="space-y-4">
              {<div className="flex flex-wrap gap-1 text-muted-foreground mb-3">
                {
                  product.features.map(feature => (
                    <Badge key={feature.slug} variant="outline" className='text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700 cursor-pointer'>
                      {feature.name}
                    </Badge>))
                }
              </div>}
            </div>

            <Separator />

            <div className="flex items-center gap-4 flex-wrap">
              <ContactButton productName={name} grow />
              <div className="flex items-center gap-3">
                <Button size="icon" variant="outline">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Agregar a Favoritos</span>
                </Button>
                <Button size="icon" variant="outline">
                  <Share className="h-5 w-5" />
                  <span className="sr-only">Compartir Producto</span>
                </Button>

              </div>
            </div>

            <div className="bg-accent/50 p-4 rounded-lg space-y-3">
              <div className="flex items-center gap-2">
                <Truck className="text-primary h-5 w-5" />
                <span className="text-sm">
                  Envío gratis en pedidos superiores a $50
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-5 w-5"><path d="M4.5 6.5v5s0 2.5 3.5 2.5 3.5-2.5 3.5-2.5v-5S11.5 4 8 4s-3.5 2.5-3.5 2.5Z"></path><path d="M4.5 11.5v4s0 2.5 3.5 2.5 3.5-2.5 3.5-2.5v-4"></path><path d="M12.5 6.5v5s0 2.5 3.5 2.5 3.5-2.5 3.5-2.5v-5S19.5 4 16 4s-3.5 2.5-3.5 2.5Z"></path><path d="M12.5 11.5v4s0 2.5 3.5 2.5 3.5-2.5 3.5-2.5v-4"></path></svg>
                <span className="text-sm">
                  Pagos seguros con MercadoPago
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-5 w-5"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                <span className="text-sm">
                  Devoluciones fáciles en 30 días
                </span>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="details" className="col-span-1 md:col-span-2 mb-12">
            <TabsList className={cn("grid w-full", shipmentDescription ? "grid-cols-2": "grid-cols-1")}>
              <TabsTrigger value="details">Detalles del Producto</TabsTrigger>
              {shipmentDescription && <TabsTrigger value="shipping">Envío y Devoluciones</TabsTrigger>}
            </TabsList>

            <TabsContent value="details" className="mt-6 space-y-4">
              <BlocksRenderer content={description} />
            </TabsContent>
            {shipmentDescription && <TabsContent value="shipping" className="mt-6 space-y-4">
              <BlocksRenderer content={shipmentDescription}/>
              {/* <h3 className="text-lg font-semibold">Información de Envío</h3>
              <p>Enviamos a la mayoría de los países del mundo. Los tiempos y costos de envío pueden variar según la ubicación.</p>

              <div className="space-y-4 mt-4">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-medium">Envío Estándar</h4>
                  <p className="text-sm text-muted-foreground">3-5 días hábiles</p>
                  <p className="text-sm">Gratis para pedidos superiores a $50, de lo contrario $4.99</p>
                </div>

                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-medium">Envío Express</h4>
                  <p className="text-sm text-muted-foreground">1-2 días hábiles</p>
                  <p className="text-sm">$12.99 independientemente del valor del pedido</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-6">Política de Devoluciones</h3>
              <p>Aceptamos devoluciones dentro de los 30 días posteriores a la entrega para artículos sin usar en su empaque original.</p>
              <p className="text-sm text-muted-foreground mt-2">Tenga en cuenta que los costos de envío para devoluciones son responsabilidad del cliente, a menos que la devolución sea por nuestro error.</p> */}
            </TabsContent>}
          </Tabs>
        </div>
      </div>

      {/* Modal for fullscreen image */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setIsModalOpen(false)}>
          {/* Close button */}
          <button
            className="absolute top-4 right-6 text-white text-3xl z-10 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
            aria-label="Cerrar"
          >
            &times;
          </button>
          {/* X/Y badge */}
          <span className="absolute top-4 left-4 z-10 bg-white/80 text-black font-semibold px-3 py-1 rounded">
            {selectedImageIndex + 1}/{images.length}
          </span>
          <div className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            {/* Prev button */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl z-10 bg-black/50 rounded-full p-2 hover:bg-black/80 cursor-pointer"
              onClick={e => { e.stopPropagation(); handlePrevImage(); }}
              aria-label="Anterior"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            {/* Next button */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl z-10 bg-black/50 rounded-full p-2 hover:bg-black/80 cursor-pointer"
              onClick={e => { e.stopPropagation(); handleNextImage(); }}
              aria-label="Siguiente"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            {/* Image */}
            <div className="flex items-center justify-center w-full h-[60vw] max-h-[80vh]">
              <StrapiImage
                src={images[selectedImageIndex].url}
                alt={images[selectedImageIndex].alternativeText || ''}
                className="object-contain max-h-[80vh] max-w-full rounded-lg bg-white"
                fill
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}