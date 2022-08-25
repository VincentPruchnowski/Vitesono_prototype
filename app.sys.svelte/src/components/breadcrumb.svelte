<!-- <script>
  import { Route } from "svelte-spa-router";
  import Layout from "../components/layout.svelte";
  export let breadcrumbs = [];
</script>

<div>
  <Route breadcrumb="Home">
    <Route path="/pim"><Layout>Pim</Layout></Route>
    <Route path="/home" breadcrumb="Subpage"><Layout>Subpage</Layout></Route>
  </Route>
  {#each breadcrumbs as bc}
    <a href="/#/{bc.path}">{bc.name}</a>
  {/each}
</div>

<style>
  div {
    font-size: 12px;
  }
  div a {
    color: grey;
  }
  div a:not(:last-child):after {
    content: "/";
    margin: 0 10px;
  }
</style> -->
