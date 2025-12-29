import "./styles/index.css"
import { createAbout } from "./about.js"
import { createProjects } from "./projects.js"
import { createContact } from "./contact.js"

const aboutButton = document.querySelector("#navAbout")
const navProjectsButton = document.querySelector("#navProjects")
const navContactButton = document.querySelector("#navContact")

aboutButton.addEventListener("click", createAbout)
navProjectsButton.addEventListener("click", createProjects)
navContactButton.addEventListener("click", createContact)