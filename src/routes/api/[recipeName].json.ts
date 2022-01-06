import db from '$lib/services/database';
import type { IRecipe } from 'src/types';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }): Promise<{ body: IRecipe }> {
	const recipe = db.get(params.recipeName);
	if (recipe) {
		return { body: recipe };
	}
}
