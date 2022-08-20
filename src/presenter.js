import sumar from "./sumador";
import multiplicar from "./multiplicador";
import calcularPrecioNeto from "./multiplicador";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const firstMul = document.querySelector("#primer-numeroMul");
const formMul =document.querySelector("#multiplicar-form");
const divMul= document.querySelector("#resultado-divMul");

const resultadoNetoForm = document.querySelector("#resultadoNeto-form");
const divResNeto = document.querySelector("#resultado-divNeto");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" +"La cantidad de Items es: "+firstNumber + "</p>";
});

formMul.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumberMul = Number.parseInt(firstMul.value);

  divMul.innerHTML = "<p>" +"El precio por item es: "+ firstNumberMul + "</p>";
});

resultadoNetoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItems = Number.parseInt(first.value);
  const precioUnitario= Number.parseInt(firstMul.value);

  divResNeto.innerHTML = "<p>" +"El precio neto (unitariox cant Item) es: "+ calcularPrecioNeto(cantItems,precioUnitario) + "</p>";
});