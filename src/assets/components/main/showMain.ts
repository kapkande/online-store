function showMain() {
  const main = document.querySelector('.root-page');
  main?.classList.remove('hidden');

  //remove modal windows
  if (document.querySelector('.basket')) {
    document.querySelector('.basket')?.remove();
  }
}

export default showMain;