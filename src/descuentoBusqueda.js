function buscarDescuento(cantItems){
        if (cantItems>=1000 && cantItems<3000)
        return 3;
        else if (cantItems>=3000 && cantItems<7000)
        return 5;
        else if (cantItems>=7000 && cantItems<10000)
        return 7;
        else if (cantItems >= 10000 && cantItems<30000)
        return 10;
        else if (cantItems >= 30000)
        return 15;
      }
    
      export default buscarDescuento;