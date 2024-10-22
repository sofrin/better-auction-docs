import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { source } from '../source';
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			sidebar={{
				banner: (
					<RootToggle
						options={[
							{
								title: 'Docs',
								description: 'Documentation pages',
								url: '/docs',
							},
							{
								title: 'Legal',
								description: 'Regulatory documents',
								url: '/legal',
							},
						]}
					/>
				),
			}}
			tree={source.pageTree}
			{...baseOptions}
		>
			{children}
		</DocsLayout>
	);
}
