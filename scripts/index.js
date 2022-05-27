

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

const placeInput = document.querySelector('#place-name-input');
const imageInput = document.querySelector('#place-link-input');

const elementTemplate = document.querySelector("#elements-template").content.querySelector('.element');
const elementsContainer = document.querySelector(".elements");


const popupOpenCard = document.querySelector('.popup_open-card');
const popupOpenCardImage = document.querySelector('.popup__image');
const popupOpenCardPlaceName = document.querySelector('.popup__place-name');

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
}

function closePopUp(popUp) {
  popUp.classList.remove('popup_opened');
}

function profileCardUpdate(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileSecondary.textContent = profileSecondaryInput.value;
  closePopUp(e);
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


  function handleImageClick() {
    openPopUp(popupOpenCard);
    popupOpenCardPlaceName.textContent = cardsData.name;
    popupOpenCardImage.src = cardsData.link;
    popupOpenCardImage.alt = cardsData.name;
  };

  cardLink.addEventListener('click', handleImageClick);

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
popupAddCardForm.addEventListener('submit', cardFormSubmitHandler);

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    })});
  formList.forEach((formElement) => {
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    fieldsetList.forEach(function (fieldSet) {
      setEventListeners(fieldSet);
    })
  }
  )
};