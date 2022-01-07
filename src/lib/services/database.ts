import type { IRecipe, IRecipeSummary } from 'src/types';
import recipes from '../../../static/recipes.json';

export class RecipeDB {
	_recipes: IRecipe[];

	constructor(recipes: IRecipe[]) {
		this._recipes = recipes;
	}

	get(name: string): IRecipe | undefined {
		return this._recipes.find((recipe) => {
			return recipe.name === name;
		});
	}

	random(): IRecipe {
		return this._recipes[Math.floor(Math.random() * this._recipes.length)];
	}

	all(): IRecipe[] {
		return this._recipes;
	}

	allSummary(): IRecipeSummary[] {
		return this._recipes.map((r) => {
			return {
				name: r.name,
				imageUrl: r.imageUrl,
				source: r.source,
				imageDescription: r.imageDescription
			};
		});
	}
}

export const db = new RecipeDB(recipes);

export default db;
