import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, cardFormSubmitHandler) {
    super(popupSelector);
    this._cardFormSubmitHandler = cardFormSubmitHandler;
    this._popupForm = this._popupSelector.querySelector('.popup__form')
    this._popupButtonForm = this._popupForm.querySelector('.popup__save-button')
    this._addButton = document.querySelector(".profile__button_add")
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll('.popup__input')
    this._formValues = {}
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value
    })
    //console.dir(this._formValues)
    return this._formValues
  }

  _formSubmit() {
    this._cardFormSubmitHandler(this._getInputValues())
  }

  setEventListeners() {
    super.setEventListeners()
    this._addButton.addEventListener("click", this.openPopUp.bind(this))
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault()
      this._formSubmit()
    })
    this._popupForm.addEventListener('submit', this._formSubmit.bind(this));
  }

  close() {
    super.close()
    this._popupForm.reset()
  }
}