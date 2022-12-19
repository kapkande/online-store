var mainProduct = document.querySelector('.main__product');
function setBlock(obj) {
    var block = document.createElement("div"); //? какой тут тип
    block.classList.add('product__block');
    //create image
    var img = document.createElement("div");
    img.classList.add('product__block__image');
    img.style.backgroundImage = "url('".concat(obj.imageMain, "')");
    //create name
    var nameItem = document.createElement("div");
    nameItem.classList.add('product__block__name-item');
    nameItem.textContent = "".concat(obj.name);
    //create description
    var descriptionItem = document.createElement("div");
    descriptionItem.classList.add('product__block__description');
    descriptionItem.textContent = "".concat(obj.description);
    //create cost
    var costItem = document.createElement("div");
    costItem.classList.add('product__block__description');
    costItem.textContent = "".concat(obj.cost);
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
function getOrder() {
    var newArray = [];
    for (var i = 0; i < basic.length;) {
        var random = Math.floor(Math.random() * (basic.length - 1 + 1)) + 0;
        if (!newArray.includes(basic[random])) {
            newArray.push(basic[random]);
            i++;
            console.log(random);
        }
    }
    console.log(newArray);
    return newArray;
}
function showBlocks() {
    var arrey = getOrder();
    arrey.forEach(function (element) {
        setBlock(element);
    });
}
showBlocks();
