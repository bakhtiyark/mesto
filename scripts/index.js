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


const profilePopUp = document.querySelector("#profile__popup");
const placePopUp = document.querySelector("#add_place");
const popUpForm = document.querySelector("#popup__form");
const buttonPlaceSubmit = placePopUp.querySelector(".popup__save-button")

const placeInput = document.querySelector('#place-name-input');
const imageInput = document.querySelector('#place-link-input');

const elementTemplate = document.querySelector("#elements-template").content.querySelector('.element');
const elementsContainer = document.querySelector(".elements");



const popupOpenCard = document.querySelector('.popup_open-card');
const popupOpenCardImage = popupOpenCard.querySelector('.popup__image');
const popupOpenCardPlaceName = popupOpenCard.querySelector('.popup__place-name');

const buttonPlaceClosePopUp = document.querySelector("#place-close-button")
const buttonCloseProfilePopUp = document.querySelector('#profile-close-button');
const buttonCloseImagePopUp = document.querySelector('#image-close-button');

function editButtonPressed() {
  profileNameInput.value = profileName.textContent;
  profileSecondaryInput.value = profileSecondary.textContent;
  openPopUp(profilePopUp)
}


function buttonAddPressed() {
  openPopUp(placePopUp);
}

function openPopUp(popUp) {
  popUp.classList.add('popup_opened');
  document.addEventListener("keydown", escPressed);
  document.addEventListener("mousedown", overlayClicked);
}

function closePopUp(popUp) {
  popUp.classList.remove('popup_opened');
  document.removeEventListener("keydown", escPressed);
}


const overlayClicked = (e) => {
  const popup = e.target;
  if (popup.classList.contains("popup")) {
    closePopUp(popup)
  };
};
document.removeEventListener("mousedown", overlayClicked)
const escPressed = (e) => {
  if (e.key !== 'Escape') {
    return;
  }
  const popUp = document.querySelector('.popup_opened');
  closePopUp(popUp);
};

function profileCardUpdate(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileSecondary.textContent = profileSecondaryInput.value;
  closePopUp(profilePopUp);
}

popUpForm.addEventListener("submit", profileCardUpdate);
buttonEdit.addEventListener("click", editButtonPressed);
buttonAdd.addEventListener("click", buttonAddPressed);

buttonPlaceClosePopUp.addEventListener("click", () => closePopUp(placePopUp));
buttonCloseProfilePopUp.addEventListener("click", () => closePopUp(profilePopUp));
buttonCloseImagePopUp.addEventListener("click", () => closePopUp(popupOpenCard));

/// Удаление карточки

const deleteElement = (e) => {
  e.target.closest('.element').remove();
};

//Открытие карты

const handleImageClick = (e) => {
  clickedImage = e.target;
  popupOpenCardPlaceName.textContent = clickedImage.parentNode.querySelector(".element__title").textContent;
  popupOpenCardImage.src = clickedImage.src;
  popupOpenCardImage.alt = clickedImage.name;
  openPopUp(popupOpenCard);
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
  cardLink.addEventListener('click', handleImageClick);

  return elementCard;
}

const renderCard = (cardsData) => {
  elementsContainer.prepend(createCard(cardsData));
};

initialCards.forEach((cardsData) => {
  renderCard(cardsData);
});

const popupAddCard = document.querySelector('#add_place');
const popupAddCardForm = document.querySelector('#place-add');
const buttonAddCardSubmit = popupAddCardForm.querySelector(".popup__save-button")

function cardFormSubmitHandler(e) {
  e.preventDefault();
  renderCard({ name: placeInput.value, link: imageInput.value });
  closePopUp(popupAddCard);
  popupAddCardForm.reset();
  disableButton(buttonAddCardSubmit)
};

function disableButton(saveButton) {
  saveButton.classList.add("popup__save-button_disabled");
  saveButton.disabled = true;
}
popupAddCardForm.addEventListener('submit', cardFormSubmitHandler);

