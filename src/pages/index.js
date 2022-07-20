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
  buttonAvatarEdit,
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
  token: {
    authorization: "c4df37c2-ee37-468d-b548-ff18699e058a",
    'Content-Type': 'application/json'
  }
});

// Попап замены аватара
const popupWithAvatar = new PopupWithForm("#replace_avatar", cardFormSubmitHandler)
popupWithAvatar.setEventListeners();
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

api.getUserInfo().then((user) => {
  userInfo.setUserInfo(user)
  userInfo.setUserAvatar(user.avatar)
}).catch(err => console.log(err))

api.getInitialCards().then((cards) => {
  cards.forEach(card => {
    cardsContainer.prependItem(createCard(card.name,card.link))
  })
}).catch(err => console.log(err))

buttonAdd.addEventListener("click", () => {
  console.dir(api.getInitialCards())
  console.dir(api.getUserInfo())
  console.dir(userInfo.getUserInfo())
  console.dir(api.getAllData())
})

buttonAvatarEdit.addEventListener("click", () => {
  popupWithAvatar.openPopUp()
})
function updateProfileCard({ name, about }) {
  console.dir(api.setUserInfo({ name, about }))
  api.setUserInfo({ name, about })
  profileCardPopup.close();
}
function pressedEditButton({ name, about }) {
  profileNameInput.value = name;
  profileSecondaryInput.value = about;
  profileCardPopup.openPopUp()
}