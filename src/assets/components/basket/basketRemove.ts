import basketData from "../data/basketData";
import IBasicNew from "../data/productInterfaceNew";
import newBasic from "../impBasicInit";
import updateHeader from "../updateHeader";
import loadBasket from "./basketLoader";

function basketRemove(element: Element, data: IBasicNew) {
  element.addEventListener('click', (e) => {
    basketData.price -= Number(data.cost);
    basketData.amount -= 1;

    newBasic[data.id].amount -= 1;
    newBasic[data.id].price -= Number(data.cost);

    if (newBasic[data.id].amount == 0) {
      basketData.itemsIDs.delete(data.id);
    }

    updateHeader();
    loadBasket();
  });
}

export default basketRemove;