const content = document.querySelector("#content");

const h1 = document.createElement("h1");
h1.textContent = "Daniel Hamill";

const p = document.createElement("p");
p.textContent = "Hello, this is about me";

function createAbout() {
    content.innerHTML = "";
    content.appendChild(h1);
    content.appendChild(p);
}

export { createAbout };