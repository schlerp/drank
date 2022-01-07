import db from '$lib/services/database';
import type { IRecipe } from 'src/types';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(): Promise<{ body: IRecipe[] }> {
    const recipes = db.all();
    if (recipes) {
        return { body: recipes };
    }
}
