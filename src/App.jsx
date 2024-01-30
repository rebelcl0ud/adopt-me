import React from "react";
import { createRoot } from "react-dom/client";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {}, // this is for any attributes you'd like to add; if keeping empty {} or null work
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        name: "Bandit",
        animal: "Dog",
        breed: "Mixed",
      }),
      React.createElement(Pet, {
        name: "Flavor",
        animal: "Dog",
        breed: "Mixed",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
