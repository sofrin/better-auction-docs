import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { legal } from '@/app/source';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			{...baseOptions}
			tree={legal.pageTree}
		>
			{children}
		</DocsLayout>
	);
}
