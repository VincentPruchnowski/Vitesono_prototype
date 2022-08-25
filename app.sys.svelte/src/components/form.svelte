<script>
  export function saveForm() {
    alert("Product saved" + value);
  }

  let value = "";
</script>

<form class="form" on:submit|preventDefault={saveForm}>
  Reference: <input id="ref" /> <br />
  Brand: <input id="brand" /> <br />
  Description: <input id="text" /><br />

  <div class="flex items-end justify-end">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      on:click={saveForm}
    >
      Save
    </button>
  </div>
</form>

<style>
</style>
