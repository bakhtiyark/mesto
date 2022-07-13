import Card from"../scripts/components/Card.js";import{initialCards,config,profileNameInput,profileSecondaryInput,buttonAdd,currentUser,buttonEdit}from"../utils/constants.js";import{FormValidator}from"../scripts/components/FormValidator.js";import PopupWithForm from"../scripts/components/PopupWithForm.js";import PopupWithImage from"../scripts/components/PopupWithImage.js";import UserInfo from"../scripts/components/UserInfo.js";import Section from"../scripts/components/Section.js";import"../pages/index.css";var popupWithImage=new PopupWithImage(".popup_open-card");popupWithImage.setEventListeners();var userInfo=new UserInfo(currentUser),addCardPopup=new PopupWithForm("#add_place",cardFormSubmitHandler);addCardPopup.setEventListeners(),buttonAdd.addEventListener("click",(function(){addCardPopup.openPopUp(),formValidators["place-add"].resetValidation()}));var profileCardPopup=new PopupWithForm("#profile__popup",updateProfileCard);function cardFormSubmitHandler(r){var e=r.name,o=r.link;renderCard({name:e,link:o})}function updateProfileCard(r){var e=r.profileFormName,o=r.profileFormSecondary;userInfo.setUserInfo({name:e,info:o}),profileCardPopup.closePopUp()}function pressedEditButton(r){var e=r.profileName,o=r.profileSecondary;profileNameInput.value=e,profileSecondaryInput.value=o,profileCardPopup.openPopUp()}profileCardPopup.setEventListeners(),buttonEdit.addEventListener("click",(function(){pressedEditButton(userInfo.getUserInfo()),profileCardPopup.openPopUp(),formValidators["profile-edit"].resetValidation()}));var createCard=function(r,e){return new Card(r,e,"#elements-template",popupWithImage.open).createCard()},renderCard=function(r){cardsContainer.prependItem(createCard(r.name,r.link))},cardsContainer=new Section({data:initialCards,renderer:renderCard},".elements");cardsContainer.renderItems();var formValidators={};Array.from(document.forms).forEach((function(r){formValidators[r.id]=new FormValidator(config,r),formValidators[r.id].enableValidation()}));