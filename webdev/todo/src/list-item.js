import "./list-item.css"

class ListItem {
    constructor(text) {
        this.text = text;
    }
}

function listDOMElement(listItem) {
    const itemContainer = document.createElement("div");
    const hr = document.createElement("hr");
    const p = document.createElement("p");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", function(){
        if (checkbox.checked) {
            p.style.textDecoration = "line-through"
        }
        else {
            p.style.textDecoration = ""
        }
    })
    p.textContent = listItem.text;
    itemContainer.appendChild(checkbox)
    itemContainer.appendChild(p)
    return itemContainer
}

export { ListItem, listDOMElement }