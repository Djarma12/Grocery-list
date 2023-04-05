"use strict";
// Remove Edit and Delete list element
groceryList.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("delete-btn")) {
    const listItem = e.target.closest("li");

    groceries = groceries.filter((obj) => {
      console.log(obj.id, +listItem.dataset.index);
      return obj.id !== +listItem.dataset.index;
    });

    localStorage.setItem("groceries", JSON.stringify(groceries));
    groceryList.removeChild(e.target.closest("li"));
  }

  const itemEditInput = document.querySelector(".item-edit-input");

  if (e.target.classList.contains("edit-btn")) {
    const listItem = e.target.closest("li");
    listItem.querySelector(".item-name-label").style.display = "none";
    listItem.querySelector(".item-edit-input").style.display = "inline-block";
    listItem.querySelector(".edit-btn").style.display = "none";
    listItem.querySelector(".save-btn").style.display = "inline-block";
  }

  if (e.target.classList.contains("save-btn")) {
    const listItem = e.target.closest("li");
    listItem.querySelector(".item-name-label").textContent =
      listItem.querySelector(".item-edit-input").value;
    listItem.querySelector(".item-name-label").style.display = "inline-block";
    listItem.querySelector(".item-edit-input").style.display = "none";
    listItem.querySelector(".save-btn").style.display = "none";
    listItem.querySelector(".edit-btn").style.display = "inline-block";

    groceries.forEach((obj) => {
      console.log(obj.id, +listItem.dataset.index);
      if (obj.id === +listItem.dataset.index) {
        obj.name = listItem.querySelector(".item-edit-input").value;
      }
    });

    localStorage.setItem("groceries", JSON.stringify(groceries));
  }
});
