export enum CurrentView {
	Resume = 'Resume',
	Portfolio = 'Portfolio',
}

export type CurrentViewUnion = keyof typeof CurrentView;
