import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, cardFormSubmitHandler) {
    super(popupSelector);
    this._cardFormSubmitHandler = cardFormSubmitHandler;
    this._popupForm = this._popupSelector.querySelector('.popup__form')
    this._popupButtonForm = this._popupForm.querySelector('.popup__save-button')
    this._inputList = this._popupForm.querySelectorAll('.popup__input')
  }

  _getInputValues() {
    const formValues = {}
    this._inputList.forEach(input => {
      formValues[input.name] = input.value
    })
    //console.dir(formValues)
    return formValues
  }
  close() {
    super.closePopUp();
    this._popupForm.reset();
  }

  _formSubmit() {
    this._cardFormSubmitHandler(this._getInputValues())
  }

  setEventListeners() {
    super.setEventListeners()
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._formSubmit();
      this.close();
    })
  }


}