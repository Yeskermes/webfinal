/*table variable declaration*/
const form = document.querySelector("form");
const table = document.querySelector("table");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const array = [];
let rowIndex;


/*tablehead insertion*/
const tableHead = data => {
  let ObjectKeys;
  for (let items of data) {
    ObjectKeys = Object.keys(items); /*method returns an array of a given object's */
  }
  let row = document.createElement("tr");
  for (let key of ObjectKeys) {
    let heading = document.createElement("th");
    heading.innerText = key;
    row.appendChild(heading);
  }
  thead.appendChild(row); /*append the row to the thead*/
  table.appendChild(thead); /*append the thead to the table*/
};

/*tablebody insertion*/
const tableBody = data => {
  for (let items of data) {
    let ObjectKeys = Object.values(items); /*method returns an array of a given object's */
    let row = document.createElement("tr");
    for (let values of ObjectKeys) {
      let cell = document.createElement("td");
      cell.innerText = values;
      row.appendChild(cell);/*append the cell to the row*/
    }
    tbody.appendChild(row);/*append the row to the table body*/
  }
  table.appendChild(tbody); /*append the tbody to the table*/
  console.log(table);
};

/**/
const createItem = () => {
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  if (email === "") {
    alert("item email can not be left empty");
    document.querySelector("#email").focus();
    return;
  }
  if (name === "") {
    alert("item name can not be left empty");
    document.querySelector("#name").focus();
    return;
  }
  if (password === "") {
    alert("item date can not be left empty");
    document.querySelector("#password").focus();
    return;
  }
  const formData = { /*JS object*/
    email,
    name,
    password
  };
  array.push(formData);

  try {
    if (localStorage.getItem("users") === null) { /*Get the value of the specified local storage item*/
      localStorage.setItem("users", JSON.stringify(array));
    } else {
      let storage = JSON.parse(localStorage.getItem("users")); /*to convert text into a JavaScript object*/
      storage.push(formData);
      localStorage.setItem("users", JSON.stringify(storage));
      console.log(storage);
    }
  } catch (err) { /*catch block catches the error and show it on console*/
    console.error(err);
  }
  alert("You have successfully saved the product item");
  form.reset();
};

const readItem = () => {
  const storage = JSON.parse(localStorage.getItem("users"));
  if (storage && storage.length >= 1) {
    if (table.rows.length < 1) {
      tableHead(storage);
      tableBody(storage);
    }
  } else {
    return;
  }
};
/*activateItem function activation when clciked*/
table.onclick = () => {
  let row = table.rows;
  for (let i = 0; i < row.length; i++) {
    row[i].addEventListener("click", activateItem);
  }
};

function activateItem() {
  rowIndex = this.rowIndex;
  let email = document.querySelector("#email");
  let name = document.querySelector("#name");
  let password = document.querySelector("#password");

  email.value = this.cells[0].innerText;
  name.value = this.cells[1].innerText;
  password.value = this.cells[2].innerText;
}

const updateItem = () => {
  const storage = JSON.parse(localStorage.getItem("users"));
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  let tableRowIndex = rowIndex - 1;
  if (tableRowIndex) {
    if (email === "") {
      alert("item author can not be left empty");
      document.querySelector("#email").focus();
      return;
    }
    if (name === "") {
      alert("item name can not be left empty");
      document.querySelector("#name").focus();
      return;
    }
    if (password === "") {
      alert("item date can not be left empty");
      document.querySelector("#password").focus();
      return;
    }
    let confirm = window.confirm("Are you sure you want to update this item?");
    let tableRowIndex = rowIndex - 1;
      if (tableRowIndex) {
      tableRowIndex && storage.splice(tableRowIndex, 1);
      localStorage.setItem("users", JSON.stringify(storage));
      window.location.reload();
      console.log(storage);
    } else {
      return;}
    if (confirm === true) {
      tableRowIndex &&
        storage.splice(tableRowIndex, 0, { /*adds elements to array*/
          email,
          name,
          password
        });
      localStorage.setItem("users", JSON.stringify(storage));
      console.log(storage);
      window.alert("Item list have been updated");
      window.location.reload();
    } else {
      return;
    }
  } else {
    return;
  }
};

/**/
const deleteItem = () => {
  let confirm = window.confirm("Are you sure you want to delete this item?");
  if (confirm === true) {
    const storage = JSON.parse(localStorage.getItem("users"));
    let tableRowIndex = rowIndex - 1;
    if (tableRowIndex) {
      tableRowIndex && storage.splice(tableRowIndex, 1);
      localStorage.setItem("users", JSON.stringify(storage));
      window.location.reload();
      console.log(storage);
    } else {
      return;
    }
  } else {
    return false;
  }
};
