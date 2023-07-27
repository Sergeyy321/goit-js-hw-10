


const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_FDXL9Y23hAk9oY3QNpK7fx6MF2oxO6QfHghTR5Fv5Wj6k8gIY7SIVGYF15kqkVNP';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds`, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}