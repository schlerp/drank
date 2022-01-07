<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const res = await fetch(`/api/recipes.json`);
		if (res.ok) return { props: { allRecipes: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script lang="ts">
	import type { IRecipe } from '../../types';
	import RecipeList from '../../components/RecipeList.svelte';

	export let allRecipes: IRecipe[];
</script>

<RecipeList {allRecipes} />
