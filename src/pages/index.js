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
let userID;
const api = new Api({
  baseUrl,
  token: {
    authorization: "c4df37c2-ee37-468d-b548-ff18699e058a",
    'Content-Type': 'application/json'
  }
});

//Загрузка всей инфы с сервера
api.getAllData().then(([cards, user]) => {
  userInfo.setUserInfo(user)
  userInfo.setUserAvatar(user.avatar)
  userID = userInfo.getID(user)
  cards.reverse().forEach(card => {
    cardsContainer.prependItem(createCard(card))
  })
}).catch(err => console.log(err))

// Попап замены аватара
const popupWithAvatar = new PopupWithForm("#replace_avatar", avatarUpdateHandler)
popupWithAvatar.setEventListeners();
// Попап иллюстрации
const popupWithImage = new PopupWithImage('.popup_open-card');
popupWithImage.setEventListeners();

//Данные пользователя
const userInfo = new UserInfo(currentUser)

//Попап добавления новой карточки
const addCardPopup = new PopupWithForm('#add_place', handlerCardFormSubmit)
addCardPopup.setEventListeners();
buttonAdd.addEventListener("click", () => {
  addCardPopup.openPopUp()
  formValidators["place-add"].resetValidation()
})

//Попап подтверждения удаления карточки
const deleteCardPopup = new PopupWithConfirmation('#confirm-delete', "#place-delete")
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

  const card = new Card(
    data,
    "#elements-template",
    popupWithImage.open,
    (id) => {
      deleteCardPopup.openPopUp()
      deleteCardPopup.setSubmitHandler(() => {
        api.deleteCard(id).then(() => {
          card.deleteElement()
          deleteCardPopup.closePopUp()
        }).catch(err => console.log(err))
      })
    },
    (id) => {
      card.isLiked() ? api.removeLike(id)
        .then(res => card.setLikes(res.likes))
        .catch(err => console.log(err)) : api.addLike(id)
          .then(res => card.setLikes(res.likes))
          .catch(err => console.log(err))
    },
    userID
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



//добавление карты

function handlerCardFormSubmit(newCard) {
  addCardPopup.processLoading(true)
  api.createCard(newCard).then((data) => {
    const newCard = createCard(data)
    cardsContainer.prependItem(newCard)
    addCardPopup.close()
  }).catch(err => console.log(err)).finally(() => addCardPopup.processLoading(false))
}

//Замена аватара 

function avatarUpdateHandler(data) {
  popupWithAvatar.processLoading(true)
  api.setUserAvatar(data.link).then((res) => {
    userInfo.setUserAvatar(res.avatar)
    popupWithAvatar.closePopUp()
  }).catch(err => console.log(err))
    .finally(() => {
      popupWithAvatar.processLoading(false)
    })
}

buttonAvatarEdit.addEventListener("click", () => {
  popupWithAvatar.openPopUp()
})

//Обновление профиля

function updateProfileCard(data) {
  //console.dir(data)
  profileCardPopup.processLoading(true)
  api.setUserInfo(data.profileFormName, data.profileFormSecondary)
    .then((user) => {
      userInfo.setUserInfo(user)
      profileCardPopup.closePopUp()
    })
    .catch(err => console.log(err)).finally(() => {
      profileCardPopup.processLoading(false)
    })
}
function pressedEditButton({ name, about }) {
  profileNameInput.value = name;
  profileSecondaryInput.value = about;
  profileCardPopup.openPopUp()
  //console.dir(userID)
}