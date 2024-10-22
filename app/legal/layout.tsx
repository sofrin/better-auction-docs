import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { legal } from '../source';
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			sidebar={{
				banner: (
					<RootToggle
						options={[
							{
								title: 'Docs',
								description: 'Документация по сайту',
								url: '/docs',
							},
							{
								title: 'Legal',
								description: 'Правила пользования сайтом',
								url: '/legal',
							},
						]}
					/>
				),
			}}
			{...baseOptions}
			tree={legal.pageTree}
		>
			{children}
		</DocsLayout>
	);
}
