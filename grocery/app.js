const toast = document.querySelector(".toasts");
const message = document.querySelector("#warning-msg");

const inputGrocery = document.querySelector("#input-grocery");
const submit = document.querySelector(".submit-btn");
const data = document.querySelector(".data");
const clearItem = document.querySelector(".clear-btn");

let editElement;
let editId = "";
let editFlag = false;

window.addEventListener("DOMContentLoaded", function () {
  let items = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];

  if (items.length > 0) {
    items.forEach(function (item) {
      makeElement(item.id, item.value);
    });
  }
});

clearItem.addEventListener("click", function () {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      data.removeChild(item);
    });
  }
  showMessage("Empty List", "danger");
  clearItem.style.visibility = "hidden";

  localStorage.removeItem("list");
  setBackToDefault();
});

submit.addEventListener("click", function () {
  const value = inputGrocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    makeElement(id, value);
    showMessage("Item added to the list", "success");

    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerText = value;
    showMessage("Value Changed", "success");
    editLocalStorage(editId, value);
    setBackToDefault();
  } else {
    showMessage("Please Enter a value", "danger");
    setBackToDefault();
  }
});

function makeElement(id, value) {
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = addItem(value);
  data.appendChild(element);

  const deleteBtn = element.querySelector("#delete");
  const editBtn = element.querySelector("#edit");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  clearItem.style.visibility = "visible";
}

function editItem(e) {
  const element =
    e.currentTarget.parentElement.parentElement.parentElement.parentElement;
  editElement =
    e.currentTarget.parentElement.parentElement.previousElementSibling;
  inputGrocery.value = editElement.innerText;
  editFlag = true;
  editId = element.dataset.id;
  submit.innerText = "Edit";
}

function deleteItem(e) {
  const element =
    e.currentTarget.parentElement.parentElement.parentElement.parentElement;
  const id = element.dataset.id;
  data.removeChild(element);
  if (data.children.length === 0) {
    clearItem.style.visibility = "hidden";
  }
  showMessage("Item Removed", "danger");
  setBackToDefault();
  removeFromLocalStorage(id);
}

function setBackToDefault() {
  inputGrocery.value = "";
  submit.innerText = "Submit";
  editFlag = false;
  editId = "";
}

function showMessage(value, type) {
  message.innerText = value;
  toast.classList.add(`toast-${type}`);
  setTimeout(showToast, 1000);
}

function showToast() {
  message.innerText = "";
  if (toast.classList.contains("toast-danger")) {
    toast.classList.remove("toast-danger");
  } else if (toast.classList.contains("toast-success")) {
    toast.classList.remove("toast-success");
  }
}

function addItem(value) {
  let toPush = `<div class="items">
    <p>${value}</p>
    <div class="options">
      <a href="#"
        ><i class="bi bi-pencil-square" id="edit"></i
      ></a>
      <a href="#"><i class="bi bi-trash-fill" id="delete"></i></a>
    </div>
  </div>`;

  return toPush;
}

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });

  localStorage.setItem("list", JSON.stringify(items));
}
