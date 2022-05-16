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


let popUpForm = popUp.querySelector(".popup__form")
let placePopUp = document.querySelector("#add_place")
let placeClosePopUpButton = document.querySelector("#place-close-button")

let elementTemplate = document.querySelector("#elements-template")
let elementsContainer = document.querySelector(".elements")
let element = elementsContainer.querySelector(".element")
const likeButton = element.querySelector('.element__like-button');


function openPopUp() {
  popUp.classList.add("popup_opened");
}

function editButtonPressed() {
  profileNameInp.value = profileName.textContent;
  profileSecondaryInp.value = profileSecondary.textContent;
  popUp.classList.add("popup_opened");
}

function addButtonPressed() {
  placePopUp.classList.add("popup_opened");
}

function openPopUp() {
  popUp.classList.add("popup_opened");
}

function closePopUp() {
  popUp.classList.remove("popup_opened");
  placePopUp.classList.remove("popup_opened");
}

function profileCardUpdate(e) {
  e.preventDefault();
  profileName.innerHTML = profileNameInp.value;
  profileSecondary.innerHTML = profileSecondaryInp.value;
  closePopUp();
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



const processLikeElement = (e) => {
  e.target.classList.toggle('element__like-button_active');
};

const processPopUp = (e) => {
  e.target.classList.toggle('popup_opened');
};

likeButton.addEventListener('click', processLikeElement);

