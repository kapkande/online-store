function closePayment() {
  if (document.querySelector('.payment')) {
    document.querySelector('.payment')?.remove();
  }
  document.querySelector('.overlay')?.classList.add('hidden');
}

export default closePayment;