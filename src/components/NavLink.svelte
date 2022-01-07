<script lang="ts">
	import { page } from '$app/stores';
	import type { INavPath } from 'src/types';

	export let navPath: INavPath;
	$: isActive = $page.url.pathname === navPath.href;
</script>

<li class:active={isActive}>
	<a href={navPath.href}>{navPath.text}</a>
</li>

<style>
	li {
		list-style-type: none;
		display: inline-block;
		font-family: var(--ff-nav-link);
		font-size: 1.5rem;
		font-weight: bolder;
		background-color: var(--bg-nav-link);
		color: var(--fg-nav-link);
		padding: 0.5rem 1rem 0.5rem 1rem;
		border-radius: 2rem;
	}
	li:hover {
		background-color: var(--bg-nav-link-hover);
	}
	li.active {
		background-color: var(--bg-nav-link-active);
		color: var(--fg-nav-link-active);
	}
	li.active:hover {
		background-color: var(--bg-nav-link-active-hover);
	}
	a {
		color: inherit;
		text-decoration: inherit;
		cursor: inherit;
		background-color: inherit;
	}
</style>
