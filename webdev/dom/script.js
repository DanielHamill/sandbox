const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = "red";
p.onclick = () => alert("I'm red!");
document.body.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
h3.addEventListener("click", addDiv);
document.body.appendChild(h3);

const div = document.createElement('div');
div.style.border = "3px solid black"

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

div.appendChild(h1);

div.onclick = (e) => {e.target.style.backgroundColor = 'pink'};

const another_p = document.createElement('p')
another_p.textContent = "ME TOO!"
another_p.onclick = (e) => console.log(e);

div.appendChild(another_p)

function addDiv() {
    document.body.appendChild(div)
}