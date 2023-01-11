function closeProductPage() {
  const rootPage: Element | null = document.querySelector('.root-page');
  rootPage?.classList.remove('root-page-close');
  const productPageActive: Element | null = document.querySelector('.product-page');
  productPageActive?.classList.remove('product-page-active');

  

}
export default closeProductPage;
