"use strick";

// All initial elements
const payAmountBtn = document.querySelector("#payAmount");
const decrementBtn = document.querySelectorAll("#decrement");
const quantityElem = document.querySelectorAll("#quantity");
const incrementBtn = document.querySelectorAll("#increment");
const priceElem = document.querySelectorAll("#price");
const subtotalElem = document.querySelector("#subtotal");
const taxElem = document.querySelector("#tax");
const totalElem = document.querySelector("#total");

// Loop: for add event on multiple `increase` and `decrease` Button
for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    // collect the value of quantity textContent
    let increment = Number(this.previousElementSibling.textContent);

    // Plus
    increment++;

    // show the increment variable value on quantity element
    // base on clicked increment button sibling
    this.previousElementSibling.textContent = increment;

    totalCalc();
  });

  decrementBtn[i].addEventListener("click", function () {
    // collect
    let decrement = Number(this.nextElementSibling.textContent);

    // minus
    decrement < 1 ? 0 : decrement--;
    // show
    this.nextElementSibling.textContent = decrement;

    totalCalc();
  });
}

// function: for calculating total amount of payment price
const totalCalc = function () {
  // declare all initial varaiable
  const tax = 0.05;
  let subtotal = 0;
  let totalTax = 0;
  let total = 0;

  // loop: for calculating `subtotal`
  for (let i = 0; i < quantityElem.length; i++) {
    subtotal +=
      Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
  }

  // show the `Subtotal` Variable value on subtotalElem element
  subtotalElem.textContent = subtotal.toFixed(2);

  // Calculating the totalTax
  totalTax = subtotal * tax;

  // show the totalTax on taxElem element
  taxElem.textContent = totalTax.toFixed(2);

  // calculating the total
  total = subtotal + totalTax;

  // show the total varaible value on the
  totalElem.textContent = total.toFixed(2);
  payAmountBtn.textContent = total.toFixed(2);
};
