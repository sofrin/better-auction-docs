import { source } from '@/app/source';
import type { Metadata } from 'next';
import {
	DocsPage,
	DocsBody,
	DocsTitle,
	DocsDescription,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

export default async function Page(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
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
				<MDX components={{ ...defaultMdxComponents, Accordion, Accordions }} />
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);

	if (!page) notFound();

	return {
		title: page.data.title,
	} satisfies Metadata;
}
