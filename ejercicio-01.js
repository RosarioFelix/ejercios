function suma (sum1,sum2) {
  //Escribe tu codigo aqui


    if((sum1 == undefined)||(sum2 == undefined)){
      return ("Error");
    }

  return parseInt(sum1) + parseInt(sum2);
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.suma = suma;
}
