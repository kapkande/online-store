import IBasic from "./productInterface";

interface IimpBasic extends IBasic {
  id: number,
  amount: number,
  price: number,
}

export default IimpBasic;