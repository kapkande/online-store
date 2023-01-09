import basketData from "../data/basketData";
import IBasicNew from "../data/productInterfaceNew";
import newBasic from "../impBasicInit";
import updateHeader from "../updateHeader";
import loadBasket from "./basketLoader";

function basketAdd(element: Element, data: IBasicNew) {
  element.addEventListener('click', (e) => {
    basketData.price += Number(data.cost);
    basketData.amount += 1;

    newBasic[data.id].amount += 1;
    newBasic[data.id].price += Number(data.cost);

    updateHeader();
    loadBasket();
  });
}

export default basketAdd;