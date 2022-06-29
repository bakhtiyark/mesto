const elementsContainer = document.querySelector(".elements");

export class Section{
    constructor({items,renderer}, container){
        this._items = items
        this.renderer = renderer
        this._container = document.querySelector(container)
    }
    renderItems(){
        this._items.forEach((item)=>{
            this.renderer(item)
        });
    }
    addItem(item){
        this._container.prepend(item)
    }
}
  
  initialCards.forEach((cardsData) => {
    Section.renderer(cardsData, elementsContainer);
  });