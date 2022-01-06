export interface IRecipe {
	name: string;
	description: string[];
	ingredients: string[];
	steps: string[];
	imageUrl: string;
	imageDescription: string;
}

export interface INavPath {
	href: string;
	text: string;
}
