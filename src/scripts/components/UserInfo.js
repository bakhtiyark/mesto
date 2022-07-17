export default class UserInfo {
  constructor({ name: user, about: info, avatar: avatarSelector }) {
    this._user = document.querySelector(user);
    this._info = document.querySelector(info);
    this._avatar = document.querySelector(avatarSelector);
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

  setUserInfo({ name, about, avatar, _id }) {
    this._user.textContent = name;
    this._info.textContent = about;
    this._info = about
    this._user = name
    this._avatar.src = avatar
    this._id = _id
  }

  getUserAvatar(){
    return {
      avatar: this._avatar.src
    }
  }
}
