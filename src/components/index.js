import homePage from "./home";
import menu from "./menu";
import contact from "./contact";
import Restaurant from "../images/restaurant.jpeg";
import "./style.css";

const body = document.querySelector("body");

const setContent = (component) => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(component);
};

// Init
(() => {
  // Background image
  const img = new Image();
  img.src = Restaurant;
  img.id = "background";
  body.appendChild(img);

  // Title
  const title = document.createElement("h1");
  title.textContent = "La Doris";
  title.classList.add("title");
  body.appendChild(title);

  const navBar = document.createElement("ul");
  navBar.classList.add("nav");
  navBar.appendChild(
    (() => {
      let li = document.createElement("li");
      let button = document.createElement("input");
      let label = document.createElement("label");
      label.innerText = "Home";
      label.setAttribute("for", "home");
      button.id = "home";
      button.setAttribute("type", "radio");
      button.setAttribute("name", "page");
      button.addEventListener("click", () => setContent(homePage()));
      li.appendChild(button);
      li.appendChild(label);
      return li;
    })()
  );
  navBar.appendChild(
    (() => {
      let li = document.createElement("li");
      let button = document.createElement("input");
      let label = document.createElement("label");
      label.innerText = "Menu";
      label.setAttribute("for", "menu");
      button.id = "menu";
      button.setAttribute("type", "radio");
      button.setAttribute("name", "page");
      button.addEventListener("click", () => setContent(menu()));
      li.appendChild(button);
      li.appendChild(label);
      return li;
    })()
  );
  navBar.appendChild(
    (() => {
      let li = document.createElement("li");
      let button = document.createElement("input");
      let label = document.createElement("label");
      label.innerText = "Contact Us";
      label.setAttribute("for", "contact");
      button.id = "contact";
      button.setAttribute("type", "radio");
      button.setAttribute("name", "page");
      button.addEventListener("click", () => setContent(contact()));
      li.appendChild(button);
      li.appendChild(label);
      return li;
    })()
  );
  body.appendChild(navBar);
})();

const content = document.createElement("div");
content.id = "content";
body.appendChild(content);

setContent(homePage());
