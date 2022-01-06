<script lang="ts">
	import { page } from '$app/stores';
	import NavLink from './NavLink.svelte';

	let currentPath: string;
	page.subscribe((x) => {
		currentPath = x.url.pathname;
		console.log(currentPath);
	});

	const navPaths = [
		{ href: '/', text: 'Home' },
		{ href: '/recipes', text: 'Recipes' },
		{ href: '/random', text: 'Random' }
	];
</script>

<nav>
	<ul>
		{#each navPaths as navPath}
			<NavLink {navPath} />
		{/each}
	</ul>
</nav>

<style>
	ul {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
</style>
