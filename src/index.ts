import './assets/icons/basket.svg';
import './assets/styles/index.scss';
import './assets/icons/card.png';
import basketData from './assets/components/data/basketData';
import basketInit from './assets/components/basket/basketInit';
import IBasicNew from './assets/components/data/productInterfaceNew';
import newBasic from './assets/components/impBasicInit';
import loadBasket from './assets/components/basket/basketLoader';
import showMain from './assets/components/main/showMain';

type elemAndNull = Element | null;

type stringAndUndefined = string | undefined;
type stringNull = string | null;

const mainProduct: elemAndNull = document.querySelector('.main__product');
const sortBlock: HTMLFormElement | null = document.querySelector('.sort-block');
const productBlocks: NodeListOf<Element> = document.querySelectorAll('.product__block')
const buttonReset: elemAndNull = document.querySelector('.button_reset');
const searchBar: HTMLFormElement | null = document.querySelector('.search-bar');
const inputCostMin: HTMLInputElement | null = document.querySelector('.range-cost__min');
const inputCostMax: HTMLInputElement | null = document.querySelector('.range-cost__max');
const inputRange: NodeListOf<HTMLInputElement> = document.querySelectorAll('.range-cost__point')
const rangeCost: Element | null = document.querySelector('.range-cost')
const rangeCostInputs: Element | null = document.querySelector('.range-cost__inputs')
const rangeCostLine: Element | null = document.querySelector('.range-cost__line')
const logo = document.querySelector('logo');

let basicCopy: Array<IBasicNew> = [];

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
    mainProduct?.appendChild(block);
}

const globalArray: Array<IBasicNew> = [];
function getRandomOrder() {
    if (globalArray.length > 0) {return globalArray}
    for (let i = 0; i < basicCopy.length;) {
        let random = Math.floor(Math.random() * (basicCopy.length - 1 + 1)) + 0;
        if (!globalArray.includes(basicCopy[random])) {
            globalArray.push(basicCopy[random]);
            i++
        }
    }
    return globalArray;
}
function getSortByABC() {
    basicCopy.sort(function (a: IBasicNew, b: IBasicNew): number {
        if (a.name > b.name) return 1;
        if (a.name == b.name) return 0;
        if (a.name < b.name) return -1;
        return 0
    });
    return basicCopy;
}
function getSortByDESC() {
    basicCopy.sort(function (a: IBasicNew, b: IBasicNew): number {
        if (a.name < b.name) return 1;
        if (a.name == b.name) return 0;
        if (a.name > b.name) return -1;
        return 0
    });
    return basicCopy;
}
function getSortByPriceASC() {
    basicCopy.sort(function (a: IBasicNew, b: IBasicNew): number {
        if (a.cost < b.cost) return 1;
        if (a.cost == b.cost) return 0;
        if (a.cost > b.cost) return -1;
        return 0
    });
    return basicCopy;
}
function getSortByPriceDESC() {
    basicCopy.sort(function (a: IBasicNew, b: IBasicNew): number {
        if (a.cost > b.cost) return 1;
        if (a.cost == b.cost) return 0;
        if (a.cost < b.cost) return -1;
        return 0
    });
    return basicCopy;
}
function deleteBlocks(): void {
    const productBlocks: NodeListOf<Element> = document.querySelectorAll('.product__block')
    productBlocks.forEach(element => {
        element.remove();
    });
}

function showBlocks(): void {
    const productBlocks: NodeListOf<Element> = document.querySelectorAll('.product__block');
    if (productBlocks.length != 0 ) { deleteBlocks() };
    let array: Array<IBasicNew> = [];
    if (sortBlock?.value == 'sort-title') { array = getRandomOrder() };
    if (sortBlock?.value == 'price-ASC') { array = getSortByPriceASC() };
    if (sortBlock?.value == 'price-DESC') { array = getSortByPriceDESC() };
    if (sortBlock?.value == 'ASC') { array = getSortByABC() };
    if (sortBlock?.value == 'DESC') { array = getSortByDESC() };
    sortWishRangeline(array).forEach(element => {
        setBlock(element);
    });
}


sortBlock?.addEventListener('change', showBlocks);

function resetBlock() {
    sortBlock!.value = 'sort-title';
    searchBar!.value = '';
    inputCostMin!.value = '0.00'
    inputCostMax!.value = `${getMaxPriseOnRange()}`
    setInputRangeValue();
    searchProduct();
    console.log(basketData);
}
buttonReset?.addEventListener('click', resetBlock);

function searchProduct() {
    basicCopy.length = 0
    newBasic.forEach(element => {
        if (element.name.toUpperCase().includes(searchBar?.value.trim().toUpperCase())) {
            basicCopy.push(element)
        }

    });
    showBlocks();
}

searchProduct();
searchBar?.addEventListener('input', searchProduct);

document.querySelector('.header__basket_icon')?.addEventListener('click', loadBasket);
document.querySelector('.logo')?.addEventListener('click', showMain);

function getMaxPriseOnRange() {
    const maxPrice: number = Number(getSortByPriceASC()[0].cost)
    return maxPrice
}
inputCostMax!.value = `${getMaxPriseOnRange()}`

function setInputTextValue() {
    const maxPrice: number = getMaxPriseOnRange();
    let firstInputRange = (maxPrice * +inputRange[0].value / 100).toFixed(2);
    let secondInputRange = (maxPrice * +inputRange[1].value / 100).toFixed(2);

    if (firstInputRange > secondInputRange) {
        inputCostMin!.value = secondInputRange
        inputCostMax!.value = firstInputRange
    } else if (firstInputRange < secondInputRange) {
        inputCostMin!.value = firstInputRange
        inputCostMax!.value = secondInputRange
    }
    showBlocks()
}
inputRange[0]?.addEventListener('input', setInputTextValue);
inputRange[1]?.addEventListener('input', setInputTextValue);

function setInputRangeValue() {
    inputRange[0].value = `${Number(inputCostMin?.value) / getMaxPriseOnRange() * 100}`;
    inputRange[1].value = `${Number(inputCostMax?.value) / getMaxPriseOnRange() * 100}`;
    showBlocks()
}
rangeCostInputs?.addEventListener('input', setInputRangeValue);

function sortWishRangeline(array: Array<IBasicNew>) {
    let newArray: Array<IBasicNew> = []
    array.forEach(element => {
        if (+element.cost >= +inputCostMin!.value && +element.cost <= +inputCostMax!.value) {
            newArray.push(element)
        }
    });

    return newArray
}