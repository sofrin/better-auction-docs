import { map } from '@/.map';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

// export const { getPage, getPages, pageTree } = loader({
// 	baseUrl: '/docs',
// 	rootDir: '',
// 	source: createMDXSource(map),
// });

export const docs = loader({
	baseUrl: '/docs',
	rootDir: 'docs',
	source: createMDXSource(map),
});

export const legal = loader({
	baseUrl: '/legal',
	rootDir: 'legal',
	source: createMDXSource(map),
});
