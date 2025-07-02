import type { Block } from "@/types";

import { AboutUs, Hero, ProductsSection, ContactSection, CategoriesSection, Opinions, ProductDetails } from "@/components/blocks";
import { BlocksRenderer as StrapiBlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { RootNode } from "@/types/base";

export async function blockRenderer(block: Block, index: number) {
  if (!block.show) return null;

  switch (block.__component) {
    case "blocks.hero":
      return <Hero {...block} key={index} />;
    case "blocks.about-us":
      return <AboutUs {...block} key={index} />;
    case "blocks.opinions":
      return <Opinions {...block} key={index} />;
    case "blocks.products":
      return <ProductsSection {...block} key={index} />;
    case "blocks.contact":
      return <ContactSection {...block} key={index} />;
    case "blocks.categories":
      return <CategoriesSection {...block} key={index} />;
    case "blocks.product-details":
      return <ProductDetails  {...block} key={index} />
    default:
      return null;
  }
}

interface BlocksRendererProp {
  content: RootNode[];
}

export function BlocksRenderer({ content }: BlocksRendererProp) {
  return (
    <StrapiBlocksRenderer
      content={typeof content === "string" ? [] : content}
      blocks={{
        heading: ({ children, level }) => {
          const base = "font-bold mt-4 mb-2";
          if (level === 1) {
            return <h1 className={`text-2xl md:text-3xl ${base}`}>{children}</h1>;
          }
          if (level === 2) {
            return <h2 className={`text-xl md:text-2xl ${base}`}>{children}</h2>;
          }
          if (level === 3) {
            return <h3 className={`text-lg md:text-xl font-semibold mt-3 mb-1`}>{children}</h3>;
          }
          return <h4 className="text-base font-semibold mt-2 mb-1">{children}</h4>;
        },
        // Add support for bullet and ordered lists
        list: ({ children, format }) => {
          if (format === "ordered") {
            return <ol className="list-decimal ml-6 my-2">{children}</ol>;
          }
          return <ul className="list-disc ml-6 my-2">{children}</ul>;
        },
        // @ts-expect-error - Strapi API block listItem format is not specified
        listItem: ({ children }) => {
          return <li className="mb-1">{children}</li>;
        },
        // Add custom styles for links
        link: ({ children, url, ...props }) => {
          return (
            <Link
              href={url}
              className="text-blue-500 underline underline-offset-2 hover:text-blue-500/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {children}
            </Link>
          );
        },
      }}
    />)
}