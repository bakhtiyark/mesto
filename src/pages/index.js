import Card from "../scripts/components/Card.js"
import { Api } from "../scripts/components/Api.js"
import {
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
import PopupWithConfirmation from "../scripts/components/PopupWithConfirmation"
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
const popupWithAvatar = new PopupWithForm("#replace_avatar", avatarUpdateHandler)
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

//Попап подтверждения удаления карточки
const deleteCardPopup = new PopupWithForm('#confirm-delete', "#place-delete", updateProfileCard)
deleteCardPopup.setEventListeners();


//Попап с редактированием профиля
export const profileCardPopup = new PopupWithForm("#profile__popup", updateProfileCard)
profileCardPopup.setEventListeners();
buttonEdit.addEventListener("click", () => {
  pressedEditButton(userInfo.getUserInfo())
  profileCardPopup.openPopUp()
  formValidators["profile-edit"].resetValidation()
})
/// Создание карт
const createCard = (data) => {

  const card = new Card(data, "#elements-template", popupWithImage.open, (id) => {
    deleteCardPopup.openPopUp()
    deleteCardPopup.customSubmit(() => {
      api.deleteCard(id).then(() => {
        card.deleteElement()
        deleteCardPopup.processLoading()
        setTimeout(deleteCardPopup.processLoading, 1500)
        deleteCardPopup.closePopUp()
      }).catch(err => console.log(err))
    })
  }, (id) => {
    card._isLiked() ? api.removeLike(id) : api.addLike(id)
  }, api.getUserInfo().then(x => {return x._id})
  )
  return card.createCard();
}

const renderCard = (cardsData) => {
  cardsContainer.prependItem(createCard(cardsData.name, cardsData.link));
};

// Секции

const cardsContainer = new Section({ data: [], renderer: renderCard }, ".elements")
cardsContainer.renderItems()

const formValidators = {};
Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.id] = new FormValidator(config, formElement);
  formValidators[formElement.id].enableValidation();
});

//Данные юзера с сервера

api.getUserInfo().then((user) => {
  userInfo.setUserInfo(user)
  userInfo.setUserAvatar(user.avatar)
}).catch(err => console.log(err))

//Карты с API

api.getInitialCards().then((cards) => {
  cards.forEach(card => {
    cardsContainer.appendItem(createCard(card))
  })
}).catch(err => console.log(err))


function cardFormSubmitHandler(newCard) {
  addCardPopup.processLoading()
  setTimeout(addCardPopup.processLoading, 1500)
  api.createCard(newCard).then((data) => {
    const newCard = createCard(data)
    cardsContainer.prependItem(newCard)
    addCardPopup.closePopUp()

  }).catch(err => console.log(err))
}
//Замена аватара 

function avatarUpdateHandler(data) {
  api.setUserAvatar(data.link).then((res) => {
    userInfo.setUserAvatar(res)
    popupWithAvatar.processLoading()
    setTimeout(popupWithAvatar.processLoading, 1500)
  }).catch(err => console.log(err))
}
buttonAvatarEdit.addEventListener("click", () => {
  popupWithAvatar.openPopUp()
})

//Обновление профиля

function updateProfileCard(data) {
  //console.dir(data)
  api.setUserInfo(data)
    .then((user) => {
      userInfo.setUserInfo(user.name, user.about)
      profileCardPopup.processLoading()
      setTimeout(profileCardPopup.processLoading, 1500)
      profileCardPopup.closePopUp()
    })
    .catch(err => console.log(err))
}
function pressedEditButton({ name, about }) {
  profileNameInput.value = name;
  profileSecondaryInput.value = about;
  profileCardPopup.openPopUp()
}
