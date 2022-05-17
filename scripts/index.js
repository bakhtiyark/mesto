let profile = document.querySelector('.profile');
let profileName = profile.querySelector(".profile__name");
let profileSecondary = profile.querySelector(".profile__subtitle");
let profileNameInp = profile.querySelector('.popup__input_profile_name');
let profileSecondaryInp = profile.querySelector('.popup__input_profile_secondary');
let profileCard = document.querySelector('.profile__card');
let profileSubtitle = profileCard.querySelector('.profile__subtitle');
let profileAvatar = profileCard.querySelector('.profile__avatar');
let editButton = profile.querySelector('.profile__button_edit');
let addButton = profile.querySelector('.profile__button_add');
let submitButton = profile.querySelector(".popup__save-button")
let closePopUpButton = profile.querySelector('.popup__close-icon');
let popUp = document.querySelector(".popup")

let placeInp = document.querySelector('#place-name-input');
let imgInp = document.querySelector('#place-link-input');

let elementTemplate = document.querySelector("#elements-template").content.querySelector('.element');
let elementsContainer = document.querySelector(".elements");

let popUpForm = popUp.querySelector(".popup__form")
let placePopUp = document.querySelector("#add_place")
let placeClosePopUpButton = document.querySelector("#place-close-button")

function editButtonPressed() {
  profileNameInp.value = profileName.textContent;
  profileSecondaryInp.value = profileSecondary.textContent;
  popUp.classList.add("popup_opened");
}

function addButtonPressed() {
  placePopUp.classList.add("popup_opened");
}

function openPopUp(e) {
  const parent = e.currentTarget.parentNode;
  const grandparent = parent.parentNode;
  if(popup.classList.contains('popup_opened') === false){
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
  profileName.innerHTML = profileNameInp.value;
  profileSecondary.innerHTML = profileSecondaryInp.value;
  popUp.classList.remove("popup_opened");
}

popUpForm.addEventListener("submit", profileCardUpdate);
editButton.addEventListener("click", editButtonPressed);
closePopUpButton.addEventListener("click", closePopUp);
addButton.addEventListener("click", addButtonPressed);
placeClosePopUpButton.addEventListener("click", closePopUp)


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

const deleteElement = (e) => {
  e.target.closest('.element').remove();
};

const createCard = (cardsData) => {

  let elementCard = elementTemplate.cloneNode(true);

  let cardTitle = elementCard.querySelector('.element__title');
  let cardLink = elementCard.querySelector('.element__image');

  let likeButton = elementCard.querySelector('#like-button');
  cardTitle.textContent = cardsData.name;
  cardLink.src = cardsData.link;
  cardLink.alt = "Иллюстрация к " + cardsData.name;

  const deleteButton = elementCard.querySelector('.element__delete-button');

  deleteButton.addEventListener('click', deleteElement);


  const processLikeButton = (e) => {
    e.target.classList.toggle("element__like-button_active")
  };

  likeButton.addEventListener("click", processLikeButton)

  const popupOpenCard = document.querySelector('.popup_open-card');
  const popupOpenCardImage = document.querySelector('.popup__image');
  const popupOpenCardPlaceName = document.querySelector('.popup__place-name');
  let closePopupPlace = document.querySelector(".popup__close-icon_position-place")
  closePopupPlace.addEventListener("click", closePopUp);

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


function cadrFormSubmitHandler(e) {
  e.preventDefault();
  renderCard({ name: placeInp.value, link: imgInp.value });

  placeInp.value = '';
  imgInp.value = '';
  openPopUp(e);

};

popupAddCardForm.addEventListener('submit', cadrFormSubmitHandler);