<script lang="ts">
	import type { IRecipe } from '../types';
	import { toTitle } from '$lib/utils';

	export let allRecipes: IRecipe[];
	export let paginationSize: number = 10;

	let recipePages: IRecipe[][];
	let recipes: IRecipe[] = allRecipes;
	let currentPage: number = 1;
	let pageIndexes: number[] = [-2, -1, 0, 1, 2];
	let maxPageIndex: number = 1;
	let filterText: string = '';

	$: {
		recipes = allRecipes
			.filter((r) => r.name.toLowerCase().includes(filterText.toLowerCase()))
			.sort(function (a, b) {
				return a.name.localeCompare(b.name);
			});
		maxPageIndex = Math.ceil(recipes.length / paginationSize);
		recipePages = Array.from({ length: maxPageIndex }, (v, k) => k).map((pageIndex) =>
			recipes.slice(paginationSize * pageIndex, paginationSize * (pageIndex + 1))
		);
		currentPage = 1;
	}

	function decrementPage() {
		currentPage = Math.max(1, currentPage - 1);
	}
	function incrementPage() {
		currentPage = Math.min(maxPageIndex, currentPage + 1);
	}
	function setPage(page: number) {
		currentPage = page;
	}
</script>

<div class="wrapper" />
<div class="card">
	<input class="search" type="text" placeholder="filter" bind:value={filterText} />
</div>

<ul>
	{#if recipePages[currentPage - 1]}
		{#each recipePages[currentPage - 1] as recipe}
			<a href={`/recipes/${recipe.name}`}>
				<div class="card recipe">
					<img alt={recipe.imageDescription} src={recipe.imageUrl} />
					<h3>{toTitle(recipe.name)}</h3>
					<span>{recipe.source}</span>
				</div>
			</a>
		{/each}
	{/if}
	<div class="paginationControls">
		<div>
			<button
				on:click={() => {
					setPage(1);
				}}>{'|<'}</button
			>
			<button
				on:click={() => {
					decrementPage();
				}}>{'<'}</button
			>
		</div>
		<div>
			{#each pageIndexes as pageIndex}
				{#if currentPage + pageIndex > 0 && currentPage + pageIndex <= maxPageIndex}
					<button
						class:isCurrentPage={currentPage === currentPage + pageIndex}
						on:click={() => {
							setPage(currentPage + pageIndex);
						}}
					>
						{currentPage + pageIndex}
					</button>
				{:else}
					<button
						class="hidden"
						on:click={() => {
							setPage(currentPage + pageIndex);
						}}
					>
						{currentPage + pageIndex}
					</button>
				{/if}
			{/each}
		</div>
		<div>
			<button
				on:click={() => {
					incrementPage();
				}}>{'>'}</button
			>
			<button
				on:click={() => {
					setPage(maxPageIndex);
				}}>{'>|'}</button
			>
		</div>
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
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
		border-radius: 1rem;
		color: var(--fg-recipes-list);
		background-color: var(--bg-recipes-list);
		padding: 1rem;
		box-shadow: 0.1rem 0.1rem 0.2rem #ccc;
	}
	div {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	div.paginationControls {
		justify-content: space-between;
		align-items: center;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	img {
		height: 6rem;
		border-radius: 1rem;
	}
	span {
		color: #ccc;
	}
	button {
		padding: 1rem;
		border-radius: 1rem;
		outline: none;
		border: none;
		background-color: var(--pal-primary-soft);
	}
	button.hidden {
		/* visibility: hidden; */
		display: none;
	}
	button.isCurrentPage {
		background-color: var(--pal-primary);
	}
	@media only screen and (max-width: 600px) {
		.recipe {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			gap: 0.5rem;
		}
		div.paginationControls {
			justify-content: space-between;
			align-items: center;
			flex-direction: column;
		}
	}
</style>
