import homePage from "./home/index.js";
import "./style.css";

const body = document.querySelector("body");

const setContent = (component) => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(component);
};

// Add navbar to index
(() => {
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
