import React from "react";
import ReactDOM from "react-dom";

const headingEl = React.createElement("h1", {}, "Welcome to react...");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingEl);
