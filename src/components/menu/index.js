import ChickenBurger from "../../images/chickenburger.jpeg";
import Teriyaki from "../../images/teriyaki.jpeg";
import Pancakes from "../../images/pancakes.jpeg";
import LavaCake from "../../images/lavacake.jpeg";
import RiceVeggies from "../../images/riceveggies.jpeg";
import Shawarma from "../../images/shawarma.jpeg";

import "./style.css";

const foodmenu = {
  "Chicken Burger": ChickenBurger,
  "Rice with Veggies": RiceVeggies,
  Teriyaki,
  Pancakes,
  Shawarma,
  "Lava Cake": LavaCake,
};

export default function menu() {
  const component = document.createElement("div");
  component.classList.add("grid-container");

  const grid = document.createElement("div");
  grid.classList.add("grid");

  Object.keys(foodmenu).forEach((key) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = key;
    card.appendChild(title);

    const img = new Image();
    img.src = foodmenu[key];
    card.appendChild(img);

    grid.appendChild(card);
  });

  component.appendChild(grid);

  return component;
}
