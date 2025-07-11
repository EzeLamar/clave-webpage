import React from "react";
import Link from "next/link";
import { ArticleProps } from "@/types/base";
import { StrapiImage } from "./custom/strapi-image";

interface ArticleCardProps {
  slug: string;
  article: ArticleProps;
}

// Helper function to extract text from RootNode array (description)
function extractTextFromDescription(description: ArticleProps['description']): string {
  if (!description || !Array.isArray(description)) return '';
  
  let text = '';
  for (const node of description) {
    if (node.type === 'paragraph' && node.children) {
      for (const child of node.children) {
        if (child.type === 'text') {
          text += child.text;
        }
      }
    }
  }
  return text;
}

export function ArticleCard({ slug, article }: ArticleCardProps) {
  const descriptionText = extractTextFromDescription(article.description);
  const truncatedDescription = descriptionText.length > 150 
    ? descriptionText.substring(0, 150) + '...' 
    : descriptionText;
  
  const articleImage = article.images && article.images.length > 0 
    ? article.images[0] : null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Article Image */}
      {articleImage && (
        <div className="relative h-48 overflow-hidden">
          <StrapiImage
            src={articleImage.url}
            alt={articleImage.alternativeText || ''}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {/* Article Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {article.title}
        </h3>
        
        {/* Description */}
        {truncatedDescription && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {truncatedDescription}
          </p>
        )}
        
        {/* Read More Link */}
        <Link
          href={`/${slug}/${article.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
        >
          Leer más
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 