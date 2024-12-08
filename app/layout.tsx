import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { I18nProvider } from 'fumadocs-ui/i18n';
const inter = Inter({
	subsets: ['latin', 'cyrillic'],
});
import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	metadataBase: new URL(siteConfig.url),
	description: siteConfig.description,
	keywords: ['Stream', 'Twitch', 'Auction', 'DonationAlerts'],
	applicationName: 'Better Auction Docs',
	generator: 'Next.js',
	robots: 'index, follow',
	creator: 'Sofrin',
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.name,
		locale: 'ru',
		type: 'website',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
};
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<ViewTransitions>
			<html
				lang={'ru'}
				className={inter.className}
				suppressHydrationWarning
			>
				<body>
					<I18nProvider
						locale={'ru'}
						translations={{
							nextPage: 'Следующая страница',
							previousPage: 'Предыдущая страница',
							searchNoResult: 'Ничего не найдено',
							chooseTheme: 'Выберите тему',
							lastUpdate: 'Последнее обновление',
							toc: 'Содержание',
							tocNoHeadings: 'Нет заголовков',
							search: 'Поиск',
							chooseLanguage: 'Выберите язык',
						}}
					>
						<RootProvider
							search={{
								links: [
									['Главная', '/'],
									['Документация', '/docs'],
								],
								hotKey: [
									{
										display: 'Л',
										key: 'л', // key code, or a function determining whether the key is pressed
									},
								],
							}}
						>
							{children}
						</RootProvider>
					</I18nProvider>
				</body>
			</html>
		</ViewTransitions>
	);
}
