import axios from 'axios';

// Base URL
const BASE_URL = 'http://localhost:8080';

// Create axios instance with base URL
const instance = axios.create({
  baseURL: BASE_URL
});

// Generate Basic Auth header with credentials from localStorage
function basicAuth() {
  // Retrieve the username and password from localStorage
  const username = localStorage.getItem('username') || '';
  const password = localStorage.getItem('password') || '';

  // Generate Basic Auth header
  const credentials = `${username}:${password}`;
  return `Basic ${btoa(credentials)}`;
}

// API Service
export const apiService = {
  login,
  signup,
  test,
  fetchProducts,
};

// Login function
function login(username, password) {
  return instance.post('/authenticate', { username, password }, {
    headers: { 'Content-Type': 'application/json' }
  });
}

// Test function using credentials from localStorage
function test() {
  return instance.get('/get', {
    headers: { 'Authorization': basicAuth() }
  });
}

function signup(signupData) {
  return instance.post('/signup', signupData, {
    headers: { 'Content-Type': 'application/json' }
  });
}

function fetchProducts() {
  return instance.get('api/v1/products/getAllProducts', {
    headers: { 'Authorization': basicAuth() }
  });
}


