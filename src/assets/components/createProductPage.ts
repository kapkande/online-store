import IBasicNew from "./data/productInterfaceNew";
import basketInit from "../components/basket/basketInit";
import closeProductPage from "./closeProductPage";
const logo:HTMLElement | null = document.querySelector('.logo')

function openProductPage(data: IBasicNew) {
  const rootPage: Element | null = document.querySelector('.root-page');
  rootPage?.classList.add('root-page-close');
  const productPageActive: Element | null = document.querySelector('.product-page');
  productPageActive?.classList.add('product-page-active');
 
  createProductPage(data)

  logo!.addEventListener('click', () => {
    closeProductPage()
  });
}
export default openProductPage;
function createProductPage(data: IBasicNew) {
  const productPageMainImage: HTMLImageElement | null = document.querySelector('.product-page__main-image')
  console.log(productPageMainImage);
  productPageMainImage!.src = `${data.imageMain}`

  const productPageSecondesImages: HTMLImageElement | null = document.querySelector('.product-page__secondes-images')
 
  const imageOther = document.querySelectorAll('.imageOther')
  for (let i = 0; i < data.imageOther.length; i++) {
    if (imageOther){
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

  const productPpageCost = document.querySelector('.product-page__cost')
  const childrenCost = productPpageCost?.children;
  childrenCost![0].textContent = `Cost`;
  childrenCost![1].textContent = data.cost;

  const productPpageAnimal = document.querySelector('.product-page__animal')
  const childrenAnimal = productPpageAnimal?.children;
  childrenAnimal![0].textContent = `Animal`;
  childrenAnimal![1].textContent = data.animal;

const productPageCart:Element| null = document.querySelector('.product-page__cart')
  basketInit(productPageCart!, data)
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