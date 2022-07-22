export default class UserInfo {
  constructor(data) {
    const {name, about, avatar} = data
    this._user = document.querySelector(name);
    this._info = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
    this._id = data.id
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

  setUserInfo(data) {
    this._user.textContent = data?.name || "";
    this._info.textContent = data?.about || "";
    this._avatar.src = data?.avatar || "";



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
