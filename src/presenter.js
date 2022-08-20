import cargarEstados from "./array";
import multiplicar from "./multiplicador";
import calcularPrecioNeto from "./multiplicador";
import calcularImpuesto from "./OperacionDescuento";
import buscarEstado from "./estado";
import buscarDescuento from "./descuentoBusqueda";
import calcularDescuento from "./operacionImpuesto";

var precioNeto=0;
var impuestodiv =0;
var descuentoDiv=0;
var cantidadItems = 0;

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const firstMul = document.querySelector("#primer-numeroMul");
const formMul =document.querySelector("#multiplicar-form");
const divMul= document.querySelector("#resultado-divMul");

const resultadoNetoForm = document.querySelector("#resultadoNeto-form");
const divResNeto = document.querySelector("#resultado-divNeto");

const impuestoForm =document.querySelector("#impuesto-form");
const estadoImpuesto= document.querySelector("#impuesto-estado");
const divImpuesto= document.querySelector("#impuesto-div");

const descuentoForm = document.querySelector("#descuento-form");
const divDescuento= document.querySelector("#descuento-div");

const totalizarForm = document.querySelector("#totalidad-form");
const totalizarDiv = document.querySelector("#totalizar-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  cantidadItems =firstNumber;

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
  precioNeto=calcularPrecioNeto(cantItems,precioUnitario);

  divResNeto.innerHTML = "<p>" +"El precio neto (unitario x cant Item) es: "+ precioNeto + "</p>";
});

impuestoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  var imp=[];
  var impuesto = new Object();
  imp= cargarEstados();
  const impuestoEstado = estadoImpuesto.value;
  //console.log(imp);
  
  
  impuesto= buscarEstado(imp,impuestoEstado);
  console.log(impuesto);
  impuestodiv=calcularImpuesto(precioNeto,impuesto.imp);

  divImpuesto.innerHTML = "<p>" +"El impuesto para " + impuesto.name +" %:"+impuesto.imp +" es: "+impuestodiv +"</p>";
});

descuentoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  var descuento=0;
  descuento= buscarDescuento(cantidadItems);
  console.log(descuento);
  descuentoDiv=calcularDescuento(precioNeto,descuento);

  divDescuento.innerHTML = "<p>" +"El Descuento para " + cantidadItems +" items es de: "+descuento +"%"+"</p>";
});

totalizarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  var ecuacionFinal=0;
  ecuacionFinal = precioNeto+impuestodiv-descuentoDiv;

  totalizarDiv.innerHTML = "<p>" +"Precio total(descuento e impuesto): "+ecuacionFinal + "</p>";
});