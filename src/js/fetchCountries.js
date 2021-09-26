//Используй Rest Countries API, а именно ендпоинт /name, возвращающий массив объектов стран попавших под критерий поиска

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
  }
// не работает!!!!   https://restcountries.eu/v2 //// вчера еще работал)))
// работает на restcountries.com   с трудом и флаги не выводит не иконками, не изображениями - только место резервирует под них
  fetchArticleCountry() {
    return fetch(`https://restcountries.com/v2/name/${this.searchQuery}`,).then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      else {
        throw new Error (response.statusText)
      }
    });
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}