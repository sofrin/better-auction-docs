import { Link } from 'next-view-transitions';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
// shared configuration
export const baseOptions: BaseLayoutProps = {
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
