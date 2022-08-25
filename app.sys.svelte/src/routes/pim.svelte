<script>
  import Lock from "../components/lock.svelte";
  import Pagination from "../components/pagination.svelte";
  import Save from "../components/save.svelte";
  import Delete from "../components/delete.svelte";
  import Edit from "../components/edit.svelte";
  import Translate from "../components/translation.svelte";
  import SvgIcon from "../components/icon.svelte";
  import Modal, { getModal } from "../components/modal.svelte";
  import Form from "../components/form.svelte";
  import { cats } from "../cats.client";
  import axios from "axios";

  $: axios
    .post("/api/refs", { searchFilter, limit: 10 })
    // POST method request objet {searchFilter, limit} = second argument
    // Axios renvoi un objet de reponse
    .then(function ({ data }) {
      // .then appel une autre fonction et renvoi une réponse
      // Le callback then() recoit un objet de réponse avec comme propriété data
      // La propriété data correspond à la donnée retournée par le serveur
      results = data.filter((o) => o.id !== 0);
    });
  // Axios attend un json et analyse pour moi un objet en javascript
  // Retour de la propriété data qui a pour objet filter
  // opérateur d'inégalité stricte (!==) pour vérifier l'égalité et renvoi un booléen

  // let cats_items;
  // cats.load({ topOnly: true }).then(function ({ data }) {
  //   cats_items = data;
  //   console.log(cats_items);
  // });

  let results;
  let searchFilter;
  let selectedCategory;
  let selectedType;

  // Pagination
  const examples = "           ";
  let values;
</script>

<main>
  <section>
    <div
      class="flex items-start text-center p-6 ml-4 mr-6 py-4 mt-4 rounded-xl relative -z-1 "
    >
      <div class="lg:w-2/3 text-gray-200 pl-16">
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-4">
            <svg
              class="text-gray-800 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block relative bg-white lg:w-1/2 border-2 border-gray-500 border-transparent opacity-50 rounded-md py-2 pl-9 mx-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
            bind:value={searchFilter}
          />
        </label>
      </div>

      <div class="lg:w-1/3 flex space-x-2 text-gray-700 justify-start">
        <div
          class="border-2 border-gray-500 border-transparent opacity-50 pt-2 bg-white rounded-md h-10 px-2 pr-2 text-sm focus:outline-none"
        >
          <select name="category" id="category" bind:value={selectedCategory}>
            <option disabled selected value="">Select a category</option>
            <option value="all">All categories</option>
            <option value="1">Sonorisation</option>
            <option value="2">Homestudio</option>
            <option value="3">Deejay</option>
            <option value="4">Musical instrument</option>
            <option value="5">Light</option>
            <option value="6">Video</option>
            <option value="7">Scene</option>
            <option value="8">Power system</option>
          </select>
        </div>

        <div
          class="border-2 border-gray-500 border-transparent opacity-50 pt-2 bg-white rounded-md h-10 px-2 pr-2  text-sm focus:outline-none"
        >
          <select name="type" id="type" bind:value={selectedType}>
            <option disabled selected value="">Select a type</option>
            <option value="all">All types</option>
            <option value="1">Speakers</option>
            <option value="2">Mixing consoles</option>
            <option value="3">Amplifiers</option>
            <option value="4">Microphones</option>
            <option value="5">Effects and peripherals</option>
            <option value="6">Sounding accessories</option>
          </select>
        </div>
      </div>
    </div>
  </section>

  <article>
    <div class="flex mb-2 ml-2 mr-2 ">
      <div class="md:w-1/2 bg-white h-auto mx-2 mt-6 shadow-lg ">
        <div class="flex mb-4 ">
          <div
            class="md:w-1/2 bg-gray-300 text-gray-600 h-12 inline-flex items-center justify-start pl-4"
          >
            <!-- <Breadcrumb /> -->
            <div>
              <a class="font-bold hover:text-gray-400" href="/#/pim">Pim</a>
              <a class="font-medium text-sm hover:text-gray-400" href="/#/home"
                >Subpage</a
              >
            </div>
          </div>
          <div
            class="md:w-1/2 bg-gray-200 h-12 flex items-center justify-end pr-4 "
          >
            <button
              class=" hover:text-gray-400 fill-current py-1 px-5 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <Edit />
          </div>
          <Save />
        </div>

        <!-- Bloc images -->
        <div class="flex mb-8 ">
          <div class="md:w-1/2 md:flex">
            <div class=" bg-white md:shrink-0">
              <div class="font-bold items-center justify-center ml-28 mt-4">
                <span class="text-sm sm:text-left">ART 725 MK4</span>
                <img
                  class="md:shrink-0 md:48 md:h-full ml-2 mt-8 "
                  src="assets/img/maker/rcf_logo.png"
                  height="66"
                  width="66"
                  alt="maker_logo"
                />
              </div>
            </div>
          </div>

          <div class="md:w-1/2">
            <div
              class=" bg-white inline-flex items-center justify-center ml-12"
            >
              <div class=" h-24 text-right pt-10">
                <button class="hover:text-gray-400 text-gray-600 py-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div class="md:h-full md:w-38 border-1 border-solid-black " />

              <div class="h-24 pt-10">
                <button class="hover:text-gray-400 text-gray-600 py-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex ">
          <Translate />
          <Lock />
        </div>
      </div>
      <div
        class="md:w-1/2 mt-6 bg-white mx-1 shadow-lg font-semibold md:shrink-0 text-center sm:text-left"
      >
        <div class="flex">
          <div
            class="md:w-1/2 bg-gray-300 h-12 inline-flex items-center justify-start p-1"
          >
            <Delete />
            <button
              class="hover:text-gray-400 fill-current py-1 px-2 items-center justify-center"
              on:click={() => getModal().open()}
            >
              <SvgIcon icon="plus" style="height: 1.5rem; width: 1.5rem" />
            </button>

            <Modal>
              <h1 class="font-bold">Add product</h1>
              <br />
              <Form />
            </Modal>
          </div>
          <div
            class="md:w-1/2 hover:text-gray-400 bg-gray-200 h-12 inline-flex items-center font-bold justify-end pr-4"
          >
            {#if values}
              {#each values as value}
                <p>
                  {value}
                </p>
              {/each}
            {/if}
            <Pagination
              rows={examples}
              perPage={10}
              bind:trimmedRows={values}
            />
          </div>
        </div>

        <div class="flex flex-col">
          <div class="overflow-x-auto ">
            <div class="inline-block min-w-full align-middle ">
              <div class="overflow-hidden ">
                <table
                  class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 "
                >
                  {#if results}
                    {#each results as o}
                      <tr
                        ><td><img class="w-32" src={o.data.img} alt="" /></td
                        ><td class="text-xs">{o.data.title}</td></tr
                      >
                    {/each}
                  {/if}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</main>
