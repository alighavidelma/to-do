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
