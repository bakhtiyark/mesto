import Card from "../scripts/components/Card.js"

import {
  initialCards,
  config,
  profileName,
  profileNameInput,
  profileSecondary,
  profileSecondaryInput,
  buttonAdd,
  currentUser,
  buttonEdit
} from "../utils/constants.js"
import { FormValidator } from "../scripts/components/FormValidator.js"
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Section from "../scripts/components/Section.js";
import "../pages/index.css"


// Попап иллюстрации
const popupWithImage = new PopupWithImage('.popup_open-card');
popupWithImage.setEventListeners();

//Данные пользователя
const userInfo = new UserInfo(currentUser)

//Попап добавления новой карточки
const addCardPopup = new PopupWithForm('#add_place', cardFormSubmitHandler)
addCardPopup.setEventListeners();
buttonAdd.addEventListener("click", () => {
  addCardPopup.openPopUp()
  formValidators["place-add"].resetValidation()
})

//Попап с редактированием профиля
const profileCardPopup = new PopupWithForm("#profile__popup", updateProfileCard)
profileCardPopup.setEventListeners();
buttonEdit.addEventListener("click", () => {
  pressedEditButton(userInfo.getUserInfo())
  profileCardPopup.openPopUp()
  formValidators["profile-edit"].resetValidation()
})

function cardFormSubmitHandler({ name, link }) {
  renderCard({ name, link });
}

function updateProfileCard({profileFormName,profileFormSecondary}) {
  userInfo.setUserInfo({name:profileFormName, info:profileFormSecondary})
  profileCardPopup.closePopUp();
}
function pressedEditButton({ profileName, profileSecondary }) {
  profileNameInput.value = profileName;
  profileSecondaryInput.value = profileSecondary;
  profileCardPopup.openPopUp()
}
/// Создание карт
const createCard = (name, link) => {

  const card = new Card(name, link, "#elements-template", popupWithImage.open)
  return card.createCard();
}

const renderCard = (cardsData) => {
  cardsContainer.prependItem(createCard(cardsData.name, cardsData.link));
};

// Секции
const cardsContainer = new Section({ data: initialCards, renderer: renderCard }, ".elements")
cardsContainer.renderItems()

const formValidators = {};
Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.id] = new FormValidator(config, formElement);
  formValidators[formElement.id].enableValidation();
}); 