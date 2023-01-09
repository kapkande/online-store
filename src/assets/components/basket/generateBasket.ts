import basketData from "../data/basketData";
import newBasic from "../impBasicInit";
import generateBasketItem from "./generateBasketItem";

function generateBasket() {
  const basketItems = document.querySelector('.basket__items');
  basketData.itemsIDs.forEach((id) => {
    basketItems?.appendChild(generateBasketItem(newBasic[id]))
  });
  const basketTotal = document.querySelector('.basket__checkout');

  const totalHeader = document.createElement('h2');
  totalHeader.classList.add('checkout__header');
  totalHeader.innerText = 'Total';
  basketTotal?.appendChild(totalHeader);

  const products = document.createElement('h3');
  products.classList.add('checkout__amount');
  products.innerText = `Items - ${basketData.amount}`;
  basketTotal?.appendChild(products);

  const price = document.createElement('h3');
  price.classList.add('checkout__price');
  price.innerText = `Total - $${Math.abs(basketData.price).toFixed(2)}`;
  basketTotal?.appendChild(price);

  const promo = document.createElement('input');
  promo.classList.add('checkout__promo');
  promo.type = 'text';
  promo.placeholder = 'Promocodes (try: TEST)';
  basketTotal?.appendChild(promo);
  promo.addEventListener('input', () => {
    if (promo.value.toLocaleUpperCase() == 'TEST' && document.querySelector('.checkout__promo_active') == null) {
      promo.value = '';
      const newPrice = document.createElement('h3');
      newPrice.classList.add('checkout__newprice');
      newPrice.innerHTML = `Total - $${Math.abs(basketData.price * 0.8).toFixed(2)}`;
      price.classList.add('striked');
      price.after(newPrice);

      const promos = document.createElement('div');
      promos.classList.add('checkout__promos_active');

      const promoActive = document.createElement('b');
      promoActive.innerText = 'TEST 20%';
      promoActive.classList.add('checkout__promo_active');
      promos.appendChild(promoActive);

      const removePromo = document.createElement('button');
      removePromo.classList.add('button_base', 'button_round');
      removePromo.innerText = '-';
      promos.appendChild(removePromo);
      removePromo.addEventListener('click', () => {
        price.classList.remove('striked');
        newPrice.remove();
        promos.remove();
      });

      promo.after(promos);
    }
  });

  const buy = document.createElement('button');
  buy.classList.add('button_base', 'checkout__buy');
  buy.innerText = 'Buy now';
  basketTotal?.appendChild(buy);
}

export default generateBasket;