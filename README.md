# Grocery list

This task involves creating a grocery list that allows users to add items, with options to edit, delete, and clear the list. The list is displayed in two containers, with one container for submitting items and the other for displaying the list. The user can add the name, quantity, and price of each item, and the budget can be calculated by subtracting the total cost of the items from the main budget. The project also includes validation to prevent the submission of blank items and to alert users of successful submissions.

You can view the project live here:
[Grocery list](https://grocerylist-dusan-project.netlify.app/)

---

## Description

Grocery list with budget calculations

The objective of this task  is to create a grocery list that accepts an item and also saves it to local storage. There will be two containers, one for submitting an item, and the other will display the list of entries of the submitted items and a button for clearing the items of the list at the bottom.

#### Technologies

- HTML
- CSS
- JS
- React (on another branch)

Notes:

The first container has:
- One input for entering the name of the item
- One input for entering the quantity of the item  (default is 1)
- ‘Submit’ button. When the user clicks on this button, the item is displayed in the second container and saved to the local storage. 


The second container has:
List of entries containing the items added
Each entry contains: 
- name of the item (non clickable field)
- quantity of the item (non clickable field)
- ‘Edit’ option ( edit the name and/or quantity). If the ‘Edit’ option is clicked, the name and quantity labels become inputs giving the user the chance to update the fields and a ‘Save Changes’ button appears under the inputs. By clicking this button, the new changes will be displayed in the list and updated in the local storage.
- ‘Delete’ option/button ( item is removed from the DOM and from the local storage)
- ‘Clear All’ option/button at the bottom of the list ( by clicking this button, all items from the list will be removed from the DOM and from the local storage. If the list is empty, display a message ‘List is empty’. )

Validation: 


a.) If the user tries to submit a blank item, the top container in the project alerts the user to add a valid item (with an “alert”(red) error message under the input). 
b.) If the user successfully adds an item, the top container informs the user with a “success”(green) message.


Bonus part: 

- Each grocery item should have a price displayed, next to the name. There should be another(third) input for entering the price amount. The price should be saved with each item, when clicking the ‘Submit’ button.

- The user should have an option to calculate the grocery budget amount. There should be a new field/input added at the top of the landing page (above all other inputs) to enter the main shopping budget, and a button next to it, with label "Calculate".

When this button is clicked, the amount of all grocery items should be subtracted from the main budget amount and a message displayed as a popup.
If the result is greater than 0, display the amount that is left in the main budget.
If the result is less than 0, display a message indicating the amount that the user needs to add to the budget.

## References

The application was made for a Serbian company, which accepted my CV, where I entered the narrow selection circle, after which I had to do a technical task.


[Back To The Top](#grocery-list)
