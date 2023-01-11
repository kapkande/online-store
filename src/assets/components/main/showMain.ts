function showMain() {
  const main = document.querySelector('.main__defaultPage');
  main?.classList.remove('hidden');

  //remove modal windows
  if (document.querySelector('.basket')) {
    document.querySelector('.basket')?.remove();
  }

  if (document.querySelector('.payment')) {
    document.querySelector('.payment')?.remove();
  }
}

export default showMain;