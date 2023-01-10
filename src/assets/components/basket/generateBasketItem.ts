import IBasicNew from "../data/productInterfaceNew";
import basketAdd from "./basketAdd";
import basketRemove from "./basketRemove";

function generateBasketItem(product: IBasicNew): Element {
  const item = document.createElement('div');
  item.classList.add('basket__item');

  const img = document.createElement("img");
  img.classList.add('item__image');
  img.src = `${product.imageMain}`;
  
  const info = document.createElement('div');
  info.classList.add('item__info');
  //create name
  const nameItem: Element = document.createElement("h4");
  nameItem.classList.add('item__name-item');
  nameItem.textContent = `${product.name}`;
  info.appendChild(nameItem);
  //create description
  const descriptionItem: Element = document.createElement("div");
  descriptionItem.classList.add('item__description');
  descriptionItem.textContent = `${product.description}`;
  info.appendChild(descriptionItem);

  const costBlock = document.createElement('div');
  costBlock.classList.add('item__costBlock');
  //create cost
  const costItem: Element = document.createElement("h3");
  costItem.classList.add('item__cost');
  costItem.textContent = `Cost - $${product.cost}`;
  costBlock.appendChild(costItem);

  const interaction = document.createElement('div');
  interaction.classList.add('item__interaction');
  costBlock.appendChild(interaction);

  //create btn 
  const remove = document.createElement("button");
  remove.classList.add('item__remove', 'button_base', 'button_round');
  remove.textContent = '-';
  basketRemove(remove, product);
  interaction.appendChild(remove);

  const add = document.createElement("button");
  add.classList.add('item__add', 'button_base', 'button_round');
  add.textContent = '+';
  basketAdd(add, product);
  interaction.appendChild(add);

  const total = document.createElement('div');
  total.classList.add('item__total');
  costBlock.appendChild(total);

  const amount = document.createElement("h3");
  amount.classList.add('item__amount');
  amount.textContent = `${product.amount} pc(s)`;
  total.appendChild(amount);

  const price = document.createElement('h2');
  price.classList.add('item__price');
  price.textContent = `$${product.price.toFixed(2)}`;
  total.appendChild(price);

  item.appendChild(img);
  item.appendChild(info);
  item.appendChild(costBlock);

  return item;
}

export default generateBasketItem;