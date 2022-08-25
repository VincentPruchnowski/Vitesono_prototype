export const brands = { load };

function load() {
  return fetch('/api/brands')
    .then(function (response) {
      return response.json();
    })
    .then(function (brands) {
      console.log('brands', brands.length);
    });
}
