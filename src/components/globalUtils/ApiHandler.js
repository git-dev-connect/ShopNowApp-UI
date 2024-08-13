import axios from 'axios';
// base url
const BASE_URL = 'http://localhost:8080';

// used for GET,POST,PUT,DELETE
const instance = axios.create({
  baseURL: BASE_URL
});
// used for authentication process
function basicAuth(user) {
    return `Basic ${user.authdata}`;
  }

export const apiService = {
  login,
  test
};

function login(username, password) {
    return instance.post('/authenticate', { username, password }, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  function test(user) {
    return instance.get('/test', {
      headers: { 'Authorization': basicAuth(user) }
    });
  }
  


