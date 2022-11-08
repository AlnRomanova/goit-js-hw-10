import './css/styles.css';
import API from './fetchCountries.js'

const DEBOUNCE_DELAY = 300;


const inputCountryName = document.querySelector('#search-box');
inputCountryName.addEventListener('input', handleSearchCountry);


function  handleSearchCountry (e) {

const searchQuery = e.target.value;


 API.fetchCountries(searchQuery)
.then((countries) => console.log(countries))
.catch((error) => console.log(error));

}

// function renderCountryName (name) {
// fetch('https://restcountries.com/v2/all?fields=name.official,capital,population,flags.svg,languages')


// };
