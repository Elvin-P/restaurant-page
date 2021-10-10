import Restaurant from "../../images/restaurant.jpeg";

export default function homePage() {
  const heading = document.createElement("h2");
  heading.textContent = "Welcome to La Doris!";

  const img = new Image();
  img.src = Restaurant;

  const component = document.createElement("div");
  component.appendChild(heading);
  component.appendChild(img);

  return component;
}
