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
		--pal-primary: #b3fc8a;
		--pal-primary-soft: #ceffad;
		--pal-background: #fae1dd;
		--pal-background-soft: #fafafa;
		--pal-secondary-soft: #ffcdb2;
		--pal-secondary: #bc4b51;
		--pal-text: #444;
		--pal-text-light: #efefef;
		--ff-heading: 'Waterfall', serif;
		--ff-content: 'Raleway', sans-serif;

		/* header styling */
		--bg-header: var(--pal-background);
		--fg-header-logo: var(--pal-secondary);
		--fg-header-logo-alt: var(--pal-text);
		--ff-header-logo: var(--ff-heading);
		--ff-header-logo-alt: var(--ff-heading);

		/* navlink styling */
		--ff-nav-link: var(--ff-heading);
		--bg-nav-link: var(--pal-secondary);
		--fg-nav-link: var(--pal-text-light);
		--bg-nav-link-active: var(--pal-primary);
		--fg-nav-link-active: var(--pal-text);

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
