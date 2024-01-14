let searchInput = document.querySelector("#search-input");
let list = document.querySelector("#to-do-list");
let addInput = document.querySelector("#add-input");
let addBtn = document.querySelector("#add button");

//start of delete
list.addEventListener("click", (e) => {
  if (e.target.nodeName == "SPAN" && e.target.className == "delete") {
    e.target.parentNode.remove();
    if (list.children.length == 0) {
      let emptyMsg = document.createElement("div");
      emptyMsg.style.textAlign = "center";
      emptyMsg.style.color = "rgb(21, 255, 0)";
      emptyMsg.innerText = "Your list is empty";
      emptyMsg.id = "listEmpty";
      list.appendChild(emptyMsg);
    }
  }
});
//end of delete

// start of add
function createListItem(inputValue) {
  let item = document.createElement("li");
  item.className = "to-do-item";
  let title = document.createElement("span");
  title.className = "title";
  title.innerText = inputValue;
  let btn = document.createElement("span");
  btn.className = "delete";
  btn.innerText = "delete";
  item.appendChild(title);
  item.appendChild(btn);
  return item;
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.querySelector("#listEmpty")) {
    document.querySelector("#listEmpty").remove();
  }
  if (!addInput.value) {
    return;
  }
  list.appendChild(createListItem(addInput.value));
  addInput.value = "";
});
//end of add

//start of search
searchInput.addEventListener("input", (e) => {
  Array.from(list.children).map((element) => {
    if (document.querySelector("#listEmpty")) {
      return;
    }
    if (
      element
        .querySelector(".title")
        .innerText.toLowerCase()
        .includes(e.target.value.toLowerCase())
    ) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
});
//end of search
