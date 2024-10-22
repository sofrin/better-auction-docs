import { Link } from 'next-view-transitions';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';
import { baseOptions } from './layout.config';

function Layout({ children }: { children: ReactNode }) {
	return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
export default function HomePage() {
	return (
		<Layout>
			<main className='flex h-[calc(100vh-56px)] flex-col justify-center text-center'>
				<h1 className='mb-4 text-2xl font-bold'>
					Добро пожаловать на страницу документации
				</h1>
				<p className='text-fd-muted-foreground'>
					Можете перейти по{' '}
					<Link
						href='/docs'
						className='text-fd-foreground font-semibold underline'
					>
						/docs
					</Link>{' '}
					и посмотреть документацию.
				</p>
				<p className='text-fd-muted-foreground'>
					или вернуться на сайт аука{' '}
					<Link
						href='https://betterauction.ru'
						className='text-fd-foreground font-semibold underline'
					>
						betterauction.ru
					</Link>
				</p>
			</main>
		</Layout>
	);
}
