import './assets/styles/index.scss';
import basicData from './basicData';

type elemAndNull = Element | null;
const mainProduct: elemAndNull = document.querySelector('.main__product');
type stringAndUndefined = string | undefined
type stringNull = string | null

function setBlock(obj): void {
    let block = document.createElement("div"); //? какой тут тип
    block.classList.add('product__block');

    //create image
    let img = document.createElement("div");
    img.classList.add('product__block__image');
    img.style.backgroundImage = `url('${obj.imageMain}')`;
    //create name
    let nameItem: Element = document.createElement("div");
    nameItem.classList.add('product__block__name-item');
    nameItem.textContent = `${obj.name}`;
    //create description
    let descriptionItem: Element = document.createElement("div");
    descriptionItem.classList.add('product__block__description');
    descriptionItem.textContent = `${obj.description}`;
    //create cost
    let costItem: Element = document.createElement("div");
    costItem.classList.add('product__block__description');
    costItem.textContent = `${obj.cost}`
    //create btm 
    let btm: Element = document.createElement("button");
    btm.classList.add('product__block__button');
    btm.textContent = 'add to'

    block.appendChild(img);
    block.appendChild(nameItem);
    block.appendChild(descriptionItem);
    block.appendChild(costItem);
    block.appendChild(btm);
    mainProduct?.appendChild(block);
}

function getOrder() {
    const newArray:Array<object> = [];
    for (let i = 0; i < basic.length;) {
        let random = Math.floor(Math.random() * (basic.length - 1 + 1)) + 0;
        if (!newArray.includes(basic[random])){
            newArray.push(basic[random]);
            i++
        }
    }
return newArray   
}

function showBlocks():void {
   let arrey:Array<object> = getOrder();
   arrey.forEach(element => {
    setBlock(element)
   });

}
showBlocks()