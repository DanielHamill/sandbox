const content = document.querySelector("#content");

const h1 = document.createElement("h1");
h1.textContent = "My projects";

const p = document.createElement("p");
p.textContent = "these are my projects";

function createProjects() {
    content.innerHTML = "";
    content.appendChild(h1);
    content.appendChild(p);
}

export { createProjects };