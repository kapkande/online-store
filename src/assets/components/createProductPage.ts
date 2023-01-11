import IBasicNew from "./data/productInterfaceNew";
import basketInit from "../components/basket/basketInit";

const logo: HTMLElement | null = document.querySelector('.logo')
const productPageMain: HTMLElement | null = document.querySelector('.product-page__main')
function openProductPage(data: IBasicNew) {
  const rootPage: Element | null = document.querySelector('.root-page');
  rootPage?.classList.add('hidden');
  const productPageActive: Element | null = document.querySelector('.product-page');
  productPageActive?.classList.remove('hidden');

  createProductPage(data)

}
export default openProductPage;
function createProductPage(data: IBasicNew) {
  const productPageMainImage: HTMLImageElement | null = document.querySelector('.product-page__main-image')
  console.log(productPageMainImage);
  productPageMainImage!.src = `${data.imageMain}`

  const productPageSecondesImages: HTMLImageElement | null = document.querySelector('.product-page__secondes-images')


  const imageOther = document.querySelectorAll('.imageOther')
  for (let i = 0; i < data.imageOther.length; i++) {
    if (imageOther) {
      imageOther.forEach(element => {
        element.remove();
      });
    }
    let img = document.createElement("img");
    img.classList.add('imageOther')
    img!.src = `${data.imageOther[i]}`
    productPageSecondesImages?.appendChild(img);
  }
  const productPageTitle: HTMLImageElement | null = document.querySelector('.product-page__title')
  productPageTitle!.textContent = `${data.name}`;
  const productPpageBrand = document.querySelector('.product-page__brand')
  const childrenBrand = productPpageBrand?.children;
  childrenBrand![0].textContent = `Brand`;
  childrenBrand![1].textContent = data.brand;

  // name(productPpageBrand, data)
  const productPpageDescription = document.querySelector('.product-page__description')
  const childrenDescription = productPpageDescription?.children;
  childrenDescription![0].textContent = `Description`;
  childrenDescription![1].textContent = data.description;

  const productPpageTaste = document.querySelector('.product-page__taste')
  const childrenTaste = productPpageTaste?.children;
  childrenTaste![0].textContent = `Taste`;
  childrenTaste![1].textContent = data.taste;

  const productPpageWeight = document.querySelector('.product-page__weight')
  const childrenWeight = productPpageWeight?.children;
  childrenWeight![0].textContent = `Weight`;
  childrenWeight![1].textContent = data.weight;

  const productPpageTypeOfFeed = document.querySelector('.product-page__TypeOfFeed')
  const childrenTypeOfFeed = productPpageTypeOfFeed?.children;
  childrenTypeOfFeed![0].textContent = `Type Of Feed`;
  childrenTypeOfFeed![1].textContent = data.TypeOfFeed;

  const productPpageAnimal = document.querySelector('.product-page__animal')
  const childrenAnimal = productPpageAnimal?.children;
  childrenAnimal![0].textContent = `Animal`;
  childrenAnimal![1].textContent = data.animal;


  const bayBlock: Element = document.createElement('div');
  const div: Element = document.createElement("div");
  const addToCartBTM: Element = document.createElement("button");
  const buyNowBTM: Element = document.createElement("button");
 
  const productPageBayBlock: HTMLImageElement | null = document.querySelector('.product-page__bay-block')

  if (productPageBayBlock) {
    productPageBayBlock.remove()
    
  }
  bayBlock.classList.add('product-page__bay-block');
  div.classList.add('product-page__cost');
  addToCartBTM.classList.add('button_base', 'product-page__cart');
  buyNowBTM.classList.add('button_base', 'product-page__bay');

  div.textContent = data.cost + '$';
  addToCartBTM.textContent = 'ADD TO CART';
  buyNowBTM.textContent = 'BUY NOW';

  bayBlock?.appendChild(div);
  bayBlock?.appendChild(addToCartBTM);
  bayBlock?.appendChild(buyNowBTM);
  productPageMain!.appendChild(bayBlock);
  basketInit(addToCartBTM!, data);
}
// function name(element: Element | null, data: IBasicNew) {
//   const children = element?.children
//   const names:string  = String(element?.className.split('__')[1])
//   children![0].textContent = `${names}`

//   for (let key in data) {
//     if (key == names)
//     children![1].textContent = data[key]
//   }

//   children![1].textContent = data[names]
// }