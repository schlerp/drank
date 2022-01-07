<script>
	import Header from '../components/Header.svelte';
</script>

<div class="svelte">
	<Header />

	<div class="content-wrapper">
		<div class="content">
			<slot />
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway&family=Waterfall&display=swap');
	:root {
		/* --pal-primary-soft: #ffcdb2;
		--pal-primary: #bc4b51;
		--pal-secondary: #b3fc8a;
		--pal-secondary-soft: #ceffad;
		--pal-background: #fae1dd;
		--pal-background-soft: #fafafa; */

		--pal-primary: #db5a42;
		--pal-primary-soft: #e3a587;
		--pal-secondary: #e8ae68;
		--pal-secondary-soft: #ffd275;
		--pal-background: #f8e1dd;
		--pal-background-soft: #fafafa;

		--pal-text: #444;
		--pal-text-light: #efefef;
		--ff-heading: 'Waterfall', serif;
		--ff-content: 'Raleway', sans-serif;

		/* header styling */
		--bg-header: var(--pal-background);
		--fg-header-logo: var(--pal-primary);
		--fg-header-logo-alt: var(--pal-text);
		--ff-header-logo: var(--ff-heading);
		--ff-header-logo-alt: var(--ff-heading);

		/* navlink styling */
		--ff-nav-link: var(--ff-heading);
		--bg-nav-link: var(--pal-secondary);
		--fg-nav-link: var(--pal-text);
		--bg-nav-link-active: var(--pal-primary-soft);
		--fg-nav-link-active: var(--pal-text);
		--bg-nav-link-hover: var(--pal-secondary-soft);
		--bg-nav-link-active-hover: var(--pal-primary);

		/* recipes list styling */
		--fg-recipes-list: var(--pal-text);
		--bg-recipes-list: #fff;

		/* recipe styling */
		--ff-recipe-heading: var(--ff-heading);
		--ff-recipe-content: var(--ff-content);
	}
	:global(html, body) {
		margin: 0;
		height: 100%;
		width: 100%;
		background-color: var(--pal-background-soft);
		color: var(--pal-text);
		font-family: var(--ff-content);
	}
	.content-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.content {
		width: min(80%, 800px);
	}
</style>
