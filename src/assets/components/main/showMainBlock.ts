import onMainProduct from "../productPage";
import basketInit from '../basket/basketInit';
import IBasicNew from '../data/productInterfaceNew';

const mainProduct: Element | null = document.querySelector('.main__product');
function setBlock(obj: IBasicNew): void {
  let block = document.createElement("div"); //? какой тут тип
  block.classList.add('product__block');

  //create image
  let img = document.createElement("div");
  img.classList.add('product__block__image');
  img.style.backgroundImage = `url('${obj.imageMain}')`;
  //create name
  let nameItem: Element = document.createElement("h4");
  nameItem.classList.add('product__block__name-item');
  nameItem.textContent = `${obj.name}`;
  //create description
  let descriptionItem: Element = document.createElement("div");
  descriptionItem.classList.add('product__block__description');
  descriptionItem.textContent = `${obj.description}`;
  //create cost
  let costItem: Element = document.createElement("h3");
  costItem.classList.add('product__block__cost');
  costItem.textContent = `$${obj.cost}`
  //create btn 
  let btn: Element = document.createElement("button");
  btn.classList.add('product__block__button', 'button_base');
  btn.textContent = 'ADD'
  basketInit(btn, obj);

  block.appendChild(img);
  block.appendChild(nameItem);
  block.appendChild(descriptionItem);
  block.appendChild(costItem);
  block.appendChild(btn);
  onMainProduct(block, obj)
  mainProduct?.appendChild(block);
}

export default setBlock;