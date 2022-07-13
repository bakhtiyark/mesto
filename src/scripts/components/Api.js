export class Api {
  constructor({ baseUrl, token }) {
    this._url = baseUrl
    this._token = token
  }

  getInitialCards() {
    fetch(`${this._url}/cards`,{
      headers: this._token}).then(res => res.json())
      .then((result) => {
        console.log(result);
      });
  }
}




