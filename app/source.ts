import { docsData, docsMeta, legalDocs, legalMeta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const source = loader({
	baseUrl: '/docs',
	source: createMDXSource(docsData, docsMeta),
});
export const legal = loader({
	baseUrl: '/legal',
	source: createMDXSource(legalDocs, legalMeta),
});
