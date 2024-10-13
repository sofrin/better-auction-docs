import { legal } from '@/app/source';
import type { Metadata } from 'next';
import {
	DocsPage,
	DocsBody,
	DocsTitle,
	DocsDescription,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';

export default async function Page({
	params,
}: {
	params: { slug?: string[] };
}) {
	const page = legal.getPage(params.slug);
	if (!page) notFound();

	const MDX = page.data.body;

	return (
		<DocsPage
			toc={page.data.toc}
			full={page.data.full}
		>
			<DocsTitle className='text-balance'>{page.data.title}</DocsTitle>
			<DocsDescription className='text-pretty'>
				{page.data.description}
			</DocsDescription>
			<DocsBody className='text-pretty'>
				<MDX components={{ ...defaultMdxComponents }} />
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return legal.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
	const page = legal.getPage(params.slug);

	if (!page) notFound();

	return {
		title: page.data.title,
	} satisfies Metadata;
}
