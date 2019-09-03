import React from "remini"

const r = () => {
  console.log(React)
  return "Remini"
};
document.querySelector("#root").innerHTML = r()
