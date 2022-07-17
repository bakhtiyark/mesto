const onError = res => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(new Error("Ошибка"))
}

export class Api {
  constructor({ baseUrl, token }) {
    this._url = baseUrl
    this._token = token
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._token
    }).then(res => onError(res));
  }
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._token,
    })
      .then(res => onError(res));
  }
  setLike(card, likeElement) {
    return fetch(`${this._url}/like/${card}`, {
      method: likeElement ? 'PUT' : 'DELETE',
      headers: this._token,
    }).this(res => onError(res))

  }
  addCard(data) {
    return fetch(`${this._url}/`, {
      method: "POST",
      headers: this._token,
      body: JSON.stringify(data)
    })
  }
}




