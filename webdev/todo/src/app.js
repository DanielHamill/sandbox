import { ListItem, listDOMElement } from "./list-item";
import "./app.css"

const app = document.querySelector("#app");
const itemsContainer = document.createElement("div")

const todoList = [];

function renderList() {
    itemsContainer.innerHTML = ""
    for (const i in todoList) {
        // console.log(todoList[i])
        itemsContainer.appendChild(
            listDOMElement(todoList[i])
        )
        if (i < todoList.length - 1) {
            itemsContainer.appendChild(document.createElement("hr"));
        }
    }
}

function toDoApp() {
    const input = document.createElement("input");
    const button = document.createElement("button");

    button.addEventListener("click", function() {
        // console.log(input.value);
        todoList.push(new ListItem(input.value))
        input.value = "";
        renderList()
    });
    button.textContent = "Add Item"
    
    app.appendChild(input)
    app.appendChild(button)
    app.appendChild(itemsContainer)
}

export { toDoApp }