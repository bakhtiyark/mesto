export class FormValidator {
  constructor(config, form) {
    this._form = form
    this._inputSelector = config.inputSelector
    this._inputList = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`))
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass  
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._saveButton = this._form.querySelector(`.${this._submitButtonSelector}`)
  }

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
  };
  _showInputError = (inputConfig) => {
    const { inputElement, errorMessage } = inputConfig;
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
  };
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError({ inputElement, errorMessage })
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  _toggleButtonState = (inputList, saveButton) => {
    if (this._hasInvalidInput(inputList)) {
      saveButton.classList.add(this._inactiveButtonClass);
      saveButton.disabled = true;
    } else {
      saveButton.classList.remove(this._inactiveButtonClass);
      saveButton.disabled = false;
    }
  };
  resetValidation() {
    this._toggleButtonState(this._inputList, this._saveButton);

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });

  }

  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        evt.preventDefault();
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._saveButton);
      });
    });     
    this._toggleButtonState(this._inputList, this._saveButton);
  };
  enableValidation = () => {
    this._setEventListeners();
  };
}