export default class UserInfo {
  constructor({name,about,avatar}) {
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

  setUserInfo(data) {
    
    this._user.textContent = data?.name || "";
    this._info.textContent = data?.about || "";
    this._avatar.src = data?.avatar || "";
    this._id = data?._id || "";
    

  }

  getUserAvatar(){
    return {
      avatar: this._avatar.src
    }
  }
  setUserAvatar(avatar){
   this._avatar.src = avatar
  }
  getID(){
    return this._id
  }
}
