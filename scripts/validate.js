const config = {
    formSelector: "popup__form",
    inputSelector: "popup__text",
    submitButtonSelector: "popup__save-button",
    inactiveButtonClass: "popup__save-button_disabled",
    inputErrorClass: "popup__text_type-error",
    errorClass: "popup__error_visible",
};

function showInputError (inputConfig) {
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

function hideInputError (formElement, inputElement, inputErrorModifier, errorSelector) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(errorSelector);
    inputElement.classList.remove(inputErrorModifier);
    errorElement.textContent = "";
};