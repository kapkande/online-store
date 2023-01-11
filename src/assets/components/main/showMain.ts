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
  
  if (document.querySelector('.payment')) {
    document.querySelector('.payment')?.remove();
  }
}

export default showMain;