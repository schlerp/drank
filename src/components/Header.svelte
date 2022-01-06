<script lang="ts">
	import Navbar from './Navbar.svelte';
</script>

<header>
	<div class="logo">
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
		justify-content: space-between;
		background-color: var(--bg-header);
		padding-left: 4rem;
		padding-right: 4rem;
	}
	div.logo {
		position: relative;
	}
	h1 {
		font-family: var(--ff-header-logo);
		font-size: 4rem;
		letter-spacing: 0.3rem;
		color: var(--fg-header-logo);
		position: relative;
		margin-top: 1rem;
	}
	h2 {
		font-family: var(--ff-header-logo-alt);
		position: absolute;
		top: 3rem;
		left: 2rem;
		width: 20rem;
		font-size: 1.5rem;
		color: var(--fg-header-logo-alt);
		letter-spacing: normal;
		position: absolute;
	}
</style>
