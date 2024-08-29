import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { docs } from '@/app/source';
import { Link } from 'next-view-transitions';
// shared configuration
export const baseOptions: HomeLayoutProps = {
	nav: {
		title: 'Better Auction Docs',
	},
	links: [
		{
			type: 'custom',
			children: (
				<Link
					className='flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [&_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none'
					href='https://betterauction.ru'
				>
					Вернуться к ауку
				</Link>
			),
		},
	],
	githubUrl: 'https://github.com/sofrin/better-auction-docs',
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
	...baseOptions,
	tree: docs.pageTree,
	sidebar: {},
};
