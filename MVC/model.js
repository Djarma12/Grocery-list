let groceries = JSON.parse(localStorage.getItem("groceries")) || [];

function addItemToGroceries(item) {
  groceries.push(item);
  localStorage.setItem("groceries", JSON.stringify(groceries));
}

function clearGroceries() {
  groceries = [];
  localStorage.removeItem("groceries");
}
