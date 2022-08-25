<script>
  // Translation
  import { t, locale, locales } from "../i18n";

  // Create a locale specific timestamp
  $: time = new Date().toLocaleDateString($locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Button
  // let starred = false;

  // function Translate() {
  //   starred = !starred;
  // }
</script>

<!-- <div class="bg-gray-200">
  <button
    on:click={Translate}
    pressed={starred}
    class=" hover:text-gray-400 text-gray-600 bg-gray-300 py-1 px-2 h-12 flex items-center justify-center"
  > -->
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
      />
    </svg> -->
  <!-- </button>
</div> -->

<div class="bg-gray-200">
  <select
    class=" hover:text-gray-400 text-gray-600 bg-gray-300 font-bold py-1 px-2 h-12 flex items-center justify-center"
    bind:value={$locale}
  >
    {#each locales as l}
      <option value={l}>{l}</option>
    {/each}
  </select>
</div>

<div class="container relative pt-14 pb-14 bg-gray-200 ">
  <h1 class="font-bold">
    {$t("description.title", { name: "ART 725 MK4" })}
  </h1>
  <br />
  <p>{@html $t("description.text", { name: "ART 725 MK4" })}</p>
  <br />
  <p>{@html $t("description.time", { time })}</p>
</div>
