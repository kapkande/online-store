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
const resetSortBlock: elemAndNull = document.querySelector('.reset-sort-block');
const searchBar: HTMLFormElement | null = document.querySelector('.search-bar');


function setBlock(obj: IBasic): void {
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

let basicCopy: Array<IBasic> = [];
function getRandomOrder() {
    const newArray: Array<IBasic> = [];
    for (let i = 0; i < basicCopy.length;) {
        let random = Math.floor(Math.random() * (basicCopy.length - 1 + 1)) + 0;
        if (!newArray.includes(basicCopy[random])) {
            newArray.push(basicCopy[random]);
            i++
        }
    }
    return newArray;
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
    if (productBlocks.length != 0) { deleteBlocks() };
    let arrey: Array<IBasic> = [];
    if (sortBlock?.value == 'sort-title') { arrey = getRandomOrder() };
    if (sortBlock?.value == 'price-ASC') { arrey = getSortByPriceASC() };
    if (sortBlock?.value == 'price-DESC') { arrey = getSortByPriceDESC() };
    if (sortBlock?.value == 'ASC') { arrey = getSortByABC() };
    if (sortBlock?.value == 'DESC') { arrey = getSortByDESC() };
    arrey.forEach(element => {
        setBlock(element);
    });
}


sortBlock?.addEventListener('change', showBlocks);

function resetBlock() {
    sortBlock!.value = 'sort-title';
    searchBar!.value = '';
    searchProduct();
}
resetSortBlock?.addEventListener('click', resetBlock);

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