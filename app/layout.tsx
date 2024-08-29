import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { I18nProvider } from 'fumadocs-ui/i18n';
const inter = Inter({
	subsets: ['latin', 'cyrillic'],
});

export default function Layout({
	params,
	children,
}: {
	params: { lang: string };
	children: React.ReactNode;
}) {
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
