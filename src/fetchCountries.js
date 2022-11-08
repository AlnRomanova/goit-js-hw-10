const BASE_URL = 'https://restcountries.com/v2'

function fetchCountries(name) {
 return fetch(`${BASE_URL}/name/${name}?fields=name,capital,currencies`).then(response => response.json());
}

export default {fetchCountries};