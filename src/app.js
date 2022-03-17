/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.getElementById("regalazo").innerHTML = regalo();
  });
  console.log("Hello Rigo from the console!");
};

const regalo = () => {
  let prenda = ["CAMISETA", "CAMISA", "CHAQUETA"];
  let color = ["NEGRA", "MARRÓN", "BLANCA"];
  let marca = ["DENMARK"];

  let prendaindex = Math.floor(Math.random() * prenda.length);
  let colorindex = Math.floor(Math.random() * color.length);
  let marcaindex = Math.floor(Math.random() * marca.length);

  return (
    prenda[prendaindex] + ` ` + color[colorindex] + ` ` + marca[marcaindex]
  );
};
