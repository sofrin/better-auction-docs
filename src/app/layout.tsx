import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { Inter } from "next/font/google";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});


export const metadata: Metadata = {
  title: 'Better-Auction Docs',
  description: "Документация по сайту Better-Auction",
}

export default function Layout({ children }: LayoutProps<"/">) {
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
          <DocsLayout tree={source.pageTree} {...baseOptions()}>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
