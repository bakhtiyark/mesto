const config = {
  formSelector: "popup__form",
  inputSelector: "popup__input",
  submitButtonSelector: "popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type-text-error",
  errorClass: "popup__error_visible",
};
const showInputError = (inputConfig) => {
  const {
    formElement,
    inputElement,
    errorMessage,
    inputErrorModifier,
    errorSelector,
  } = inputConfig;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorSelector);
  inputElement.classList.add(inputErrorModifier);
};

const hideInputError = (
  formElement,
  inputElement,
  inputErrorModifier,
  errorSelector
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(errorSelector);
  inputElement.classList.remove(inputErrorModifier);
  errorElement.textContent = "";
};
const checkInputValidity = (
  formElement,
  inputElement,
  inputErrorModifier,
  errorSelector
) => {
  if (!inputElement.validity.valid) {
    const errorMessage = inputElement.validationMessage;
    showInputError({
      formElement,
      inputElement,
      errorMessage,
      inputErrorModifier,
      errorSelector,
    });
  } else {
    hideInputError(
      formElement,
      inputElement,
      inputErrorModifier,
      errorSelector
    );
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, saveButton, disabledSelector) => {
  if (hasInvalidInput(inputList)) {
    saveButton.classList.add(disabledSelector);
    saveButton.disabled = true;
  } else {
    saveButton.classList.remove(disabledSelector);
    saveButton.disabled = false;
  }
};

const setEventListeners = (formElement, validElement) => {
  const {
    inputSelector,
    submitButtonSelector,
    errorClass,
    inputErrorClass,
    inactiveButtonClass,
  } = validElement;
  const inputList = Array.from(
    formElement.querySelectorAll(`.${inputSelector}`)
  );
  const saveButton = formElement.querySelector(`.${submitButtonSelector}`);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(
        formElement,
        inputElement,
        inputErrorClass,
        errorClass
      );
      toggleButtonState(inputList, saveButton, inactiveButtonClass);
    });
  });
  toggleButtonState(inputList, saveButton, inactiveButtonClass);
};
const enableValidation = (validConfiguration) => {
  const { formSelector } = validConfiguration;
  const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, validConfiguration);
  });
};
enableValidation(config);