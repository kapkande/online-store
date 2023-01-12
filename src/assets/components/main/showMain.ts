import transformationLinck from "../transformationLinck";
function showMain() {
  const main = document.querySelector('.root-page');
  main?.classList.remove('hidden');

  const productPage = document.querySelector('.product-page')

  //remove modal windows
  if (document.querySelector('.basket')) {
    document.querySelector('.basket')?.remove();
  }
  if (!(productPage?.classList.contains('hidden'))) {
    productPage?.classList.add('hidden')
  }

  const allLinck = document.location.href.split('/')
  const linkWebsite = allLinck[allLinck.length - 1]; 
  // allLinck.splice(3, allLinck.length - 4);
  // window.history.replaceState({}, '', `${allLinck.splice(3, allLinck.length - 4)}/${linkWebsite}`)
}

export default showMain;