// selectors ----------------------------------
// pages
const homepage = document.querySelector('.homepage');
const pageOne = document.querySelector('.pageOne');
const pageTwo = document.querySelector('.pageTwo');
const pageThree = document.querySelector('.pageThree');
const pageFour = document.querySelector('.pageFour');
const finalInvoice = document.querySelector('.finalInvoice');

// inputs -------------------------------------

//homepage

const button__createInvoice = document.querySelector('.button__createInvoice');

// pageOne

const invoiceNumber__input = document.querySelector('.invoiceNumber__input');
const invoiceDate__input = document.querySelector('.invoiceDate__input');
const invoiceDueDate__input = document.querySelector('.invoiceDueDate__input');

const firstPage__button = document.querySelector('.firstPage__button');

const invoiceNumber__display = document.querySelector(
  '.invoiceNumber__display'
);
const invoiceDate__display = document.querySelector('.invoiceDate__display');
const invoiceDueDate__display = document.querySelector(
  '.invoiceDueDate__display'
);

// pageTwo
const invoiceFrom__input = document.querySelector('.invoiceFrom__input');
const invoiceFromAddress__input = document.querySelector(
  '.invoiceFromAddress__input'
);
const invoiceFromPostcode__input = document.querySelector(
  '.invoiceFromPostcode__input'
);

const secondPage__button = document.querySelector('.secondPage__button');

const invoiceFrom__display = document.querySelector('.invoiceFrom__display');
const invoiceFromAddress__display = document.querySelector(
  '.invoiceFromAddress__display'
);
const invoiceFromPostcode__display = document.querySelector(
  '.invoiceFromPostcode__display'
);

// pageThree
const invoiceTo__input = document.querySelector('.invoiceTo__input');
const invoiceToAddress__input = document.querySelector(
  '.invoiceToAddress__input'
);
const invoiceToPostcode__input = document.querySelector(
  '.invoiceToPostcode__input'
);

const thirdPage__button = document.querySelector('.thirdPage__button');

const invoiceTo__display = document.querySelector('.invoiceTo__display');
const invoiceToAddress__display = document.querySelector(
  '.invoiceToAddress__display'
);
const invoiceToPostcode__display = document.querySelector(
  '.invoiceToPostcode__display'
);

const invoiceCompany__display = document.querySelector(
  '.invoiceCompany__display'
);

// pageFour

const item__input = document.querySelector('.item__input');
const quantity__input = document.querySelector('.quantity__input');
const price__input = document.querySelector('.price__input');

const createInvoice__button = document.querySelector('.createInvoice__button');
const addItem__button = document.querySelector('.addItem__button');

const alertMessageOne = document.querySelector('.alertMessageOne');
const alertMessageTwo = document.querySelector('.alertMessageTwo');
const alertMessageThree = document.querySelector('.alertMessageThree');
const alertMessageFour = document.querySelector('.alertMessageFour');

// Invoice Page

const finalInvoice__items = document.querySelector('.finalInvoice__items');
const subTotal = document.querySelector('.sub-total');
const finalTotal = document.querySelector('.final-total');

const button__printDocument = document.querySelector('.button__printDocument');

let runningtotal = 0;

let numberOfItems = 0;

function refeshInputValues() {
  item__input.value = '';
  quantity__input.value = '';
  price__input.value = '';
}

function inputHaveString(inputValue) {
  return /^[a-zA-Z]+$/.test(inputValue);
}

button__createInvoice.addEventListener('click', (e) => {
  e.preventDefault();
  homepage.style.display = 'none';
  pageOne.style.display = 'flex';
});

firstPage__button.addEventListener('click', (e) => {
  e.preventDefault();
  let invoiceNumber = invoiceNumber__input.value;
  let invoiceDate = invoiceDate__input.value;
  let invoiceDueDate = invoiceDueDate__input.value;

  if (invoiceNumber === '' || invoiceDate === '' || invoiceDueDate === '') {
    alertMessageOne.textContent = 'All fields must be completed!';
  } else {
    invoiceNumber__display.textContent = `Number: #${invoiceNumber}`;
    invoiceDate__display.textContent = `Created Date: ${invoiceDate}`;
    invoiceDueDate__display.textContent = `Due Date: ${invoiceDueDate}`;
    pageOne.style.display = 'none';
    pageTwo.style.display = 'flex';
  }
});

secondPage__button.addEventListener('click', (e) => {
  e.preventDefault();
  let invoiceFrom = invoiceFrom__input.value;
  let invoiceFromAddress = invoiceFromAddress__input.value;
  let invoiceFromPostcode = invoiceFromPostcode__input.value;

  if (
    invoiceFrom === '' ||
    invoiceFromAddress === '' ||
    invoiceFromPostcode === ''
  ) {
    alertMessageTwo.textContent = 'All fields must be completed!';
  } else {
    invoiceFrom__display.textContent = invoiceFrom;
    invoiceCompany__display.textContent = invoiceFrom;
    invoiceFromAddress__display.textContent = invoiceFromAddress;
    invoiceFromPostcode__display.textContent = invoiceFromPostcode;
    pageTwo.style.display = 'none';
    pageThree.style.display = 'flex';
  }
});

thirdPage__button.addEventListener('click', (e) => {
  e.preventDefault();
  let invoiceTo = invoiceTo__input.value;
  let invoiceToAddress = invoiceToAddress__input.value;
  let invoiceToPostcode = invoiceToPostcode__input.value;

  if (invoiceTo === '' || invoiceToAddress === '' || invoiceToPostcode === '') {
    alertMessageThree.textContent = 'All fields must be completed!';
  } else {
    invoiceTo__display.textContent = invoiceTo;
    invoiceToAddress__display.textContent = invoiceToAddress;
    invoiceToPostcode__display.textContent = invoiceToPostcode;
    pageThree.style.display = 'none';
    pageFour.style.display = 'flex';
  }
});

addItem__button.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    inputHaveString(quantity__input.value) ||
    inputHaveString(price__input.value)
  ) {
    alertMessageFour.textContent = 'Quantity/price needs to be a number';
  } else {
    if (numberOfItems < 6) {
      numberOfItems++;
      const HTML = `<div class="item">
      <p class="item__item">${item__input.value}</p>
      <p class="item__quantity">${quantity__input.value}</p>
      <p class="item__price">£${price__input.value}</b>
    </div>`;

      // if quantity left blank

      quantity__input.value === ''
        ? (runningtotal += Number(price__input.value))
        : (runningtotal +=
            Number(price__input.value) * Number(quantity__input.value));

      finalInvoice__items.insertAdjacentHTML('beforeEnd', HTML);

      subTotal.textContent = `Sub-Total: £${runningtotal}`;
      finalTotal.textContent = `Grand Total: £${(runningtotal * 1.2).toFixed(
        2
      )}`;
      alertMessageFour.textContent = 'Item Added';
      refeshInputValues();
    } else
      alertMessageFour.textContent =
        'Create the invoice! Maximum number of items added';
  }
});

createInvoice__button.addEventListener('click', (e) => {
  e.preventDefault();
  pageFour.style.display = 'none';
  finalInvoice.style.display = 'flex';
});

button__printDocument.addEventListener('click', () => {
  window.print();
});
