'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share, Star, Truck } from 'lucide-react';
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

export function ProductDetails({ }: ProductDetailsProps) {
  const params = useParams();
  const slug = params.slug;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const product = useProducts().find(product => slug && product.slug === slug[1]);

  if (!product) {
    return <div>Product not found</div>
  }

  const { name, images, discount, price, description } = product;

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
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-border">
              <StrapiImage
                src={images[selectedImageIndex].url}
                alt={images[selectedImageIndex].alternativeText}
                fill
                className="object-contain"
              />

              {discount > 0 && (
                <Badge variant="destructive" className="absolute top-4 right-4">
                  {discount}% OFF
                </Badge>
              )}

              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={handleNextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  className={cn(
                    "relative aspect-square rounded-md overflow-hidden",
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
              ))}
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

            <div className="flex items-center gap-3 mt-4">
              <span className="text-3xl font-bold">{formatCurrency(price - discount * price / 100)}</span>
              {discount > 0 && (
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Ahorra {formatCurrency(discount * price / 100)}
                </Badge>
              )}
            </div>
            {discount && (
              <span className="text-muted-foreground line-through text-lg">
                {formatCurrency(price)}
              </span>
            )}

            <div>
              <p className="mb-4">{description}</p>
              {/* <div className="flex flex-wrap gap-2">
            {product.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
              {tag}
              </Badge>
              ))}
              </div> */}
            </div>

            <Separator />

            <div className="space-y-4">
              {/* <div className="flex items-baseline gap-2">
            <span className="font-medium">Disponibilidad:</span>
            <span className={cn(
              "text-sm",
              product.stock > 0 ? "text-green-600" : "text-red-600"
              )}>
              {product.stock > 0 ? `En Stock (${product.stock} disponibles)` : "Agotado"}
              </span>
              </div> */}
              <div className="flex items-center gap-2">
                <span className="font-medium">Categoría:</span>
                {/* <span className="text-muted-foreground">{product.categoryId}</span> */}
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              {/* <CartProductButton
            productId={product.id}
            productName={product.name}
            quantitySelected={quantitySelected}
            stock={product.stock}
            cartIsLoading={cartIsLoading}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            showLabel={true}
            /> */}
              <ContactButton productName={name} />
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
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Detalles del Producto</TabsTrigger>
              <TabsTrigger value="shipping">Envío y Devoluciones</TabsTrigger>
              <TabsTrigger value="reviews">Reseñas</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Descripción</h3>
              <p>{description}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>

              <h3 className="text-lg font-semibold mt-6">Características</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Materiales de alta calidad que garantizan durabilidad y longevidad</li>
                <li>Diseñado para máxima comodidad y uso diario</li>
                <li>Diseño versátil que se adapta a muchas ocasiones y estilos</li>
                <li>Fácil de mantener y limpiar</li>
              </ul>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Información de Envío</h3>
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
              <p className="text-sm text-muted-foreground mt-2">Tenga en cuenta que los costos de envío para devoluciones son responsabilidad del cliente, a menos que la devolución sea por nuestro error.</p>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              {/* <div className="flex items-center mb-6">
            <div className="mr-4">
            <div className="text-5xl font-bold">{product.rating}</div>
            <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.floor(product.rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
                )}
                />
                ))}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{product.reviewCount} reviews</div>
                </div>
                
                <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center">
                  <div className="text-sm w-6">{star}</div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden mx-2">
                  <div
                  className="h-full bg-yellow-400"
                  style={{
                    width: `${Math.random() * 100}%`
                    }}
                    ></div>
                    </div>
                    <div className="text-sm text-muted-foreground w-10">
                    {Math.floor(Math.random() * 50)}
                    </div>
                    </div>
                    ))}
                    </div>
                    </div> */}

              <Button variant="outline" className="w-full mb-8">Escribir una Reseña</Button>

              <div className="space-y-6">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="border-b border-border pb-6 last:border-0">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Customer {index + 1}</div>
                      <div className="text-muted-foreground text-sm">
                        {new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < 4 + (index % 2)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus.</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}