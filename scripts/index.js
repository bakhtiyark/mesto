let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__button_edit');
let addButton = profile.querySelector('.profile__button_add');
let submitButton = profile.querySelector(".popup__save-button")
let closePopUpButton = profile.querySelector('.popup__close-icon');
let popUp = document.querySelector(".popup")
let profileName = profile.querySelector(".profile__name");
let profileSecondary = profile.querySelector(".profile__subtitle");
let profileNameInp = profile.querySelector('.popup__input_profile_name');
let profileSecondaryInp = profile.querySelector('.popup__input_profile_secondary');
let profileCard = document.querySelector('.profile__card');
let profileSubtitle = profileCard.querySelector('.profile__subtitle');
let profileAvatar = profileCard.querySelector('.profile__avatar');
let popUpForm = popUp.querySelector(".popup__form")

function editButtonPressed() {
    profileNameInp.value = profileName.textContent;
    profileSecondaryInp.value = profileSecondary.textContent;
    popUp.classList.add("popup_opened");
}

function closePopUp() {
    popUp.classList.remove("popup_opened");
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