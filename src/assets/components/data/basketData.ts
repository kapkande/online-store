interface IBasketData {
  itemsIDs: Set<number>,
  amount: number,
  price: number
}

const basketData: IBasketData = {
  itemsIDs: new Set,
  amount: 0,
  price: 0
};

export default basketData;