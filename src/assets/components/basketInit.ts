import basketData from "./data/basketData";
import IBasicNew from "./data/productInterfaceNew";
import newBasic from "./impBasicInit";
import updateHeader from "./updateHeader";

function basketInit(element: Element, data: IBasicNew) {
  element.addEventListener('click', (e) => {
    basketData.itemsIDs.add(data.id);
    basketData.price += Number(data.cost);
    basketData.amount += 1;
    updateHeader();

    newBasic[data.id].amount += 1;
    newBasic[data.id].price += Number(data.cost);
  });
}

export default basketInit;