import './assets/icons/basket.svg';
import './assets/styles/index.scss';

import onMainProduct from "./assets/components/product-page";
import basketData from './assets/components/data/basketData';
import basketInit from './assets/components/basket/basketInit';
import IBasicNew from './assets/components/data/productInterfaceNew';
import newBasic from './assets/components/impBasicInit';
import loadBasket from './assets/components/basket/basketLoader';

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

const basicCopy: Array<IBasicNew> = [];

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

const arrayWithOrder: Array<number> = [];
function getRandomOrder() {
    const globalArray: Array<IBasicNew> = [];
    if (arrayWithOrder.length > 0) {
        arrayWithOrder.forEach(i => {
            if (basicCopy[i]) {
                globalArray.push(basicCopy[i])
            }
        });
        return globalArray
    }

    for (let i = 0; i < basicCopy.length;) {
        let random:number = Math.floor(Math.random() * (basicCopy.length - 1 + 1)) + 0;
        if (!globalArray.includes(basicCopy[random])) {
            globalArray.push(basicCopy[random]);
            arrayWithOrder.push(random)
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
    let arrey: Array<IBasicNew> = [];
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
    newBasic.forEach(element => {
        if (element.name.toUpperCase().includes(searchBar?.value.trim().toUpperCase())) {
            basicCopy.push(element)
        }
    });
    showBlocks();

    setQuery('search=', searchBar?.value)
};

searchProduct();

searchBar?.addEventListener('input', searchProduct);

document.querySelector('.header__basket_icon')?.addEventListener('click', (e) => {
  loadBasket();
});


function getMaxPriseOnRange() {
    const maxPrice: number = Number(getSortByPriceASC()[0].cost)
    return maxPrice
}

searchProduct();
const maxPrice: number = getMaxPriseOnRange();

function setInputTextValue() {
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
    setQuery('range=', `${firstInputRange},${secondInputRange}`)
}
inputRange[0]?.addEventListener('input', setInputTextValue);
inputRange[1]?.addEventListener('input', setInputTextValue);

function setInputRangeValue() {
    inputRange[0].value = `${Number(inputCostMin?.value) / getMaxPriseOnRange() * 100}`;
    inputRange[1].value = `${Number(inputCostMax?.value) / getMaxPriseOnRange() * 100}`;
    showBlocks()
    setQuery('range=', `${Number(inputCostMax?.value)},${Number(inputCostMax?.value)}`)
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

function setPercentEncoding(parameter: Array<string>) {
    let arr: Array<string> = [];
    parameter.forEach(element => {
        if (element == ',') {
            arr.push('%2C')
        } else if (element == '.') {
            arr.push('%3A')
        } else {
            arr.push(element)
        }

        // console.log(element);
    });
    return arr.join('')
}

function setQuery(nameObj: string, ...parameters: string[]) {

    const percentEncoding: string = setPercentEncoding(parameters.join('').split(''))

    const linkWebsite = document.location.href.split('/')[3]
    const arrayWithlink = linkWebsite.split('&')
    // console.log(arrayWithlink);
    const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname +
        `${nameObj}${percentEncoding}`;

    if (window.history.state == null) {
        if (percentEncoding.toString().length == 0) { return }
        window.history.pushState('', '', newurl);
        return
    }

    if (String(arrayWithlink).includes(nameObj)) {
        if (percentEncoding.toString().length == 0) { return }
        let index: number
        // console.log(arrayWithlink);
        arrayWithlink.forEach((element, i) => {
          if (element.split('=')[0] + '=' == nameObj) {
               index = i
            }
        });
        arrayWithlink.splice(index!, 1);
        if (percentEncoding.toString().length != 0) {
            arrayWithlink.push(`${nameObj}${percentEncoding}`)
        }
        window.history.replaceState({}, '', `${arrayWithlink.join('&')}`)
        return
    }

    if (!String(arrayWithlink).includes(nameObj)) {
        window.history.replaceState({}, '', `${arrayWithlink.join('&')}&${nameObj}${percentEncoding}`)
    }
}


function loadQ() {
    const linkWebsite = name(document.location.href.split('/')[3])
    const arrayWithlink = linkWebsite.split('&')
    let obj: any = {}
    // console.log({arrayWithlink});
    
    function toObject(arrayWithlink: string[]) {
        for (let i = 0; i < arrayWithlink.length; ++i) {
            let key = arrayWithlink[i].split('=')[0]
            let value = arrayWithlink[i].split('=')[1]
            obj[key] = value;
            console.log(value);
        }
    }
    
    toObject(arrayWithlink)
    for (var key in obj) {
        if (key == 'sort'){
            sortBlock!.value = obj[key]
            // showBlocks()
            // console.log(obj[key]);
        }
        if (key == 'range'){
            // console.log(obj[key]);
        }
    }

    inputCostMax!.value = `${getMaxPriseOnRange()}`
}
// loadQ()

function name(linkWebsite: string) {
    const arr = []
    for (let i = 0; i < linkWebsite.length; i++) {
        if (linkWebsite[i] == '%' && linkWebsite[i + 1] == '2' && linkWebsite[i + 2] == 'C') {
            arr.push(', ')
            i += 2

        } else if (linkWebsite[i] == '%' && linkWebsite[i + 1] == '3' && linkWebsite[i + 2] == 'A') {
            arr.push('.')
            i += 2

        } else if (linkWebsite[i] == '%' && linkWebsite[i + 1] == '5' && linkWebsite[i + 2] == 'B') {
            arr.push('[')
            i += 2

        } else if (linkWebsite[i] == '%' && linkWebsite[i + 1] == '5' && linkWebsite[i + 2] == 'D') {
            arr.push(']')
            i += 2

        } else {
            arr.push(linkWebsite[i])
        }

    }
    return arr.join('')
}


