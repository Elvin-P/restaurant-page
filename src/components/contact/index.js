import "./style.css";

export default function contact() {
  const component = document.createElement("div");

  const contact = document.createElement("h2");
  contact.textContent = "Dont contact me please";
  component.appendChild(contact);

  return component;
}
