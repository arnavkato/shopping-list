const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function(e) {
    let value = input.value;
    input.value = "";

    const item = document.createElement("li");
    const span = document.createElement("span");
    const deleteItem = document.createElement("button");

    item.appendChild(span);
    item.appendChild(deleteItem);

    
})