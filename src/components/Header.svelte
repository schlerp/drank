<script lang="ts">
	import Navbar from './Navbar.svelte';
</script>

<header>
	<div>
		<h1>Drank</h1>
		<h2>Classy drinks for classy people</h2>
	</div>
	<Navbar />
</header>

<style>
	header {
		width: calc(100% - 8rem);
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
		justify-content: space-between;
		background-color: var(--bg-header);
		padding-left: 4rem;
		padding-right: 4rem;
	}
	div {
		display: inline-block;
		margin: 1rem;
	}
	h1 {
		font-family: var(--ff-header-logo);
		font-size: 4rem;
		letter-spacing: 0.3rem;
		color: var(--fg-header-logo);
		margin-top: 0;
		margin-bottom: 0;
	}
	h2 {
		font-family: var(--ff-header-logo-alt);
		margin-top: -1rem;
		margin-left: 3rem;
		margin-bottom: 0;
		top: 3rem;
		left: 2rem;
		font-size: 1rem;
		color: var(--fg-header-logo-alt);
		letter-spacing: normal;
	}
	@media only screen and (max-width: 720px) {
		header {
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
