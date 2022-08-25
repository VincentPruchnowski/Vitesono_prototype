<script>
  import Router from "svelte-spa-router";

  import VsFooter from "./layout/vsFooter.svelte";
  import VsHeader from "./layout/vsHeader.svelte";

  import home from "./routes/home.svelte";
  import login from "./routes/login.svelte";
  import pim from "./routes/pim.svelte";
  import error from "./routes/error.svelte";

  import { brands } from "./brands.client";

  // brands.load().then(function (brands) {
  //   console.log(brands);
  // });

  const routes = {
    "/": home,
    "/home": home,
    "/login": login,
    "/pim": pim,
    "*": error,
  };
</script>

<div>
  <VsHeader />

  <Router {routes} />

  <VsFooter />
</div>
