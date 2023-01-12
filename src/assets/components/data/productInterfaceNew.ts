import IBasic from "./productInterface";

interface IBasicNew extends IBasic {
  id: number,
  amount: number,
  price: number
}

export default IBasicNew;