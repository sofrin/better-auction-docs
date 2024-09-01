export const timelineData = [
	{
		id: 1,
		title: 'Видосный аук',
		date: 'Август 2024',
		description: 'Добавлен видосный аук и интеграция с чатом твитча. ',
	},
	{
		id: 2,
		title: 'Косело и рулетка',
		date: 'Июль 2024',
		description: 'Реалезован базовый функционал для ауков + рулетка. ',
	},
];

export type TimelineData = (typeof timelineData)[number];

export interface TimelineElement {
	id: number;
	title: string;
	date: string;
	description: string;
}
