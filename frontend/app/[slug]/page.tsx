import strapiApi from '@/services/api';
import { blockRenderer } from '@/services/block-renderer';
import { Block } from '@/types/blocks';
import { notFound } from 'next/navigation';

type Page = {
    title: string;
    blocks: Block[];
    slug: string;
};

async function getPageBySlug(slug: string): Promise<Page | null> {
    const res = await strapiApi.get(`/api/pages?filters[slug][$eq]=${slug}`);
    // @ts-expect-error - Strapi API response type is not properly typed
    const data = res.data;

    if (!data || data.length === 0) {
        return null;
    }

    const page = data[0];
    return {
        title: page.title,
        blocks: page.blocks,
        slug: page.slug,
    };
}

export default async function DynamicPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const page = await getPageBySlug(slug);
    console.log("page", page);
    if (!page) {
        notFound(); // 404
    }

    return (
        <main className="overflow-x-hidden">
            {page.blocks.map((block: Block, index: number) => blockRenderer(block, index))}
        </main>
    );
}
