<script lang="ts">
	import type { IRecipe } from '../types';
	import { toTitle } from '$lib/utils';
	export let recipe: IRecipe;
</script>

<h3>{toTitle(recipe.name)}</h3>

<div class="flex-wrapper">
	<div class="description-wrapper">
		{#each recipe.description as descriptionParagraph}
			<p>{descriptionParagraph}</p>
		{/each}
	</div>

	<div class="ingredients-wrapper">
		<h4>Ingredients</h4>
		<ul>
			{#each recipe.ingredients as ingredient}
				<li>{ingredient}</li>
			{/each}
		</ul>
	</div>

	<figure class="image-wrapper">
		<img src={recipe.imageUrl} alt="a {recipe.name} cocktail" />
		<figcaption aria-hidden="false">{recipe.imageDescription}</figcaption>
	</figure>

	<div class="steps-wrapper">
		<h4>Steps</h4>
		<ol>
			{#each recipe.steps as step}
				<li>{step}</li>
			{/each}
		</ol>
	</div>
</div>
<div class="bottom-spacer" />

<style>
	.bottom-spacer {
		height: 100px;
	}
	.flex-wrapper {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		gap: 4rem;
	}
	img {
		width: min(100%);
		border-radius: 1rem;
	}
	figure {
		width: min(400px, 80%);
		margin: 0;
	}
	figcaption {
		font-size: 0.8rem;
	}
	.description-wrapper p:first-of-type {
		margin-top: 0;
	}
	h3 {
		font-size: 4rem;
		font-family: var(--ff-recipe-heading);
		margin-block: 2rem;
	}
	h4 {
		margin: 0;
		font-size: 2rem;
		font-family: var(--ff-recipe-heading);
	}
	li {
		font-family: var(--ff-recipe-content);
		font-size: 1.2rem;
	}
	p {
		font-family: var(--ff-recipe-content);
		text-align: justify;
		font-size: 1.2rem;
	}
</style>
