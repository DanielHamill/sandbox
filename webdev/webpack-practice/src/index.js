import "./styles.css";
import { greeting } from "./greeting.js";
import testImage from "./testimg.png";

const image = document.createElement("img");
image.src = testImage;
   
document.body.appendChild(image);

console.log(greeting);
