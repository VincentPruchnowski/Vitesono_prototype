<script>
  import { push } from "svelte-spa-router";

  import { creds } from "../creds";

  let user = "";
  let password = "";

  function handleSubmit() {
    creds.login({ user, password }).then(function onLogin([err]) {
      // Je récupère ma premier promesse creds.js
      // Utilisation de la méthode then() pour lui passer une nouvelle fonction chaine de promesse
      // On peut faire une chaine de promesse à l'infini
      // retourne success si la promesse est resolue
      if (err === null) {
        console.log("success");
        push("/pim");
      } else {
        console.log("display handler / errors");
      }
    });
  }
</script>

<div
  class="container p-1 py-5 max-w-4xl bg-white rounded-xl shadow-md overflow-hidden mx-auto m-12"
>
  <div class="text-center mb-3">
    <h6 class="text-black text-2xl font-bold">Sign in</h6>
  </div>
  <div class="flex content-center items-center justify-center h-full">
    <div class="w-full md:w-4/12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg bg-white border-2"
      >
        <div class="rounded-t mb-0 px-6 py-6" />
        <div class="flex-auto px-4 md:px-10 py-10 pt-0">
          <form on:submit|preventDefault={handleSubmit}>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                for="user">User</label
              >
              <input
                type="text"
                id="user"
                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="user"
                required
                size="6"
                bind:value={user}
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                for="password">Password</label
              >
              <input
                type="password"
                id="password"
                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Password"
                bind:value={password}
              />

              <div class="text-center mt-6">
                <button
                  class="bg-gray-600 hover:text-gray-400 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
