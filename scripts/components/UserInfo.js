export default class UserInfo {
    constructor({ profileName, profileSecondary }) {
      this._user = document.querySelector(profileName);
      this._info = document.querySelector(profileSecondary);
    }
  
    getUserInfo() {
      return {
        profileName: this._user.textContent,
        profileSecondary: this._info.textContent,
      }
    }
  
    setUserInfo({ name, info }) {
      this._user.textContent = name;
      this._info.textContent = info;
    }
  }
  