import basic from "./data/basicData";
import IBasic from "./data/productInterface";
import IBasicNew from "./data/productInterfaceNew";

function impBasicInit(basic: Array<IBasic>): Array<IBasicNew>{
  const newArray: Array<IBasic> = structuredClone(basic);
  newArray.forEach((value , i) => {
    value.id = i;
    value.amount = 0;
    value.price = 0;
  });
  return newArray as Array<IBasicNew>;
}

const newBasic = impBasicInit(basic);

export default newBasic;