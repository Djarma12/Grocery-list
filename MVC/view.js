const form = document.getElementById("grocery-form");
const itemNameInput = document.getElementById("item-name");
const itemQuantityInput = document.getElementById("item-quantity");
const itemPriceInput = document.getElementById("item-price");
const groceryList = document.getElementById("grocery-list");
const clearBtn = document.getElementById("clear-btn");
const budgetForm = document.getElementById("budget-form");
const mainBudgetInput = document.getElementById("main-budget");

function renderGroceryList() {
  let groceryListHTML = "";
  if (groceries.length) {
    groceryListHTML = groceries
      .map((obj) => {
        return `<li>
        <label class="item-name-label">${obj.name}</label>
        <input type="text" class="item-edit-input" style="display: none" />
        <span>${obj.quantity}</span>
        <span>${obj.price}</span>
        <button class="edit-btn">Edit</button>
        <button class="save-btn" style="display: none">Save Changes</button>
        <button class="delete-btn">Delete</button>
      </li>`;
      })
      .join("");
  }
  groceryList.innerHTML = groceryListHTML;
}

function resetFormInputs() {
  itemNameInput.value = "";
  itemQuantityInput.value = 1;
  itemPriceInput.value = "";
}

function showAlert(message) {
  alert(message);
}
