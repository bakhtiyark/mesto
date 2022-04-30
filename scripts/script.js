let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__button-edit');
let addButton = profile.querySelector('.profile__button-add');
let closePopUp = profile.querySelector('.popup__close-icon');
let popUp = document.querySelector(".popup")


function addButtonPressed() {
    popUp.style.visibility = 'visible';
}
function closeButtonPressed() {
    popUp.style.visibility = 'hidden';
}

addButton.addEventListener("click", addButtonPressed);
closePopUp.addEventListener("click", closeButtonPressed);


let profileCard = document.querySelector('.profile__card');
let profileName = profileCard.querySelector('.profile__name');
let profileSubtitle = profileCard.querySelector('.profile__subtitle');
let profileAvatar = profileCard.querySelector('.profile__avatar');
