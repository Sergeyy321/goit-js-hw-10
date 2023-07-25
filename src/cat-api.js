const url = 'https://api.thecatapi.com/v1';
const api_key = "live_FDXL9Y23hAk9oY3QNpK7fx6MF2oxO6QfHghTR5Fv5Wj6k8gIY7SIVGYF15kqkVNP";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};