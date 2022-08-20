function cargarEstados() {
  var impuestos=[]

  var impuesto = new Object();
  impuesto.code = 'CA';
  impuesto.name = 'California';
  impuesto.imp = 8.25;

  impuestos.push(impuesto);

  console.log(impuestos);
  return impuestos;
}
export default cargarEstados;

