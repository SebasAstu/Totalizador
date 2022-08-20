function buscarEstado(arr,estado){
console.log(arr);
    for(let i=0; i<=arr.length; i++){
        if (arr[i].code==estado)
        return arr[i]; 
        else
        console.log(arr[i].code);
    }
  }

  export default buscarEstado;