import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
	subsets: ["latin", "cyrillic"],
});

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="ru" className={inter.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<RootProvider
					i18n={{
						locale: "ru",
						translations: {
							chooseTheme: "Выбор темы",
							nextPage: "Следующая страница",
							editOnGithub: "Редактировать на Github",
							toc: "Оглавление",
							lastUpdate: "Последнее изменение",
							search: "Поиск",
							tocNoHeadings: "Нет заголовков",
							previousPage: "Предыдущая страница",
							searchNoResult: "Ничего не найдено",
							chooseLanguage: "Выбор языка",
						},
					}}
				>
					{children}
				</RootProvider>
			</body>
		</html>
	);
}
