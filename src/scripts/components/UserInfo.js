export default class UserInfo {
  constructor(data) {
    const {name, about, avatar} = data
    this._user = document.querySelector(name);
    this._info = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
    this.getUserInfo = this.getUserInfo.bind(this)
    this.setUserInfo = this.setUserInfo.bind(this)
  }

  getUserInfo() {
    return {
      name: this._user.textContent,
      about: this._info.textContent,
      avatar: this._avatar.src
    }
  }

  setUserInfo({ name, about}) {
    this._user.textContent = name;
    this._info.textContent = about;
  }

  getUserAvatar(){
    return {
      avatar: this._avatar.src
    }
  }
  setUserAvatar(avatar){
   this._avatar.src = avatar
  }
}
