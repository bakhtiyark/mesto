export class Api {
  constructor({ baseUrl, token }) {
    this._url = baseUrl
    this._token = token
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`,{
      headers: this._token}).then(res => res.json());
  }
  getUserInfo(){
    return fetch(`${this._url}/users/me`,{
      headers: this._token}).then(res => res.json())
      .then((result) => {
        console.log(result);
      });
  }
  setLike(card, likeElement){
    return fetch(`${this._url}/like/${card}`, {
      method: likeElement ? 'PUT' : 'DELETE',
      headers: this._token,
    })
      .then(this._getJson);

  }
  addCard(data){
    return fetch(`${this._url}/`, {
      method: "POST",
      headers: this._token,
      body: JSON.stringify(data)
    })
  }
}




