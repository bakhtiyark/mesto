import Card from "../scripts/components/Card.js"
import { Api } from "../scripts/components/Api.js"
import { cardFormSubmitHandler } from "../utils/utils.js"
import {
  initialCards,
  config,
  profileNameInput,
  profileSecondaryInput,
  buttonAdd,
  baseUrl,
  currentUser,
  buttonEdit
} from "../utils/constants.js"
import { FormValidator } from "../scripts/components/FormValidator.js"
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Section from "../scripts/components/Section.js";
import "../pages/index.css"

const api = new Api({
  baseUrl,
  token: { authorization: "c4df37c2-ee37-468d-b548-ff18699e058a" }
});

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
export const profileCardPopup = new PopupWithForm("#profile__popup", updateProfileCard)
profileCardPopup.setEventListeners();
buttonEdit.addEventListener("click", () => {
  pressedEditButton(userInfo.getUserInfo())
  profileCardPopup.openPopUp()
  formValidators["profile-edit"].resetValidation()
})

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

buttonAdd.addEventListener("click", () => {
  console.dir(api.getInitialCards())
  console.dir(api.getUserInfo())
  console.dir(userInfo.getUserInfo())
})


function updateProfileCard({ name, about }) {
  profileCardPopup.close();
  api.setUserInfo({name, about})}
function pressedEditButton({ name, about }) {
  profileNameInput.value = name;
  profileSecondaryInput.value = about;
  profileCardPopup.openPopUp()
}