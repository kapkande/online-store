import basketData from "./data/basketData";
import newBasic from "./impBasicInit";
import generateBasketItem from "./generateBasketItem";

function generateBasket() {
  const basketItems = document.querySelector('.basket__items');
  basketData.itemsIDs.forEach((id) => {
    basketItems?.appendChild(generateBasketItem(newBasic[id]))
  });
}

export default generateBasket;