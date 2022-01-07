import db from '$lib/services/database';
import type { IRecipeSummary } from 'src/types';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(): Promise<{ body: IRecipeSummary[] }> {
	const recipes = db.allSummary();
	if (recipes) {
		return { body: recipes };
	}
}
