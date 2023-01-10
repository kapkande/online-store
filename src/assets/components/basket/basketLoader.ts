import generateBasket from "./generateBasket";

function loadBasket() {
  const main = document.querySelector('.main__defaultPage');
  main?.classList.add('hidden');

  if (document.querySelector('.basket')) {
    document.querySelector('.basket')?.remove();
  }

  const basket = document.createElement('div');
  basket.classList.add('basket');

  const items = document.createElement('div');
  items.classList.add('basket__items');
  basket.appendChild(items);

  const checkout = document.createElement('div');
  checkout.classList.add('basket__checkout');
  basket.appendChild(checkout);

  main?.after(basket);

  generateBasket();
}

export default loadBasket;