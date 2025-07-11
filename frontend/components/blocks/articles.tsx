"use client";

import React from "react";
import { ArticlesProps } from "@/types/blocks";
import { BlocksRenderer } from "@/services/block-renderer";
import { useArticles } from "@/context/ArticlesContext";
import { ArticlesCarousel } from "./ArticlesCarousel";

export const ArticlesSection = ({ title, description, anchorLink }: ArticlesProps) => {
  const articles = useArticles();

  return (
    <section id={anchorLink} className="py-16 md:py-16 bg-gradient-to-br bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {(title || description) && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <div className="text-lg text-gray-600 max-w-3xl mx-auto">
              <BlocksRenderer content={description} />
            </div>
          </div>
        )}
        <ArticlesCarousel articles={articles.filter(article => article.show)} />
      </div>
    </section>
  );
};

export default ArticlesSection; 