import axios from 'axios';

export const creds = { login };

function login({ user, password }) {
  const data = { user, password };
  const p = axios
    .post('/api/auth', data)
    .then(function () {
      return [null, data];
    })
    // .catch est pour attraper l'erreur
    .catch(function () {
      return ['login failure', data];
    });

  return p;
}
