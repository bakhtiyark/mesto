import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._desc = this._popupSelector.querySelector('.popup__place-name');
    this._image = this._popupSelector.querySelector('.popup__image');
  }

  close() {
    super.close();
  }

  open({ link, alt = name, name }) {
    this._image.src = link;
    this._image.alt = alt;
    this._desc.textContent = name;
    super.open();
  }
}