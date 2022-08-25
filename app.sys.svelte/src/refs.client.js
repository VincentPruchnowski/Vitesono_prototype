export const refs = { load };

function load() {
  return fetch('/api/refs')
    .then(function (response) {
      return response.json();
    })
    .then(function (refs) {
      console.log('refs', refs[0]);
    });
}
