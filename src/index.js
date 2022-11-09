import './css/styles.css';
import API from './fetchCountries.js'
import debounce from "lodash.debounce";
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const inputCountryName = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

inputCountryName.addEventListener('input', debounce(handleSearchCountry,DEBOUNCE_DELAY));

function handleSearchCountry (e) {
  const searchCountry = e.target.value.trim();

   API.fetchCountries(searchCountry)
     .then((countries) => {
      if(countries.length > 10) {
      Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
      return
      }
   renderUserList(countries)
      })

     .catch((error) => {
      console.log(error)
      countryListEl.innerHTML = "";
      countryInfoEl.innerHTML = "";
      Notiflix.Notify.failure("Oops, there is no country with that name")
       });

};

function renderUserList(countries) {
   let markup;

   if (countries.length === 1) {
    markup = countries
    .map((country) => {
      return `<div class="name-country">
          <img src="${country.flag}" width="25">
          <p><b>${country.name}</b></p>
          </div>
          <p><b>Capital:</b> ${country.capital}</p>
          <p><b>Population:</b> ${country.population}</p>
          <p><b>Languages:</b> ${country.languages.map(e => e.name).join(', ')}</p>
        `;
    })
    .join("");
    countryInfoEl.innerHTML = markup;
    countryListEl.innerHTML = "";
  }  else {
  markup = countries
    .map((country) => {
      return `<li>
          <img src="${country.flag}" width="40">
          <p>${country.name}</p>
        </li>`;
    })
    .join("");
    countryListEl.innerHTML = markup;
    countryInfoEl.innerHTML = "";
  }
}