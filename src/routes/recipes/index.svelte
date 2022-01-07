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
	import RecipePage from '../../components/RecipePage.svelte';
	import type { IRecipe } from '../../types';
	import { toTitle } from '$lib/utils';

	export let allRecipes: IRecipe[];

	let paginationSize: number = 1;

	let filterText: string = '';

	$: recipes = allRecipes.filter((r) => {
		return r.name.includes(filterText);
	});
</script>

<div class="wrapper" />
<input class="search" type="text" placeholder="filter" bind:value={filterText} />

<ul>
	{#each recipes as recipe, index}
		{#if index < paginationSize}
			<a href={`/recipes/${recipe.name}`}>
				<div class="card">
					<img alt="" src={recipe.imageUrl} />
					<span>{toTitle(recipe.name)}</span>
					<span>{recipe.source}</span>
				</div>
			</a>
		{/if}
	{/each}
	<div class="paginationControls">
		<button>{'<'}</button>
		<div>
			<button>1</button>
			<button>2</button>
			<button>3</button>
		</div>
		<button>{'>'}</button>
	</div>
</ul>

<style>
	div.wrapper {
		padding-top: 2rem;
	}
	input.search {
		width: calc(100% - 2rem);
		padding: 1rem;
		border-radius: 1rem;
		border: none;
		outline: 0;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style: none;
		padding: 0;
	}
	div.card {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
		border-radius: 1rem;
		color: var(--fg-recipes-list);
		background-color: var(--bg-recipes-list);
		padding: 1rem;
		/* box-shadow: 0.2rem 0.2rem 0.2rem #ccc; */
	}
	div.paginationControls {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	img {
		height: 4rem;
		border-radius: 1rem;
	}
	button {
		padding: 1rem;
		border-radius: 1rem;
		outline: none;
		border: none;
		background-color: var(--pal-primary-soft);
	}
</style>
