import basketData from "./data/basketData";

function updateHeader() {
  document.querySelector('.header__cost')!.textContent = `$${basketData.price.toFixed(2)}`;
  document.querySelector('.header__items')!.textContent = `${basketData.amount} items(s)`;
}

export default updateHeader;