//Используй Rest Countries API, а именно ендпоинт /name, возвращающий массив объектов стран попавших под критерий поиска.import notices from './pnotifyLib'

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchArticleCountry() {
    return fetch(
      `https://restcountries.eu/rest/v2/name/${this.searchQuery}`,
    ).then((r) => {
      if (r.ok) {
        return r.json();
      }
      throw new Error('', notices.errorEmptyInput());
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}