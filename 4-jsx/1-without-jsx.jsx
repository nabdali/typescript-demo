import React from "react"

// Avec JSX
const element = () => (
  <div>
      <h2>Title List</h2>
      <p>Contenu</p>
  </div>
);

// Sans JSX
React.createElement(
  "div",
  null,
  React.createElement("h2", null, "Title List"),
  React.createElement("p", null, "Contenu")
);