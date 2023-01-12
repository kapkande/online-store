import './assets/icons/basket.svg';
import './assets/styles/index.scss';

import IBasicNew from './assets/components/data/productInterfaceNew';
import newBasic from './assets/components/impBasicInit';
import loadBasket from './assets/components/basket/basketLoader';
import showMain from './assets/components/main/showMain';
import setBlock from './assets/components/main/showMainBlock'
import transformationLinck from "./assets/components/transformationLinck"
import setPercentEncoding from "./assets/components/setPercentEncoding"

type elemAndNull = Element | null;

const mainProduct: elemAndNull = document.querySelector('.main__product');
const sortBlock: HTMLFormElement | null = document.querySelector('.sort-block');
const buttonReset: elemAndNull = document.querySelector('.button_reset');
const searchBar: HTMLFormElement | null = document.querySelector('.search-bar');
const inputCostMin: HTMLInputElement | null = document.querySelector('.range-cost__min');
const inputCostMax: HTMLInputElement | null = document.querySelector('.range-cost__max');
const inputRange: NodeListOf<HTMLInputElement> = document.querySelectorAll('.range-cost__point')
const rangeCostInputs: Element | null = document.querySelector('.range-cost__inputs')
const basicCopy: Array<IBasicNew> = [];



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
    console.log(globalArray);
   return globalArray;


}
// getRandomOrder()
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
    console.log(basicCopy);
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
    setQuery('sort=', sortBlock?.value)
    sortWishRangeline(arrey).forEach(element => {
        setBlock(element);
    });
}

sortBlock?.addEventListener('change', showBlocks);

function resetBlock() {
    sortBlock!.value = 'sort-title';
    searchBar!.value = '';
    inputCostMin!.value = '0.00';
    inputCostMax!.value = `${getMaxPriseOnRange()}`;
    window.history.replaceState({}, '', window.location.protocol + "//" + window.location.host)
    searchProduct();
    setInputRangeValue();
    setInputTextValue();
    
}
buttonReset?.addEventListener('click', resetBlock);

function searchProduct() {
    basicCopy.length = 0;
    newBasic.forEach(element => {
        if (element.name.toUpperCase().includes(searchBar?.value.trim().toUpperCase())) {
            basicCopy.push(element);
        }
    });
    showBlocks();

    setQuery('search=', searchBar?.value);
};

searchBar?.addEventListener('input', searchProduct);

document.querySelector('.header__basket_icon')?.addEventListener('click', loadBasket);
document.querySelector('.logo')?.addEventListener('click', showMain);

function getMaxPriseOnRange() {
    newBasic.sort(function (a: IBasicNew, b: IBasicNew): number {
        if (+a.cost < +b.cost) return 1;
        if (+a.cost == +b.cost) return 0;
        if (+a.cost > +b.cost) return -1;
        return 0
    });
    const maxPrice: number = +newBasic[0].cost;
    return maxPrice;
}

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



function setQuery(nameObj: string, ...parameters: string[]) {

    const percentEncoding: string = setPercentEncoding(parameters.join('').split(''));
    
    const allLinck = document.location.href.split('/')
    const linkWebsite = allLinck[allLinck.length-1]

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
interface StringArray {
    [index: string]: string;
  }

function loadQ() {
    console.log();
    let allLinck = document.location.href.split('/')
    const linkWebsite = transformationLinck(allLinck[allLinck.length-1]);
    const arrayWithlink = linkWebsite.split('&');
    const obj:StringArray = {};
    
    function toObject(arrayWithlink: string[]) {
        for (let i = 0; i < arrayWithlink.length; ++i) {
            let key = arrayWithlink[i].split('=')[0];
            let value = arrayWithlink[i].split('=')[1];
            obj[key] = value;
           }
    }
   toObject(arrayWithlink)
    if(Object.keys(obj).length <= 1){
    searchProduct()
    return
   }
    for (var key in obj) {
        if (key == 'search'){
            searchBar!.value = `${obj[key]}`;
            searchProduct();
        }
        if (key == 'range'){
            const rangeValue = obj[key].split(',');
            inputCostMin!.value = `${rangeValue[0]}`;
            inputCostMin!.textContent = `${rangeValue[0]}`;

            inputCostMax!.value = `${rangeValue[1]}`;
            inputCostMax!.textContent = `${rangeValue[1]}`;

            inputRange[0].value = `${Number(inputCostMin?.value) / getMaxPriseOnRange() * 100}`
            inputRange[1].value = `${Number(inputCostMax?.value) / getMaxPriseOnRange() * 100}`

            setInputRangeValue();
            setInputTextValue();
        }
        if (key == 'sort'){
            console.log(obj[key]);
            sortBlock!.value = `${obj[key]}`;
            showBlocks();
        }
    }

}

loadQ()




