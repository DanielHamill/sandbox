import "./styles/index.css"
import { createAbout } from "./about.js"

const aboutButton = document.querySelector("#navAbout")

aboutButton.addEventListener("click", createAbout)