/* eslint-disable no-useless-escape */
function generatePayment() {
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
  name.pattern = '\w{3,}\s\w{3,}';
  payment.appendChild(name);

  const phone = document.createElement('input');
  phone.type = 'tel';
  phone.placeholder = 'Phone number';
  phone.classList.add('payment__input', 'payment__phone');
  phone.required = true;
  payment.appendChild(phone)

  const address = document.createElement('input');
  address.type = 'text';
  address.placeholder = 'Delivery address';
  address.classList.add('payment__input', 'payment__address');
  address.required = true;
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
  cardnum.type = 'tel';
  cardnum.placeholder = 'Card number';
  cardnum.classList.add('card__number');
  cardnum.required = true;
  cardTop.appendChild(cardnum);

  const cardBottom = document.createElement('div');
  cardBottom.classList.add('card__bottom');
  card.appendChild(cardBottom);

  const exp = document.createElement('input');
  exp.type = 'tel';
  exp.placeholder = 'MM/YY';
  exp.classList.add('card__exp');
  exp.required = true;
  cardBottom.appendChild(exp);

  const cvc = document.createElement('input');
  cvc.type = 'tel';
  cvc.placeholder = 'CVC';
  cvc.classList.add('card__cvc');
  cvc.required = true;
  cardBottom.appendChild(cvc);

  const pay = document.createElement('button');
  pay.classList.add('button_base', 'button_pay');
  pay.innerText = 'Pay now';
  payment.appendChild(pay);

  document.querySelector('.basket')?.after(payment);
}

export default generatePayment;