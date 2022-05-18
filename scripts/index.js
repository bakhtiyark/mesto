const profile = document.querySelector('.profile');
const profileName = profile.querySelector(".profile__name");
const profileSecondary = profile.querySelector(".profile__subtitle");
const profileNameInput = profile.querySelector('.popup__input_profile_name');
const profileSecondaryInput = profile.querySelector('.popup__input_profile_secondary');
const profileCard = document.querySelector('.profile__card');
const profileSubtitle = profileCard.querySelector('.profile__subtitle');
const profileAvatar = profileCard.querySelector('.profile__avatar');
const buttonEdit = profile.querySelector('.profile__button_edit');
const buttonAdd = profile.querySelector('.profile__button_add');
const buttonSubmit = profile.querySelector(".popup__save-button")
const buttonClosePopUp = profile.querySelector('.popup__close-icon');
const popUp = document.querySelector(".popup");
const profilePopUp = document.querySelector("#profile__popup");
const placePopUp = document.querySelector("#add_place");
const popUpForm = document.querySelector("#popup__form");

const placeInput = document.querySelector('#place-name-input');
const imageInput = document.querySelector('#place-link-input');

const elementTemplate = document.querySelector("#elements-template").content.querySelector('.element');
const elementsContainer = document.querySelector(".elements");


const popupOpenCard = document.querySelector('.popup_open-card');
const popupOpenCardImage = document.querySelector('.popup__image');
const popupOpenCardPlaceName = document.querySelector('.popup__place-name');
const buttonClosePopUpPlace = document.querySelector(".popup__close-icon_position-place")
const placebuttonClosePopUp = document.querySelector("#place-close-button")

function editButtonPressed() {
  profileNameInput.value = profileName.textContent;
  profileSecondaryInput.value = profileSecondary.textContent;
  profilePopUp.classList.add("popup_opened");
}

function buttonAddPressed() {
  placePopUp.classList.add("popup_opened");
}

function openPopUp(e) {
  const parent = e.currentTarget.parentNode;
  const grandparent = parent.parentNode;
  if (popup.classList.contains('popup_opened') === false) {
    grandparent.classList.add('popup_opened');
  }
}

function closePopUp(e) {
  const parent = e.currentTarget.parentNode;
  const grandparent = parent.parentNode;
  grandparent.classList.remove('popup_opened');
}

function profileCardUpdate(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileSecondary.textContent = profileSecondaryInput.value;
  popUp.classList.remove("popup_opened");
}

popUpForm.addEventListener("submit", profileCardUpdate);
buttonEdit.addEventListener("click", editButtonPressed);
buttonClosePopUp.addEventListener("click", closePopUp);
buttonAdd.addEventListener("click", buttonAddPressed);
placebuttonClosePopUp.addEventListener("click", closePopUp)


const initialCards = [
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
/// Удаление карточки

const deleteElement = (e) => {
  e.target.closest('.element').remove();
};

/// Лайканье

const processLikeButton = (e) => {
  e.target.classList.toggle("element__like-button_active")
};

/// Создание карт
const createCard = (cardsData) => {

  const elementCard = elementTemplate.cloneNode(true);

  const cardTitle = elementCard.querySelector('.element__title');
  const cardLink = elementCard.querySelector('.element__image');


  cardTitle.textContent = cardsData.name;
  cardLink.src = cardsData.link;
  cardLink.alt = cardsData.name;


  const deleteButton = elementCard.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', deleteElement);

  const likeButton = elementCard.querySelector('#like-button');
  likeButton.addEventListener("click", processLikeButton)



  function popupOpenCardToggle() {
    popupOpenCard.classList.toggle('popup_opened');
    if (popupOpenCard.classList.contains('popup_opened')) {
      popupOpenCardPlaceName.textContent = cardsData.name;
      popupOpenCardImage.src = cardsData.link;
      popupOpenCardImage.alt = cardsData.name;
    };
  };

  cardLink.addEventListener('click', popupOpenCardToggle);

  return elementCard;
}

const renderCard = (cardsData) => {
  elementsContainer.prepend(createCard(cardsData));
};

initialCards.forEach((cardsData) => {
  renderCard(cardsData);
});

const popupAddCard = document.querySelector('#add-place');
const popupAddCardForm = document.querySelector('#place-add');


function cardFormSubmitHandler(e) {
  e.preventDefault();
  renderCard({ name: placeInput.value, link: imageInput.value });

  placeInput.value = '';
  imageInput.value = '';
  openPopUp(e);

};
buttonClosePopUpPlace.addEventListener("click", closePopUp);
popupAddCardForm.addEventListener('submit', cardFormSubmitHandler);