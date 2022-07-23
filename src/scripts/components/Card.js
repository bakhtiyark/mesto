class Card {
    constructor(data, cardSelector, handleCardClick, handleCardDeletion, handleLike, userID) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick
        this._cardId = data._id
        this._likeCounter = data.likes
        this._handleCardDeletion = handleCardDeletion
        this._handleLike = handleLike
        this._userID = userID
        this._owner = data.owner._id
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

        //this._element.id = this._cardId

        this._element.querySelector('.element__title').textContent = this._name;
        this._elementImage.alt = this._name;
        this._elementImage.src = this._link;
        this._element.querySelector(".element__like-counter").textContent = this._likeCounter?.length || 0;

        this._deleteButton = this._element.querySelector('.element__delete-button');
        this._likeButton = this._element.querySelector('#like-button');


        this._setEventListeners();
        return this._element;
    }
    _processLikeButton() {
        this._likeButton.classList.toggle("element__like-button_active")
    };
    isLiked() {
        return this._likeCounter.some((x)=> x._id === this._userID)
        //this._likeCounter?.length !== 0
        //this._likeCounter._id === this._userID
    }

    _handleImageClick = () => {
        this._handleCardClick({
            link: this._link,
            name: this._name
        });
    };

    deleteElement = () => {
        this._element.remove();
        this._element = null
    };

    _setEventListeners() {
        this._elementImage.addEventListener("click", () => {
            this._handleImageClick();
        });
        // Слушатель на лайки
        this._likeButton.addEventListener("click", () => {
            this._handleLike(this._cardId)
            this._processLikeButton()
            console.dir(this._likeCounter)
            console.dir(this.isLiked())
            console.dir(this._userID)
            console.dir(this._owner)
        });
        // Слушатель на удаление
        this._deleteButton.addEventListener("click", () => {
            this._handleCardDeletion(this._cardId)
        });
    }
}

export default Card;