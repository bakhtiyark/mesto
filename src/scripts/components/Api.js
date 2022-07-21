export class Api {
  constructor({ baseUrl, token }) {
    this._url = baseUrl
    this._token = token
  }
  _errorCheck = res => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(new Error("Ошибка на " + res.status))
  }
  getInitialCards() {
    return fetch(`${this._url}/cards`,
      {
        headers: this._token
      })
      .then(res => this._errorCheck(res));
  }
  createCard(card) {
    return fetch(`${this._url}/cards`,
      {
        method: 'POST',
        headers: this._token,
        body: JSON.stringify({
          name: card.name,
          link: card.link
        })
      }).then(res => this._errorCheck(res))
  }
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._token,
    })
      .then(res => this._errorCheck(res));
  }

  setUserInfo(name, about) {
    return fetch(`${this._url}/users/me`,
      {
        method: 'PATCH',
        headers: this._token,
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(res => this._errorCheck(res))
  }
  setUserAvatar(link) {
    return fetch(`${this._url}/users/me/avatar`,
      {
        method: 'PATCH',
        headers: this._token,
        body: JSON.stringify({
          avatar: link
        })
      }).then(res => this._errorCheck(res))
  }
  addLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`,
      {
        method: 'PUT',
        headers: this._token
      }).then(res => this._errorCheck(res))
  }
  removeLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`,
      {
        method: 'DELETE',
        headers: this._token
      }).then(res => this._errorCheck(res))
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._token
    }).then(this._errorCheck)
  }
}




