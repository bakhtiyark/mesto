class Card {
    constructor(name, link, cardSelector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick
    }

    _selectTemplate() {

        return document
            .querySelector(this._cardSelector)
            .content.querySelector(".element")
            .cloneNode(true)

    }

    createCard() {

        this._element = this._selectTemplate()
        this._elementImage = this._element.querySelector('.element__image')

        this._element.querySelector('.element__title').textContent = this._name;
        this._elementImage.alt = this._name;
        this._elementImage.src = this._link;

        this._deleteButton = this._element.querySelector('.element__delete-button');
        this._likeButton = this._element.querySelector('#like-button');


        this._setEventListeners();
        return this._element;
    }
    _processLikeButton() {
        this._element
            .querySelector('.element__like-button')
            .classList.toggle("element__like-button_active")
    };

    _handleImageClick = () => {
        this._handleCardClick({
            link:this._link, 
            name:this._name});
    };

    _deleteElement = () => {
        this._element.remove();
    };

    _setEventListeners() {
        this._elementImage.addEventListener("click", () => {    
            this._handleImageClick();
                
            });

        // Слушатель на лайки
        this._likeButton.addEventListener("click", () => {
            this._processLikeButton();
        });
        // Слушатель на удаление
        this._deleteButton.addEventListener("click", this._deleteElement);
    }
}

export default Card;