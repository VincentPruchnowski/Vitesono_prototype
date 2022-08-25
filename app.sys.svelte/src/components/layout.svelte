<!-- <script>
	import {router,active} from "svelte-spa-router";
	import Breadcrumbs from './Breadcrumbs.svelte';
	const meta = router.meta();
</script>

<div>
  <a href="/#/pim" use:active exact>Pim</a>
	<a href="/#/home" use:active>Subpage</a>
</div>

<Breadcrumbs breadcrumbs={$meta.breadcrumbs}/>

<main>
	<slot/>
</main>

<style>
	main{padding:20px;}
	div :global(.active){font-weight: bold}
</style> -->