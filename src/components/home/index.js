import D from "../../images/CapD.svg";
import "./style.css";

export default function homePage() {
  const component = document.createElement("div");
  component.classList.add("home-page");

  const heading = document.createElement("div");
  heading.classList.add("heading");

  const goodFood = document.createElement("h2");
  goodFood.textContent = "We love good food!";
  heading.appendChild(goodFood);

  const since = document.createElement("p");
  since.textContent = "Making the best food in the world since 29th Oct 2020";
  heading.appendChild(since);

  component.appendChild(heading);

  const logo = new Image();
  logo.src = D;
  logo.classList.add("logo");
  component.appendChild(logo);

  return component;
}
