// Import the axios library for making HTTP requests
const axios = require("axios");

// Function for creating an Axios instance with default headers
const createApiClient = (token) => {
  // Create a new Axios instance with a base URL and default headers
  return axios.create({
    baseURL: "https://the-one-api.dev/v2/movie/",
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
};

// Function for checking that all required parameters are present
function checkError(data) {
  // Create a new promise that resolves if all parameters are present, and rejects with an error otherwise
  return new Promise((resolve, reject) => {
    // Check each key in the data object
    Object.keys(data).forEach((key) => {
      // If a key's value is falsy, reject the promise with an error message
      if (!data[key]) {
        reject(new Error(`${key} parameter is missing`));
      }
    });
    // If all keys have values, resolve the promise with a success message
    resolve("All parameters present");
  });
}

// Function for getting all movie data from the API
exports.getAllMovieData = async function (token) {
  // Check that the token parameter is present
  await checkError({ token });

  try {
    // Create an API client with the token and make a request to the API
    const apiClient = createApiClient(token);
    const response = await apiClient.get("");

    // Return the response data
    return response.data;
  } catch (error) {
    // If an error occurs, return the error response data
    return error.response.data;
  }
};

// Function for getting data for one movie from the API
exports.getOneMovieData = async function (id, token) {
  // Check that the id and token parameters are present
  await checkError({ id, token });

  try {
    // Create an API client with the token and make a request to the API for a specific movie
    const apiClient = createApiClient(token);
    const response = await apiClient.get(id);

    // Return the response data
    return response.data;
  } catch (error) {
    // If an error occurs, return the error message from the response data
    return error.response.data.message;
  }
};

// Function for getting quotes for one movie from the API
exports.getOneMovieQuotes = async function (id, token) {
  // Check that the id and token parameters are present
  await checkError({ id, token });

  try {
    // Create an API client with the token and make a request to the API for quotes for a specific movie
    const apiClient = createApiClient(token);
    const response = await apiClient.get(`${id}/quote`);

    // Return the response data
    return response.data;
  } catch (error) {
    // If an error occurs, return the error message from the response data
    return error.response.data.message;
  }
};
