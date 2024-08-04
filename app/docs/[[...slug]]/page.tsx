import { getPage, getPages } from '@/app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { languages } from '@/app/i18n';

export default async function Page({
	params,
}: {
	params: { slug?: string[] };
}) {
	const page = getPage(params.slug);

	if (page == null) {
		notFound();
	}

	const MDX = page.data.exports.default;

	return (
		<DocsPage
			toc={page.data.exports.toc}
			full={page.data.full}
		>
			<DocsBody>
				<h1>{page.data.title}</h1>
				<MDX />
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return languages.flatMap((lang) =>
		getPages(lang)!.map((page) => ({
			slug: page.slugs,
			lang,
		})),
	);
}
export function generateMetadata({ params }: { params: { slug?: string[] } }) {
	const page = getPage(params.slug);

	if (page == null) notFound();

	return {
		title: page.data.title,
		description: page.data.description,
	} satisfies Metadata;
}
