export interface IRecipe {
	name: string;
	description: string[];
	ingredients: string[];
	steps: string[];
	imageUrl: string;
	imageDescription: string;
	source: string;
}

export interface IRecipeSummary {
	name: string;
	imageUrl: string;
	imageDescription: string;
	source: string;
}

export interface INavPath {
	href: string;
	text: string;
}
