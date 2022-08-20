function cargarEstados() {
  var impuestos=[]

  var impuesto = new Object();
  impuesto.code = 'CA';
  impuesto.name = 'California';
  impuesto.imp = 8.25;

  impuestos.push(impuesto);

  var impuesto = new Object();
  impuesto.code = 'NV';
  impuesto.name = 'Nevada';
  impuesto.imp = 8;

  impuestos.push(impuesto);
  return impuestos;
}
export default cargarEstados;

