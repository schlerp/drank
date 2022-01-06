import type { IRecipe } from 'src/types';

export class RecipeDB {
	_recipes: IRecipe[];

	constructor(recipes: IRecipe[]) {
		this._recipes = recipes;
	}

	get(name: string): IRecipe | undefined {
		console.log('db.get', name);
		return this._recipes.find((recipe) => {
			console.log('db.get.find', recipe.name);
			return recipe.name === name;
		});
	}

	random(): IRecipe {
		return this._recipes[Math.floor(Math.random() * this._recipes.length)];
	}
}

export const db = new RecipeDB([
	{
		name: 'manhattan',
		description: [
			'The Manhattan was the most famous cocktail in the world shortly after it was invented in New York City’s Manhattan Club, some time around 1880 (as the story goes). Over the years, the whiskey classic has dipped in and out of fashion before finding its footing as one of the cornerstones of the craft cocktail renaissance.',
			'Amazingly, the drink that socialites tipped to their lips in the 19th century looks and tastes pretty much the same as the one served today at any decent cocktail bar. The Manhattan’s mix of American whiskey and Italian vermouth, enlivened with a few dashes of aromatic bitters, is timeless and tasty—the very definition of what a cocktail should be.'
		],
		ingredients: [
			'2 ounces bourbon or rye',
			'1 ounce sweet vermouth',
			'2 dashes Angostura bitters',
			'1 dash orange bitters',
			'Garnish: brandied cherry'
		],
		steps: [
			'Add the bourbon (or rye), sweet vermouth and both bitters to a mixing glass with ice, and stir until well-chilled.',
			'Strain into a chilled coupe.',
			'Garnish with a brandied cherry.'
		],
		imageUrl:
			'https://www.liquor.com/thmb/juGAUFgLo8gEc_ri0dRVzNwS8ic=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg',
		imageDescription: 'A Manhattan cocktail - liquor.com'
	}
]);

export default db;
