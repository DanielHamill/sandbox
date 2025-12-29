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
    p.textContent = listItem.text;
    itemContainer.appendChild(hr)
    itemContainer.appendChild(p)
    return itemContainer
}

export { ListItem, listDOMElement }