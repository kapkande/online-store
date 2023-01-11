function showMain() {
  const main = document.querySelector('.root-page');
  main?.classList.remove('hidden');

  const productPage = document.querySelector('.product-page')
 

  //remove modal windows
  if (document.querySelector('.basket')) {
    document.querySelector('.basket')?.remove();
  }
  if (!( productPage?.classList.contains('hidden'))) {
    productPage?.classList.add('hidden')
  }
  }

export default showMain;