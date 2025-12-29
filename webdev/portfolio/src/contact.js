const content = document.querySelector("#content");

const h1 = document.createElement("h1");
h1.textContent = "Contact";

const p = document.createElement("p");
p.textContent = "this is how you can contact me";

function createContact() {
    content.innerHTML = "";
    content.appendChild(h1);
    content.appendChild(p);
}

export { createContact };