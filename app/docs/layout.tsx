import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { docsOptions } from '../layout.config';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
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
			{...docsOptions}
		>
			{children}
		</DocsLayout>
	);
}
