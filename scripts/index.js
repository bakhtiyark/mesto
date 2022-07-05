import Card from "./components/Card.js"
import { 
  initialCards, 
  config,
  profilePopUp,
  elementsContainer, 
  popupAddCard,
  profileName,
  profileNameInput,
  profileSecondary,
  profileSecondaryInput,
  popupOpenCard,
  currentUser,
  buttonEdit
} from "./components/constants.js"
import {FormValidator, disableButton}  from "./components/FormValidator.js"
import Popup from "./components/Popup.js";
import PopupWithForm  from "./components/PopupWithForm.js";
import PopupWithImage  from "./components/PopupWithImage.js";
import UserInfo  from "./components/UserInfo.js";

//const popupWithImage = new PopupWithImage(popupOpenCard);
//popupWithImage.setEventListeners();

const userInfo = new UserInfo(currentUser)

const addCardPopup = new PopupWithForm('#add_place', cardFormSubmitHandler)
addCardPopup.setEventListeners();

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

function closePopUp(popUp) {
  popUp.classList.remove('popup_opened');
  document.removeEventListener("keydown", pressedEsc);
}


const clickOverlay = (e) => {
  const popup = e.target;
  if (popup.classList.contains("popup")) {
    closePopUp(popup)
  }
};

const pressedEsc = (e) => {
  if (e.key !== 'Escape') {
    return;
  }
  const popUp = document.querySelector('.popup_opened');
  closePopUp(popUp);
};

function updateProfileCard({profileFormName, profileFormSecondary}) {
  profileName.textContent = profileFormName;
  profileSecondary.textContent = profileFormSecondary;
  closePopUp(profilePopUp);
}
function pressedEditButton({profileName, profileSecondary}) {
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

initialCards.forEach((cardsData) => {
  renderCard(cardsData);
});

const formValidators = {};
Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});


function cardFormSubmitHandler(e) {
  e.preventDefault();
  renderCard({ name: placeInput.value, link: imageInput.value });
  closePopUp(popupAddCard);
  popupAddCardForm.reset();
  disableButton(buttonAddCardSubmit, config.inactiveButtonClass)
}

