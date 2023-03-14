var itemInput = document.getElementById("itemInput");
var addButton = document.getElementById("addItem");
var itemList = document.getElementById("itemList");

function addItem() {
  if (itemInput.value === "") {
    alert("Por favor ingresa un ítem");
  } else {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", toggleItem);
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(itemInput.value));
    itemList.appendChild(li);
    itemInput.value = "";

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", deleteItem);
    li.addEventListener("mouseover", showDeleteButton);
    li.addEventListener("mouseout", hideDeleteButton);
  }
}

function deleteItem() {
  var li = this.parentNode;
  var ul = li.parentNode;
  ul.removeChild(li);
}

function toggleItem() {
  var li = this.parentNode;
  li.classList.toggle("done");
}

function showDeleteButton() {
  var deleteButton = this.querySelector(".delete");
  deleteButton.style.display = "inline-block";
}

function hideDeleteButton() {
  var deleteButton = this.querySelector(".delete");
  deleteButton.style.display = "none";
}

addButton.addEventListener("click", addItem);

itemInput.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    addItem();
  }
});
