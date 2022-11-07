import './css/styles.css';
import API from './fetchCountries.js'

const DEBOUNCE_DELAY = 300;

API.fetchCountries()


// fetch('https://restcountries.com/v2/name/{name}')
// .then(response => {
//  console.log(response.json());
// })
// .then(country => {
//   console.log(country)
// })