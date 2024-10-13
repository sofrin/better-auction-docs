import { defineDocs } from 'fumadocs-mdx/config';

export const { docs: docsData, meta: docsMeta } = defineDocs({
	docs: { dir: './content/docs' },
});
export const { docs: legalDocs, meta: legalMeta } = defineDocs({
	docs: { dir: './content/legal' },
});
