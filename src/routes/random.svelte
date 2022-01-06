<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch, params }) {
		const { recipeName } = params;
		const res = await fetch(`/api/random.json`);
		if (res.ok) return { props: { recipe: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script lang="ts">
	import RecipePage from '../components/RecipePage.svelte';
	import type { IRecipe } from '../types';

	export let recipe: IRecipe;
</script>

<RecipePage {recipe} />
