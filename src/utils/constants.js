export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const config = {
    formSelector: "popup__form",
    inputSelector: "popup__input",
    submitButtonSelector: "popup__save-button",
    inactiveButtonClass: "popup__save-button_disabled",
    inputErrorClass: "popup__input_type-text-error",
    errorClass: "popup__error_visible",
};

export const currentUser = {
    profileName: '.profile__name',
    profileSecondary: '.profile__subtitle',
}

export const updatedProfileCard = ".popup__new"
export const profile = document.querySelector('.profile');
export const profileName = profile.querySelector(".profile__name");
export const profileSecondary = profile.querySelector(".profile__subtitle");
export const profileNameInput = profile.querySelector('.popup__input_profile_name');
export const profileSecondaryInput = profile.querySelector('.popup__input_profile_secondary');
export const buttonEdit = profile.querySelector('.profile__button_edit');
export const buttonAdd = profile.querySelector('.profile__button_add');
export const profilePopUp = document.querySelector("#profile__popup");
export const placePopUp = document.querySelector("#add_place");
export const popUpForm = document.querySelector("#popup__form");
export const placeInput = document.querySelector('#place-name-input');
export const imageInput = document.querySelector('#place-link-input');
export const elementsContainer = document.querySelector(".elements");



export const popupOpenCard = document.querySelector('.popup_open-card');
export const popupOpenCardImage = popupOpenCard.querySelector('.popup__image');
export const popupOpenCardPlaceName = popupOpenCard.querySelector('.popup__place-name');

export const buttonPlaceClosePopUp = document.querySelector("#place-close-button")
export const buttonCloseProfilePopUp = document.querySelector('#profile-close-button');
export const buttonCloseImagePopUp = document.querySelector('#image-close-button');


export const popupAddCard = document.querySelector('#add_place');
export const popupAddCardForm = document.querySelector('#place-add');
export const buttonAddCardSubmit = popupAddCardForm.querySelector(".popup__save-button")
