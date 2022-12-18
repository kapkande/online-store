type elemAndNull = Element | null;
const mainProduct: elemAndNull  = document.querySelector('.main__product');
type stringAndUndefined = string| undefined
type stringNull =  string | null

function setBlock(scr:stringAndUndefined, name:stringAndUndefined, description:stringAndUndefined, cost:stringAndUndefined):void {
    let block = document.createElement("div"); //? какой тут тип
    block.classList.add('product__block');
    
    //create image
    let img = document.createElement("div");
    img.classList.add('product__block__image');
    img.style.backgroundImage = `url('${scr}')`;
    //create name
    let nameItem:Element = document.createElement("div");
    nameItem.classList.add('product__block__name-item');
    nameItem.textContent = `${name}`;
    //create description
    let descriptionItem:Element = document.createElement("div");
    descriptionItem.classList.add('product__block__description');
    descriptionItem.textContent = `${description}`;
    //create cost
    let costItem:Element = document.createElement("div");
    costItem.classList.add('product__block__description');
    costItem.textContent = `${cost}`
    //create btm 
    let btm:Element = document.createElement("button");
    btm.classList.add('product__block__button');
    btm.textContent = 'add to'

    block.appendChild(img);
    block.appendChild(nameItem);
    block.appendChild(descriptionItem);
    block.appendChild(costItem);
    block.appendChild(btm);
    mainProduct?.appendChild(block);
}
setBlock(basic[0][0].imageMain, basic[0][0].name, basic[0][0].description, basic[0][0].cost)
