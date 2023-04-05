"use strict";

const form = document.getElementById("grocery-form");
const itemNameInput = document.getElementById("item-name");
const itemQuantityInput = document.getElementById("item-quantity");
const itemPriceInput = document.getElementById("item-price");
const groceryList = document.getElementById("grocery-list");
const clearBtn = document.getElementById("clear-btn");
const budgetForm = document.getElementById("budget-form");
const mainBudgetInput = document.getElementById("main-budget");
const deleteBtn = document.querySelector("delete-btn");

let groceries = [];

// Load from storage and display
const loadItems = function () {
  const items = JSON.parse(localStorage.getItem("groceries"));
  if (items) {
    groceries = items;
    groceries.forEach((obj) => {
      let text = `<li data-index=${obj.id}>
        <label class="item-name-label">${obj.name}</label>
        <input type="text" class="item-edit-input" style="display: none" />
        <span>${obj.quantity}</span>
        <span>${obj.price}</span>
        <button class="edit-btn">Edit</button>
        <button class="save-btn" style="display: none">Save Changes</button>
        <button class="delete-btn">Delete</button>
      </li>`;
      // Update grocery list
      groceryList.insertAdjacentHTML("afterbegin", text);
    });
  }
};
loadItems();

// Adding items to list and save them in storage
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Get input values
  const name = itemNameInput.value.trim();
  const quantity = parseInt(itemQuantityInput.value);
  const price = itemPriceInput.value;
  const id = Date.now();

  // Validate input
  if (name === "") {
    itemNameInput.style.borderColor = "red";
    itemNameInput.focus();
    return alert("Please enter a valid item name.");
  } else {
    itemNameInput.style.borderColor = "";
  }

  // Add item to grocery list
  const item = { name, quantity, price, id };
  groceries.push(item);

  // Save grocery list to local storage
  localStorage.setItem("groceries", JSON.stringify(groceries));

  // Reset input values
  itemNameInput.value = "";
  itemQuantityInput.value = 1;
  itemPriceInput.value = "";

  let text = `<li data-index=${id}>
    <label class="item-name-label">${name}</label>
    <input type="text" class="item-edit-input" style="display: none" />
    <span>${quantity}</span>
    <span>${price}</span>
    <button class="edit-btn">Edit</button>
    <button class="save-btn" style="display: none">Save Changes</button>
    <button class="delete-btn">Delete</button>
  </li>`;

  // Update grocery list
  groceryList.insertAdjacentHTML("afterbegin", text);

  // Inform user with success message
  alert("Item added successfully.");
});

// Clear items from local storage, and HTML
clearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  groceries = [];
  console.log(groceries);
  localStorage.clear();
  groceryList.innerHTML = "";
});

// Budget calculation
budgetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let amountItems = 0;
  groceries.forEach((obj) => {
    amountItems += +obj.quantity * +obj.price;
  });
  let change = mainBudgetInput.value - amountItems;

  if (change > 0) {
    return alert(`You have more left in your budget: ${change}`);
  } else {
    return alert(`Should be added to the budget: ${-change}
    `);
  }
});
