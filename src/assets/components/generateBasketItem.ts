import IBasicNew from "./data/productInterfaceNew";

function generateBasketItem(product: IBasicNew): Element {
  const item = document.createElement('div');
  item.classList.add('basket__item');

  const img = document.createElement("div");
  img.classList.add('product__item__image');
  img.style.backgroundImage = `url('${product.imageMain}')`;
  //create name
  const nameItem: Element = document.createElement("h4");
  nameItem.classList.add('product__item__name-item');
  nameItem.textContent = `${product.name}`;
  //create description
  const descriptionItem: Element = document.createElement("div");
  descriptionItem.classList.add('product__item__description');
  descriptionItem.textContent = `${product.description}`;
  //create cost
  const costItem: Element = document.createElement("h3");
  costItem.classList.add('product__item__cost');
  costItem.textContent = `$${product.cost}`;

  const amount = document.createElement("h3");
  amount.classList.add('item__amount');
  amount.textContent = `${product.amount}`;

  const price = document.createElement('h2');
  price.classList.add('item__price');
  price.textContent = `${product.price.toFixed(2)}`;

  //create btn 
  const btn: Element = document.createElement("button");
  btn.classList.add('product__item__button', 'button_base');
  btn.textContent = 'ADD';

  item.appendChild(img);
  item.appendChild(nameItem);
  item.appendChild(descriptionItem);
  item.appendChild(costItem);
  item.appendChild(btn);
  item.appendChild(amount);
  item.appendChild(price);

  return item;
}

export default generateBasketItem;