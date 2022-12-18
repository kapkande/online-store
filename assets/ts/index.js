var mainProduct = document.querySelector('.main__product');
function setBlock(scr, name, description, cost) {
    var block = document.createElement("div"); //? какой тут тип
    block.classList.add('product__block');
    //create image
    var img = document.createElement("div");
    img.classList.add('product__block__image');
    img.style.backgroundImage = "url('".concat(scr, "')");
    //create name
    var nameItem = document.createElement("div");
    nameItem.classList.add('product__block__name-item');
    nameItem.textContent = "".concat(name);
    //create description
    var descriptionItem = document.createElement("div");
    descriptionItem.classList.add('product__block__description');
    descriptionItem.textContent = "".concat(description);
    //create cost
    var costItem = document.createElement("div");
    costItem.classList.add('product__block__description');
    costItem.textContent = "".concat(cost);
    //create btm 
    var btm = document.createElement("button");
    btm.classList.add('product__block__button');
    btm.textContent = 'add to';
    block.appendChild(img);
    block.appendChild(nameItem);
    block.appendChild(descriptionItem);
    block.appendChild(costItem);
    block.appendChild(btm);
    mainProduct === null || mainProduct === void 0 ? void 0 : mainProduct.appendChild(block);
}
setBlock(basic[0][0].imageMain, basic[0][0].name, basic[0][0].description, basic[0][0].cost);
