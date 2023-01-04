import './assets/icons/basket.svg';
import './assets/styles/index.scss';
import basic from './basicData';

type elemAndNull = Element | null;

type stringAndUndefined = string | undefined
type stringNull = string | null
interface IBasic {
    animal: string,
    name: string,
    imageMain: string,
    imageOther: string,
    description: string,
    cost: string,
    brand: string,
    taste: string,
    weight: string,
    TypeOfFeed: string,
}

const mainProduct: elemAndNull = document.querySelector('.main__product');
const sortBlock: HTMLFormElement | null = document.querySelector('.sort-block');
const productBlocks: NodeListOf<Element> = document.querySelectorAll('.product__block')
const buttonReset: elemAndNull = document.querySelector('.button_reset');
const searchBar: HTMLFormElement | null = document.querySelector('.search-bar');
const inputCostMin: HTMLInputElement | null = document.querySelector('.range-cost__min');
const inputCostMax: HTMLInputElement | null = document.querySelector('.range-cost__max');
let basicCopy: Array<IBasic> = [];
const inputRange: NodeListOf<HTMLInputElement> = document.querySelectorAll('.range-cost__point')
const rangeCost: Element | null = document.querySelector('.range-cost')
const rangeCostInputs: Element | null = document.querySelector('.range-cost__inputs')
const rangeCostLine: Element | null = document.querySelector('.range-cost__line')



function setBlock(obj: IBasic): void {
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
    //create btm 
    let btm: Element = document.createElement("button");
    btm.classList.add('product__block__button', 'button_base');
    btm.textContent = 'ADD'

    block.appendChild(img);
    block.appendChild(nameItem);
    block.appendChild(descriptionItem);
    block.appendChild(costItem);
    block.appendChild(btm);
    mainProduct?.appendChild(block);
}

const globalArray: Array<IBasic> = [];
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
    basicCopy.sort(function (a: IBasic, b: IBasic): number {
        if (a.name > b.name) return 1;
        if (a.name == b.name) return 0;
        if (a.name < b.name) return -1;
        return 0
    });
    return basicCopy;
}
function getSortByDESC() {
    basicCopy.sort(function (a: IBasic, b: IBasic): number {
        if (a.name < b.name) return 1;
        if (a.name == b.name) return 0;
        if (a.name > b.name) return -1;
        return 0
    });
    return basicCopy;
}
function getSortByPriceASC() {
    basicCopy.sort(function (a: IBasic, b: IBasic): number {
        if (a.cost < b.cost) return 1;
        if (a.cost == b.cost) return 0;
        if (a.cost > b.cost) return -1;
        return 0
    });
    return basicCopy;
}
function getSortByPriceDESC() {
    basicCopy.sort(function (a: IBasic, b: IBasic): number {
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
    let arrey: Array<IBasic> = [];
    if (sortBlock?.value == 'sort-title') { arrey = getRandomOrder() };
    if (sortBlock?.value == 'price-ASC') { arrey = getSortByPriceASC() };
    if (sortBlock?.value == 'price-DESC') { arrey = getSortByPriceDESC() };
    if (sortBlock?.value == 'ASC') { arrey = getSortByABC() };
    if (sortBlock?.value == 'DESC') { arrey = getSortByDESC() };
    sortWishRangeline(arrey).forEach(element => {
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
}
buttonReset?.addEventListener('click', resetBlock);

function searchProduct() {
    basicCopy.length = 0
    basic.forEach(element => {
        if (element.name.toUpperCase().includes(searchBar?.value.trim().toUpperCase())) {
            basicCopy.push(element)
        }

    });
    showBlocks();
};
searchProduct();
searchBar?.addEventListener('input', searchProduct);



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

function sortWishRangeline(array: Array<IBasic>) {
    let newArray: Array<IBasic> = []
    array.forEach(element => {
        if (+element.cost >= +inputCostMin!.value && +element.cost <= +inputCostMax!.value) {
            newArray.push(element)
        }
    });

    return newArray
}