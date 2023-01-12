import basketData from "./basketData";
import newBasic from "../impBasicInit";

function resetData() {
  basketData.itemsIDs = new Set;
  basketData.amount = 0;
  basketData.price = 0;

  newBasic.forEach((value) => {
    value.amount = 0;
    value.price = 0;
  });
}

export default resetData;