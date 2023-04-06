// Load groceries from storage and render the list
renderGroceryList();

// Add item to grocery list and save it in storage
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Get input values
  const name = itemNameInput.value.trim();
  const quantity = parseInt(itemQuantityInput.value);
  const price = itemPriceInput.value;

  // Validate input
  if (!name) {
    itemNameInput.style.borderColor = "red";
    itemNameInput.focus();
    return showAlert("Please enter a valid item name.");
  } else {
    itemNameInput.style.borderColor = "";
  }

  // Add item to grocery list
  const item = { name, quantity, price };
  addItemToGroceries(item);

  // Reset input values
  resetFormInputs();

  // Update grocery list
  renderGroceryList();

  // Inform user with success message
  showAlert("Item added successfully.");
});

// Clear items from local storage and the grocery list
clearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  clearGroceries();
  renderGroceryList();
});

// Calculate the remaining budget
budgetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let amountItems = groceries.reduce(
    (sum, obj) => sum + obj.quantity * obj.price,
    0
  );
  let change = mainBudgetInput.value - amountItems;

  if (change > 0) {
    showAlert(`You have more left in your budget: ${change}`);
  } else {
    showAlert(`Should be added to the budget: ${-change}`);
  }
});

// Remove Edit and Delete list element
groceryList.addEventListener("click", function (e) {
  e.preventDefault();
  const listItem = e.target.closest("li");
  if (!listItem) {
    return;
  }

  const deleteBtn = listItem.querySelector(".delete-btn");
  const editBtn = listItem.querySelector(".edit-btn");
  const saveBtn = listItem.querySelector(".save-btn");
  const nameLabel = listItem.querySelector(".item-name-label");
  const editInput = listItem.querySelector(".item-edit-input");

  if (e.target === deleteBtn) {
    const index = Array.from(groceryList.children).indexOf(listItem);
    groceries.splice(index, 1);
    localStorage.setItem("groceries", JSON.stringify(groceries));
    listItem.remove();
  } else if (e.target === editBtn) {
    nameLabel.style.display = "none";
    editInput.style.display = "inline-block";
    editBtn.style.display = "none";
    saveBtn.style.display = "inline-block";
  } else if (e.target === saveBtn) {
    const newName = editInput.value;
    nameLabel.textContent = newName;
    nameLabel.style.display = "inline-block";
    editInput.style.display = "none";
    saveBtn.style.display = "none";
    editBtn.style.display = "inline-block";

    const index = Array.from(groceryList.children).indexOf(listItem);
    groceries[index].name = newName;
    localStorage.setItem("groceries", JSON.stringify(groceries));
  }
});
