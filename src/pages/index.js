import Card from "../scripts/components/Card.js"
import "./index.css"
import {
  initialCards,
  config,
  elementsContainer,
  profileName,
  profileNameInput,
  profileSecondary,
  buttonAddCardSubmit,
  profileSecondaryInput,
  buttonAdd,
  currentUser,
  buttonEdit
} from "../utils/constants.js"
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
document.addEventListener("click", e => {
  console.dir(e.target)
})

function cardFormSubmitHandler({ name, link }) {
  renderCard({ name, link });
  disableButton(buttonAddCardSubmit, config.inactiveButtonClass)
}

function updateProfileCard({ profileFormName, profileFormSecondary }) {
  profileName.textContent = profileFormName;
  profileSecondary.textContent = profileFormSecondary;
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