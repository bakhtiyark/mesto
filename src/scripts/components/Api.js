export class Api {
  constructor({options}) {
    this._url = options.baseUrl
    this._token = options.headers
  }

  getInitialCards() {
    fetch(`${this._url}/cards`,this._token).then(res => res.json())
    .then((result) => {
      console.log(result);
    }); 
  }

  // другие методы работы с API
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: "c4df37c2-ee37-468d-b548-ff18699e058a",
    'Content-Type': 'application/json'
  }
});

console.dir(api.getInitialCards())


