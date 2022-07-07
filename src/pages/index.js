import Card from "../scripts/components/Card.js"

import {
  initialCards,
  config,
  profilePopUp,
  elementsContainer,
  profileName,
  profileNameInput,
  profileSecondary,
  buttonAddCardSubmit,
  profileSecondaryInput,
  buttonAdd,
  currentUser,
  buttonEdit
} from "../scripts/components/constants.js"
import { FormValidator, disableButton } from "../scripts/components/FormValidator.js"
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Section from "../scripts/components/Section.js";



// Попап иллюстрации
const popupWithImage = new PopupWithImage('.popup_open-card');
popupWithImage.setEventListeners();

//Данные пользователя
const userInfo = new UserInfo(currentUser)

//Попап добавления новой карточки
const addCardPopup = new PopupWithForm('#add_place', cardFormSubmitHandler)
addCardPopup.setEventListeners();
buttonAdd.addEventListener("click", () =>
  addCardPopup.openPopUp())



//Попап с редактированием профиля
const profileCardPopup = new PopupWithForm("#profile__popup", updateProfileCard)
profileCardPopup.setEventListeners();
buttonEdit.addEventListener("click", () => {
  pressedEditButton(userInfo.getUserInfo())
  profileCardPopup.openPopUp()
})


function pressedAddButton() {
  openPopUp(placePopUp);
}

export function openPopUp(popUp) {
  popUp.classList.add('popup_opened');
  document.addEventListener("keydown", pressedEsc);
}

const clickOverlay = (e) => {
  const popup = e.target;
  if (popup.classList.contains("popup")) {
    closePopUp(popup)
  }
};

function cardFormSubmitHandler({ name, link }) {
  renderCard({ name, link });
  disableButton(buttonAddCardSubmit, config.inactiveButtonClass)
}

function updateProfileCard({ profileFormName, profileFormSecondary }) {
  profileName.textContent = profileFormName;
  profileSecondary.textContent = profileFormSecondary;
  closePopUp(profilePopUp);
}
function pressedEditButton({ profileName, profileSecondary }) {
  profileNameInput.value = profileName;
  profileSecondaryInput.value = profileSecondary;
  openPopUp(profilePopUp)
}
/// Создание карт
const createCard = (name, link) => {

  const card = new Card(name, link, "#elements-template")
  return card._createCard();
}

const renderCard = (cardsData) => {
  elementsContainer.prepend(createCard(cardsData.name, cardsData.link));
};

// Секции
const cardsContainer = new Section({ data: initialCards, renderer: renderCard }, ".elements")
cardsContainer.renderItems()

const formValidators = {};
Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});




function closePopUp(popUp) {
  popUp.classList.remove('popup_opened');
  document.removeEventListener("keydown", pressedEsc);
}

const pressedEsc = (e) => {
  if (e.key !== 'Escape') {
    return;
  }
  const popUp = document.querySelector('.popup_opened');
  closePopUp(popUp);
};

