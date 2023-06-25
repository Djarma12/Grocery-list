import { useState } from "react";

const GroceryItems = [
  { name: "Bannana", quantity: 4, price: 100, id: crypto.randomUUID() },
  { name: "Strudeli", quantity: 1, price: 50, id: crypto.randomUUID() },
  { name: "Pistate", quantity: 10, price: 50, id: crypto.randomUUID() },
];

function App() {
  const [groceryList, setGroceryList] = useState(GroceryItems);
  const [selectedGrocery, setSelectedGrocery] = useState(null);

  function handleItem(item) {
    setGroceryList((items) => [...items, item]);
  }

  function handleClearList() {
    setGroceryList([]);
  }

  function handleSelection(grocery) {
    setSelectedGrocery(grocery);
  }

  function handleEditName(name) {
    setGroceryList((groceries) =>
      groceries.map((grocery) =>
        grocery.id === selectedGrocery.id ? { ...grocery, name: name } : grocery
      )
    );
    setSelectedGrocery(null);
  }

  function handleDelete(groceryDelete) {
    setGroceryList((groceries) =>
      groceries.filter((grocery) => grocery.id !== groceryDelete.id)
    );
    setSelectedGrocery(null);
  }

  return (
    <div className="container">
      <Budget groceryList={groceryList} />
      <GroceryForm onItem={handleItem} />
      <GroceryList
        groceryList={groceryList}
        onClearList={handleClearList}
        onSelection={handleSelection}
        selectedGrocery={selectedGrocery}
        onEditName={handleEditName}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

function Budget({ groceryList }) {
  const [mainBudget, setMainBudget] = useState("");

  const handleBudget = (e) => {
    setMainBudget(+e.target.value);
  };

  const groceryPrice = groceryList.reduce(
    (acc, grocery) => acc + +grocery.price * +grocery.quantity,
    0
  );

  function handleCalculate() {
    const budget = mainBudget - groceryPrice;
    if (budget < 0) alert(`Should be added to the budget: ${Math.abs(budget)}`);
    else if (budget > 0) alert(`You have more left in your budget: ${budget}`);
    else alert("You have the correct budget amount");
    setMainBudget("");
  }

  return (
    <div className="container">
      <h1>Budget:</h1>
      <input
        type="number"
        placeholder="Enter Main Budget"
        value={mainBudget}
        onChange={(e) => handleBudget(e)}
      />
      <Button clas="btn" onClick={handleCalculate}>
        Calculate
      </Button>
    </div>
  );
}

function GroceryForm({ onItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("a");
    if (!name || !quantity || !price) return;

    const id = crypto.randomUUID();
    const item = { name, quantity, price, id };
    onItem(item);
    setName("");
    setQuantity(1);
    setPrice("");
  }

  return (
    <form id="grocery-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Item Name"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Item Price"
      />
      <Button clas="btn">Submit</Button>
    </form>
  );
}

function GroceryList({
  groceryList,
  onClearList,
  onEditName,
  onSelection,
  selectedGrocery,
  onDelete,
}) {
  return (
    <>
      <h1>Grocery List:</h1>
      <ul id="grocery-list">
        {groceryList.map((grocery) => (
          <GroceryItem
            grocery={grocery}
            key={grocery.id}
            onSelection={onSelection}
            selectedGrocery={selectedGrocery}
            onEditName={onEditName}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <Button clas="btn" onClick={onClearList}>
        Clear all
      </Button>
    </>
  );
}

function GroceryItem({
  grocery,
  onEditName,
  onSelection,
  selectedGrocery,
  onDelete,
}) {
  const isSelected = selectedGrocery?.id === grocery.id;
  const [editText, setEditText] = useState(grocery.name);

  function handleEditText(e) {
    setEditText(e.target.value);
  }

  function handleSelect() {
    onSelection(grocery);
  }

  function handleEditName() {
    onEditName(editText);
  }

  function handleDelete() {
    onDelete(grocery);
  }

  return (
    <li>
      {isSelected ? (
        <input type="text" value={editText} onChange={handleEditText} />
      ) : (
        <span>{grocery.name}</span>
      )}

      <span>{grocery.quantity}</span>
      <span>{grocery.price}</span>

      <Button
        clas="edit-btn"
        onClick={isSelected ? handleEditName : handleSelect}
      >
        {isSelected ? "Save Changes" : "Edit"}
      </Button>

      <Button clas="delete-btn" onClick={handleDelete}>
        Delete
      </Button>
    </li>
  );
}

function Button({ onClick, clas, children }) {
  return (
    <button onClick={onClick} className={clas}>
      {children}
    </button>
  );
}
