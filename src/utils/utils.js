export function cardFormSubmitHandler({ name, link }) {
    renderCard({ name, link });
}

export function updateProfileCard({ profileFormName, profileFormSecondary }) {
    userInfo.setUserInfo({ name: profileFormName, info: profileFormSecondary })
    profileCardPopup.closePopUp();
}
export function pressedEditButton({ profileName, profileSecondary }) {
    profileNameInput.value = profileName;
    profileSecondaryInput.value = profileSecondary;
    profileCardPopup.openPopUp()
}