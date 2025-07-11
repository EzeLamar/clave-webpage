"use client";

import React from "react";
import { useArticles } from "@/context/ArticlesContext";
import { StrapiImage } from "../custom/strapi-image";
import { BlocksRenderer } from "@/services/block-renderer";
import { useParams } from "next/navigation";

export const ArticleDetailsSection = () => {
  const params = useParams();
  const slug = params.slug;
  const articles = useArticles();
  const article = articles.find((article) => slug && article.slug === slug[1]);

  if (!article) {
    return <div className="text-center py-16">Artículo no encontrado.</div>;
  }

  const firstImage = article.images && article.images.length > 0 ? article.images[0] : null;

  return (
    <section className="bg-white">
      {/* Banner superior con imagen y título superpuesto */}
      <div className="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden">
        {firstImage && (
          <StrapiImage
            src={firstImage.url}
            alt={firstImage.alternativeText || article.title}
            fill
            className="object-cover"
          />
        )}
        {/* Overlay degradé blanco-transparente para el navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/100 to-transparent pointer-events-none z-10" />
        {/* Overlay para contraste del título */}
        <div className="absolute inset-0 bg-black/20 z-20" />
        <h1 className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-3xl md:text-5xl font-bold text-gray-900 bg-white/70 px-6 py-4 rounded shadow-md max-w-2xl mx-auto z-30">
          {article.title}
        </h1>
      </div>
      {/* Contenido debajo del banner */}
      <div className="container mx-auto px-4 md:px-6 max-w-3xl py-8 md:py-12">
        <div className="prose max-w-none mx-auto">
          <BlocksRenderer content={article.description} />
        </div>
      </div>
    </section>
  );
};

export default ArticleDetailsSection; 