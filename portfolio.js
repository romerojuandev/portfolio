import {
  enviarFormulario,
  mensajeFormulario,
  scrollTopButton,
} from "./funcionesPortfolio.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  scrollTopButton(".scroll-btn");
});

d.addEventListener("submit", (e) => {
  e.preventDefault();

  enviarFormulario(e);

  mensajeFormulario();
});
