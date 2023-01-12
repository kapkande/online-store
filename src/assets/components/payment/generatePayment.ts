import closePayment from "./closePayment";
import paymentComplete from "./paymentComplete";

function generatePayment() {
  const overlay = document.querySelector('.overlay');
  overlay?.classList.remove('hidden');
  overlay?.addEventListener('click', closePayment);

  const payment = document.createElement('div');
  payment.classList.add('payment');

  const title = document.createElement('h2');
  title.classList.add('payment__title');
  title.innerText = 'Payment info';
  payment.appendChild(title);

  const name = document.createElement('input');
  name.type = 'text';
  name.placeholder = 'Name + Surname';
  name.classList.add('payment__input', 'payment__name');
  name.required = true;
  name.pattern = "\\w{3,}\\s\\w{3,}";
  payment.appendChild(name);

  const phone = document.createElement('input');
  phone.type = 'tel';
  phone.placeholder = 'Phone number';
  phone.classList.add('payment__input', 'payment__phone');
  phone.required = true;
  phone.pattern = "\\+\\d{9,}";
  payment.appendChild(phone)

  const address = document.createElement('input');
  address.type = 'text';
  address.placeholder = 'Delivery address';
  address.classList.add('payment__input', 'payment__address');
  address.required = true;
  address.pattern = '\\w{5,}(\\s\\w{5,}){2,}';
  payment.appendChild(address);

  const email = document.createElement('input');
  email.type = 'email';
  email.placeholder = 'E-mail';
  email.classList.add('payment__input', 'payment__email');
  email.required = true;
  payment.appendChild(email);

  const card = document.createElement('div');
  card.classList.add('payment__card');
  payment.appendChild(card);

  const subheader = document.createElement('h3');
  subheader.classList.add('card__header');
  subheader.innerText = 'Card details';
  card.appendChild(subheader);

  const cardTop = document.createElement('div');
  cardTop.classList.add('card__top');
  card.appendChild(cardTop);

  const cardIcon = document.createElement('img');
  cardIcon.classList.add('card__icon');
  cardIcon.src = 'card.png';
  cardTop.appendChild(cardIcon);

  const cardnum = document.createElement('input');
  cardnum.type = 'text';
  cardnum.placeholder = 'Card number';
  cardnum.classList.add('payment__input', 'card__number');
  cardnum.required = true;
  cardnum.maxLength = 16;
  cardnum.oninput = () => {cardnum.value = cardnum.value.replace(/[^0-9]/g, '')};
  cardnum.pattern = '\\d{16}';
  cardnum.addEventListener('change', () => {
    switch (cardnum.value[0]) {
      case '2': {
        cardIcon.src = 'mir.png';
        break;
      }
      case '4': {
        cardIcon.src = 'mastercard.png';
        break;
      }
      case '5': {
        cardIcon.src = 'visa.png';
        break;
      }
      default: cardIcon.src = 'card.png';
    }
  });
  cardTop.appendChild(cardnum);

  const cardBottom = document.createElement('div');
  cardBottom.classList.add('card__bottom');
  card.appendChild(cardBottom);

  const exp = document.createElement('input');
  exp.type = 'tel';
  exp.placeholder = 'MM/YY';
  exp.classList.add('payment__input', 'card__exp');
  exp.required = true;
  exp.pattern = '^(0[1-9]|1[0-2])\\/?([0-9]{2})'
  exp.maxLength = 5;
  exp.addEventListener('keypress', () => {
    if (exp.value.length == 2) {
      exp.value += '/';
    }
  });
  cardBottom.appendChild(exp);

  const cvc = document.createElement('input');
  cvc.type = 'tel';
  cvc.placeholder = 'CVC';
  cvc.classList.add('payment__input', 'card__cvc');
  cvc.required = true;
  cvc.maxLength = 3;
  cvc.oninput = () => {cvc.value = cvc.value.replace(/[^0-9]/g, '')};
  cvc.pattern = '\\d{3}';
  cardBottom.appendChild(cvc);

  const pay = document.createElement('button');
  pay.classList.add('button_base', 'button_pay');
  pay.innerText = 'Pay now';
  pay.addEventListener('click', paymentComplete);
  payment.appendChild(pay);

  document.querySelector('.basket')?.after(payment);
}

export default generatePayment;