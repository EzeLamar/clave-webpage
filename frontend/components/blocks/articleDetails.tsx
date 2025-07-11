"use client";

import React, { useState } from "react";
import { useArticles } from "@/context/ArticlesContext";
import { StrapiImage } from "../custom/strapi-image";
import { BlocksRenderer } from "@/services/block-renderer";
import { useParams } from "next/navigation";

export const ArticleDetailsSection = () => {
  const params = useParams();
  const slug = params.slug;
  const articles = useArticles();
  const article = articles.find((article) => slug && article.slug === slug[1]);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!article) {
    return <div className="text-center py-16">Artículo no encontrado.</div>;
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">{article.title}</h1>

        {/* Carrusel de imágenes */}
        {article.images && article.images.length > 0 && (
          <div className="mb-8 flex flex-col items-center">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-2 bg-gray-100">
              <StrapiImage
                src={article.images[selectedImage].url}
                alt={article.images[selectedImage].alternativeText || article.title}
                fill
                className="object-contain"
              />
              {article.images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full p-2 transition"
                    onClick={() => setSelectedImage((prev) => prev === 0 ? article.images.length - 1 : prev - 1)}
                    aria-label="Anterior"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full p-2 transition"
                    onClick={() => setSelectedImage((prev) => prev === article.images.length - 1 ? 0 : prev + 1)}
                    aria-label="Siguiente"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            {/* Miniaturas */}
            {article.images.length > 1 && (
              <div className="flex gap-2 mt-2">
                {article.images.map((img, idx) => (
                  <button
                    key={img.id}
                    className={`w-16 h-16 rounded border ${selectedImage === idx ? 'ring-2 ring-primary' : 'border-gray-200'}`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <StrapiImage
                      src={img.url}
                      alt={img.alternativeText || article.title}
                      width={64}
                      height={64}
                      className="object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Descripción */}
        <div className="prose max-w-none mx-auto">
          <BlocksRenderer content={article.description} />
        </div>
      </div>
    </section>
  );
};

export default ArticleDetailsSection; 