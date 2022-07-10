import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._desc = this._popup.querySelector('.popup__place-name');
    this._image = this._popup.querySelector('.popup__image');
    this.open = this.open.bind(this)
  }

  open({ link, name }) {
    super.openPopUp();
    this._image.src = link;
    this._image.alt = name;
    this._desc.textContent = name;

  }
}