import { DynamicPageProvider } from '@/context/DynamicPageContext';
import strapiApi from '@/services/api';
import { blockRenderer } from '@/services/block-renderer';
import { DynamicPageProps } from '@/types/base';
import { Block } from '@/types/blocks';
import { notFound } from 'next/navigation';

async function getPageBySlug(slug: string[]): Promise<DynamicPageProps | null> {
    const res = await strapiApi.get(`/api/pages?filters[slug][$eq]=${slug[0]}`);
    // @ts-expect-error - Strapi API response type is not properly typed
    const data = res.data;

    if (!data || data.length === 0) {
        return null;
    }

    const page = data[0];
    return page;
}

export default async function DynamicPage({
    params
}: {
    params: Promise<{ slug: string[] }>
}) {
    const { slug } = await params;
    const page = await getPageBySlug(slug);
    if (!page || !page.enabled) {
        notFound(); // 404
    }

    return (
        <main className="overflow-x-hidden">
            <DynamicPageProvider dynamicPage={page}>
                {page.blocks.map((block: Block, index: number) => blockRenderer(block, index))}
            </DynamicPageProvider>
        </main>
    );
}
