

document.getElementById("frmDate").onsubmit = function () {
  
  let frmData = document.getElementById('frmDate').elements;
  let d2 = definirDataFinal(frmData);
  let d1 = definirDataInicial();
  let resto = calcular(d1, d2);
  document.getElementById("resultado").innerHTML = concatenarResposta(resto); 
  
  return false;
}

function definirDataFinal(frmData){
  dataFinal = frmData['data'].value;//retorna o formato em string "2024-01-16" por ex.
  dataFinal = dataFinal.split("-", 3);//lista/array/object
  dataFinal[1] = dataFinal[1].padStart(2, '0');
  dataFinal[0] = dataFinal[0].padStart(2, '0');
  return new Date(dataFinal);
}

function definirDataInicial(){
  //14 de março 2023, quarto dia de trabalho. ou seja, 0 = 1° dia de folga:
  let d1 = [2023,03,14];
  return new Date(d1);
}

function calcular(d1, d2){
  
  /*
  Divide a quantidade de milisegundos por:
  milisecs * segundos * minutos * horas = convertem os milisegundos para dias.

  Depois divide por 8 (quantidade de dias do ciclo)
  e retorna o resto inteiro da divisão.
  */
  
  const milisegundos_corridos = Math.abs(d2 - d1); //retorna milisegundos (tipo number)
  const dias_corridos = milisegundos_corridos / (1000 * 60 * 60 * 24); 
  return dias_corridos % 8;
}

function concatenarResposta(resto){
  
  let res;
  switch (resto) {
    case 0 :
      res = '1° dia de folga.';
      break;
    case 1 :
      res = '2° dia de folga.';
      break;
    case 2 :
      res = '3° dia de folga.';
      break;
    case 3 :
      res = '4° dia de folga.';
      break;
    case 4 :
      res = '1° dia de trabalho.';
      break;
    case 5 :
      res = '2° dia de trabalho.';
      break;
    case 6 :
      res = '3° dia de trabalho.';
      break;
    case 7 :
      res = '4° dia de trabalho.';
      break;
  }

  //folga=verde, trabalho=vermelho. 
  let color;
  if (resto <= 3){
    color = 'green';
  } else {
    color = 'red';
  }

  return "<h2 style='color:" + color + ";'>" + res + "</h2>";
}
