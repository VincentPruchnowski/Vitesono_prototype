<script>
  // import { cats } from "../cats.client";
  // import searchBar from "../components/searchBar.svelte";

  // let results;
  // let cats_items;

  // cats.load({ topOnly: true }).then(function ({ data }) {
  //   cats_items = data;
  //   console.log(cats_items);
  // });
</script>

<!-- <div class="flex flex-col">
  <div class="overflow-x-auto ">
    <div class="inline-block min-w-full align-middle ">
      <div class="overflow-hidden ">
        <table
          class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 "
        >
          {#if results}
            {#each results as o}
              <tr
                ><td><img class="w-32" src={o.data.img} alt="" /></td><td
                  class="text-xs">{o.data.title}</td
                ></tr
              >
            {/each}
          {/if} -->
          <!-- <tbody
            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
          >
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-1" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ART 708-A MK 4</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                RCF</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Speakers</td
              >
            </tr>
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-2"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-2" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                SUB 705-AS II</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                RCF</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Speakers</td
              >
            </tr>
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-3"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-3" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ART 710-A MK 4</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                RCF</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Speakers</td
              >
            </tr>
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-4"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-4" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ART 712 A MK 4</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                RCF</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Speakers</td
              >
            </tr>
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-5"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-5" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ART 715-A MK 4</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                RCF</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Speakers</td
              >
            </tr>
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-5"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-5" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ART 725 MK4</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                RCF</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Speakers</td
              >
            </tr>
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-5"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-5" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                SUB 905-AS II</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                RCF</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Speakers</td
              >
            </tr>
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-5"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-5" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AYRA PRO 8</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                RCF</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Speakers</td
              >
            </tr>
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-5"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-5" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AYRA PRO 5</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                RCF</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Speakers</td
              >
            </tr>
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-5"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-5" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AYRA PRO 6</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                RCF</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Speakers</td
              >
            </tr>
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-5"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-5" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                NX 10 SMA</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                RCF</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Speakers</td
              >
            </tr>
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-5"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-5" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                SUB 8003-AS II</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                RCF</td
              >
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Speakers</td
              >
            </tr>
            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700" />
          </tbody> -->
        <!-- </table>
      </div>
    </div>
  </div>
</div> -->
