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

  var impuesto = new Object();
  impuesto.code = 'UT';
  impuesto.name = 'Utah';
  impuesto.imp = 6.65;

  impuestos.push(impuesto);

  var impuesto = new Object();
  impuesto.code = 'AL';
  impuesto.name = 'Albani';
  impuesto.imp = 4;

  impuestos.push(impuesto);

  return impuestos;
}
export default cargarEstados;

