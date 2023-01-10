import generateBasket from "./generateBasket";
import basketData from "../data/basketData";

function loadBasket() {
  const main = document.querySelector('.root-page');
  main?.classList.remove('hidden');

  const productPage = document.querySelector('.product-page')
  productPage?.classList.remove('product-page-active');

  if (document.querySelector('.basket')) {
    document.querySelector('.basket')?.remove();
  }

  const basket = document.createElement('div');
  basket.classList.add('basket');

  if (basketData.amount == 0) {
    const alert = document.createElement('h2');
    alert.classList.add('basket__alert');
    alert.innerText = 'The basket is empty, please return to the main page to add your first item!';
    basket.appendChild(alert);
    main?.after(basket);

  } else {
    const items = document.createElement('div');
    items.classList.add('basket__items');
    basket.appendChild(items);

    const checkout = document.createElement('div');
    checkout.classList.add('basket__checkout');
    basket.appendChild(checkout);

    main?.after(basket);

    generateBasket();
  }
}

export default loadBasket;