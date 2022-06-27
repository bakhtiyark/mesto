import Card from "./components/Card.js"
import { initialCards, config } from "./components/constants.js"
import {FormValidator} from "./components/FormValidator.js"

const profile = document.querySelector('.profile');
const profileName = profile.querySelector(".profile__name");
const profileSecondary = profile.querySelector(".profile__subtitle");
const profileNameInput = profile.querySelector('.popup__input_profile_name');
const profileSecondaryInput = profile.querySelector('.popup__input_profile_secondary');
const profileCard = document.querySelector('.profile__card');
profileCard.querySelector('.profile__subtitle');
profileCard.querySelector('.profile__avatar');
const buttonEdit = profile.querySelector('.profile__button_edit');
const buttonAdd = profile.querySelector('.profile__button_add');
profile.querySelector(".popup__save-button");
const profilePopUp = document.querySelector("#profile__popup");
const placePopUp = document.querySelector("#add_place");
const popUpForm = document.querySelector("#popup__form");
placePopUp.querySelector(".popup__save-button");
const placeInput = document.querySelector('#place-name-input');
const imageInput = document.querySelector('#place-link-input');
document.querySelector("#elements-template").content.querySelector('.element');
const elementsContainer = document.querySelector(".elements");



export const popupOpenCard = document.querySelector('.popup_open-card');
export const popupOpenCardImage = popupOpenCard.querySelector('.popup__image');
export const popupOpenCardPlaceName = popupOpenCard.querySelector('.popup__place-name');

const buttonPlaceClosePopUp = document.querySelector("#place-close-button")
const buttonCloseProfilePopUp = document.querySelector('#profile-close-button');
const buttonCloseImagePopUp = document.querySelector('#image-close-button');

function editButtonPressed() {
  profileNameInput.value = profileName.textContent;
  profileSecondaryInput.value = profileSecondary.textContent;
  openPopUp(profilePopUp)
}


function buttonAddPressed() {
  openPopUp(placePopUp);
}

export function openPopUp(popUp) {
  popUp.classList.add('popup_opened');
  document.addEventListener("keydown", escPressed);
}

function closePopUp(popUp) {
  popUp.classList.remove('popup_opened');
  document.removeEventListener("keydown", escPressed);
}


const overlayClicked = (e) => {
  const popup = e.target;
  if (popup.classList.contains("popup")) {
    closePopUp(popup)
  }
};

profilePopUp.addEventListener("mousedown", overlayClicked)
placePopUp.addEventListener("mousedown", overlayClicked)
popupOpenCard.addEventListener("mousedown", overlayClicked)

const escPressed = (e) => {
  if (e.key !== 'Escape') {
    return;
  }
  const popUp = document.querySelector('.popup_opened');
  closePopUp(popUp);
};

function profileCardUpdate(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileSecondary.textContent = profileSecondaryInput.value;
  closePopUp(profilePopUp);
}

popUpForm.addEventListener("submit", profileCardUpdate);
buttonEdit.addEventListener("click", editButtonPressed);
buttonAdd.addEventListener("click", buttonAddPressed);

buttonPlaceClosePopUp.addEventListener("click", () => closePopUp(placePopUp));
buttonCloseProfilePopUp.addEventListener("click", () => closePopUp(profilePopUp));
buttonCloseImagePopUp.addEventListener("click", () => closePopUp(popupOpenCard));


/// Создание карт
const createCard = (name, link) => {

  const card = new Card(name, link, "#elements-template")
  return card._createCard();
}

const renderCard = (cardsData) => {
  elementsContainer.prepend(createCard(cardsData.name, cardsData.link));
};

initialCards.forEach((cardsData) => {
  renderCard(cardsData);
});
const formValidators = {};
Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name]._enableValidation();
});

const popupAddCard = document.querySelector('#add_place');
const popupAddCardForm = document.querySelector('#place-add');
const buttonAddCardSubmit = popupAddCardForm.querySelector(".popup__save-button")

function cardFormSubmitHandler(e) {
  e.preventDefault();
  renderCard({ name: placeInput.value, link: imageInput.value });
  closePopUp(popupAddCard);
  popupAddCardForm.reset();
  disableButton(buttonAddCardSubmit)
}

popupAddCardForm.addEventListener('submit', cardFormSubmitHandler);

