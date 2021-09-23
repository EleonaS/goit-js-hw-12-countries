import countryTpl from '../templates/country.hbs';
import countryListTpl from '../templates/countriesList.hbs';
import notices from './pnotifyLib';
import NewApiService from '../js/fetchCountries';

const newApiService = new NewApiService();

var debounce = require('lodash.debounce');

//refs
const refs = {
  container: document.querySelector('.countries'),
  input: document.querySelector('.search-country'),
  countriesList: document.querySelector('.country-list'),
  countryDiv: document.querySelector('.country-description'),
};

//Добаление слушателя на событие//
refs.input.addEventListener('input', debounce(onSearchCountry, 700));
refs.countriesList.addEventListener('click', addCountryOptionToInput);

function onSearchCountry(e) {
  newApiService.query = e.target.value;

  newApiService.fetchArticleCountry().then((data) => {
    if (data.length === 1) {
      makeCountry(data);
    }
    if (data.length > 1) {
      makeCountriesList(data);
    }
    if (data.length > 10) {
      notices.alertTooManyMatches();
    }
  });
  resetPage();
}
//  метод trim() видаляє всі пустоти на початку і в кінці
function addCountryOptionToInput(e) {
  if (e.target.hasAttribute('data-action')) {
    const newQuery = e.target.textContent.trim();
    newApiService.query = newQuery;
    refs.input.value = newQuery;
    newApiService.fetchArticleCountry().then(makeCountry);

    resetPage();
  }
}

//render//
function makeCountriesList(data) {
  refs.countriesList.insertAdjacentHTML('beforeend', countryListTpl(data));
}

function makeCountry(data) {
  refs.countryDiv.insertAdjacentHTML('beforeend', countryTpl(...data));
}

//Очистка//

function resetPage() {
  refs.countriesList.innerHTML = '';
  refs.countryDiv.innerHTML = '';
}