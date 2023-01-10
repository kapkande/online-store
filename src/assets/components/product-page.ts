import IBasicNew from "./data/productInterfaceNew";
import openProductPage from "./createProductPage";

const productpageImages = document.querySelector('.product-page__images')
const iamgePopup = document.querySelector('.iamgePopup');
const iamgePopupImage: HTMLImageElement | null = document.querySelector('.iamgePopup__image');
const mainImage:HTMLImageElement | null = document.querySelector('.product-page__main-image')
function onMainProduct(element: Element, data: IBasicNew) {
  element.addEventListener('click', (e) => {
    if (!(e!.target instanceof HTMLElement)) { return; }
    const target: HTMLElement  = e.target;
    const isBuyBtm = ['product__block__button button_base'].includes(target.className);
    if(isBuyBtm) {return}
    openProductPage(data)
  });
}


const onPoductImages = (even: Event) => {
  if (!(even!.target instanceof HTMLImageElement)) { return; }
  const target: HTMLImageElement = even.target;
  const isPoductMain = ['product-page__main-image'].includes(target.className);
  const isImageOther = ['imageOther'].includes(target.className);

  if (isPoductMain) {
    openMainImg(target)
  }
  if (isImageOther) {
    swopMainAndSecandImage(target)
  }
}
productpageImages?.addEventListener('click', onPoductImages);
export default onMainProduct;

function openMainImg(target: HTMLImageElement) {
  iamgePopup?.classList.add('iamgePopup-active');
  iamgePopupImage!.src = `${target.src}`;
  
  
  iamgePopup?.addEventListener('click', (e) => {
    if (!(e!.target instanceof HTMLElement)) { return; }
    const target: HTMLElement = e.target;
    const popupimage = ['iamgePopup__image'].includes(target.className);
    if (popupimage){return}
    iamgePopup?.classList.remove('iamgePopup-active');
  });

}
function swopMainAndSecandImage(target:HTMLImageElement) {
  const srcMainImage = mainImage!.src;
  const secandImage = target!.src;

  mainImage!.src = secandImage;
  target!.src = srcMainImage;
}