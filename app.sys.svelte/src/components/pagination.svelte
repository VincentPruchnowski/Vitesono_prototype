<script>
  import Icon from "./iconPagination.svelte";

  export let rows;
  export let perPage;
  export let trimmedRows;

  $: totalRows = rows.length;
  $: currentPage = 0;
  $: totalPages = Math.ceil(totalRows / perPage);
  $: start = currentPage * perPage;
  $: end = currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1;

  $: trimmedRows = rows.slice(start, end + 1);

  $: totalRows, (currentPage = 0);
  $: currentPage, start, end;
</script>

{#if totalRows && totalRows > perPage}
  <div class="pagination flex md:shrink-0 m-0 text-center sm:text-left">
    <button class="hover:text-gray-400 text-gray-600 "
      on:click={() => (currentPage -= 1)}
      disabled={currentPage === 0 ? true : false}
      aria-label="left arrow icon"
      aria-describedby="prev"
    >
      <Icon name="arrow" direction="s" />
    </button>
    <span id="prev" class="sr-only">Load previous {perPage} rows</span>
    <p class="m-4 text-gray-600">{start + 1} - {end + 1} of {totalRows}</p>
    <button class="hover:text-gray-400 text-gray-600"
      on:click={() => (currentPage += 1)}
      disabled={currentPage === totalPages - 1 ? true : false}
      aria-label="right arrow icon"
      aria-describedby="next"
    >
      <Icon name="arrow" direction="n" />
    </button>
    <span id="next" class="sr-only">Load next {perPage} rows</span>
  </div>
{/if}

<style>
</style>
