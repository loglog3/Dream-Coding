const input = document.querySelector(".input");
const button = document.querySelector(".button");
const lists = document.querySelector("ul");

function makeList() {
  if (input.value === "") {
    input.focus();
    return;
  }

  let list = document.createElement("li");
  list.setAttribute("class", "bookList");
  list.innerHTML = `${input.value}<span class="delete">delete</span>`;

  lists.appendChild(list);

  list.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    makeList();
  } else {
    console.log("키 입력");
  }
});

button.addEventListener("click", () => {
  makeList();
});

lists.addEventListener("click", (e) => {
  // console.log(e.target.className);

  if (e.target.className === "delete") {
    console.log("삭제");
    e.target.parentNode.remove();
  }
  // console.log(e.target.parentNode.tagName);
});
