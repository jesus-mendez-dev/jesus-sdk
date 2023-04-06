# SDK Design

This SDK provides functions for interacting with the The Lord of the Rings API. It is built with Node.js and uses the Axios library for making HTTP requests.

## Dependencies

This SDK depends on the following npm packages:

- axios

## Functions

### `getAllMovieData(token)`

This function gets all movie data from the One API.

- `token`: The API token to use for authentication.

Returns a Promise that resolves to an array of objects representing the movie data, or rejects with an error message.

### `getOneMovieData(id, token)`

This function gets data for one movie from the One API.

- `id`: The ID of the movie to retrieve.
- `token`: The API token to use for authentication.

Returns a Promise that resolves to an object representing the movie data, or rejects with an error message.

### `getOneMovieQuotes(id, token)`

This function gets quotes for one movie from the One API.

- `id`: The ID of the movie to retrieve quotes for.
- `token`: The API token to use for authentication.

Returns a Promise that resolves to an array of objects representing the quotes data, or rejects with an error message.

## Usage

To use this SDK, follow these steps:

1. Import the module:

```
const openAPI = require('open-api-jesus');
```

2. Call the functions to retrieve data from the API:

```
const token = 'your-api-token';

// Get all movie data
openAPI
  .getAllMovieData(token)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Get data for one movie
const id = "movie-id";
openAPI
  .getOneMovieData(id, token)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Get quotes for one movie
openAPI
  .getOneMovieQuotes(id, token)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```
