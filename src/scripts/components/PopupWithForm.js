import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popup, handleSubmit) {
    super(popup);
    this._handleSubmit = handleSubmit;
    this._popupForm = this._popup.querySelector('.popup__form')
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
  customSubmit(newSubmit) {
    this._handleSubmit = newSubmit
  }

  _formSubmit() {
    this._handleSubmit(this._getInputValues())
  }

  setEventListeners() {
    super.setEventListeners()
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._formSubmit();
      this.close();
    })
  }
  processLoading() {
    const spinner = document.querySelector(".spinner")
    spinner.classList.toggle("spinner_active")
  }
}