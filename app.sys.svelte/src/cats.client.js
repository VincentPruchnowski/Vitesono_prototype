import axios from 'axios';

export const cats = { load };

function load({ topOnly } = { topOnly: false }) {
  return axios.post('/api/cats', { topOnly });
}

// function load() {
//   return fetch('/api/cats')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (cats) {
//       console.log('cats', cats.length);
//     });
// }
