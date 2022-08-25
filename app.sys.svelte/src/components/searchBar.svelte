<script>
  // import axios from "axios";

  // $: axios
  //   .post("/api/refs", { searchFilter, limit: 10 })
  //   .then(function ({ data }) {
  //     results = data.filter((o) => o.id !== 0);
  //   });

  // let searchFilter;
  // let selectedCategory;
  // let selectedType;
</script>

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
          
        />
      </label>
    </div>

    <div class="lg:w-1/3 flex space-x-2 text-gray-700 justify-start">
      <div
        class="border-2 border-gray-500 border-transparent opacity-50 pt-2 bg-white rounded-md h-10 px-2 pr-2 text-sm focus:outline-none"
      >
        <select name="category" id="category" >
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
        <select name="type" id="type" >
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
