import resetData from "../data/resetData";
import showMain from "../main/showMain";
import updateHeader from "../updateHeader";

function paymentComplete() {
  const overlay = document.querySelector('.overlay');
  const button: HTMLElement | null = document.querySelector('.button_pay');
  const payment = document.querySelector('.payment');
  if (payment?.querySelector(':invalid') == null) {
    button?.removeEventListener('click', paymentComplete);
    button?.classList.add('unknown');
    button!.innerText = 'Please wait...';
    setTimeout(() => {
      button?.classList.remove('unknown');
      button?.classList.add('valid');
      button!.innerText = 'Completed!';
      setTimeout(() => {
        overlay?.classList.add('hidden');
        resetData();
        updateHeader();
        showMain();
      }, 2000);
    }, 3000);
  } else {
    button?.removeEventListener('click', paymentComplete);
    button?.classList.add('invalid');
    button!.innerText = 'Please fill out the form';
    setTimeout(() => {
      button?.classList.remove('invalid');
      button!.innerText = 'Pay now';
      button?.addEventListener('click', paymentComplete);
    }, 3000);
  }
}

export default paymentComplete;