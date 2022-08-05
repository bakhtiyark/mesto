export class Api {
  constructor({ baseUrl, token }) {
    this._url = baseUrl
    this._token = token
  }

  // Проверка на ошибку
  _errorCheck = res => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(new Error("Ошибка " + res.status))
  }

  //Получение всех данных
  getAllData(){
    return Promise.all([this.getInitialCards(), this.getUserInfo()])
  }

  //Получение карт с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`,
      {
        headers: this._token
      })
      .then(res => this._errorCheck(res));
  }

  //Добавление карт
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

  //Получение данных о пользователе
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._token,
    })
      .then(res => this._errorCheck(res));
  }
  
  //Обновление пользователя
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
  //Установка аватара
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

  //Лайканье
  addLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`,
      {
        method: 'PUT',
        headers: this._token
      }).then(res => this._errorCheck(res))
  }

  //Снятие ранее поставленного лайка
  removeLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`,
      {
        method: 'DELETE',
        headers: this._token
      }).then(res => this._errorCheck(res))
  }

  //Удаление карточки
  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._token
    }).then(this._errorCheck).catch(err => console.log(err))
  }
}




