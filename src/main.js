window.onload = function(){
  showIndicadores();
}

function getData(){
  return Object.values(WORLDBANK)
  
}
console.log(getData())


function showIndicadores(){
  let productDiv = document.getElementById('indicators-div');
  productDiv.innerHTML = `
  ${getData().map((indicador) => `
    <div class="product-item">
      <p>${indicador["indicators"][74]["indicatorName"]}</p>
      <p>${indicador["indicators"][74]["countryName"]}</p>
      <p>${indicador["indicators"][74].data[2013]}</p>
      <p>${indicador["indicators"][74].data[2014]}</p>
      <p>${indicador["indicators"][74].data[2015]}</p>
    </div>`).join('')}`
}


const array = WORLDBANK.BRA.indicators

function indexIndicator(array, attr, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

const verData = WORLDBANK["BRA"]["indicators"][72]["data"][2015]
const nomeIndicador = WORLDBANK["MEX"]["indicators"][72]["indicatorName"]
console.log(verData)

console.log(indexIndicator(array, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)'))

/*EDUCACAO
INDICADORES 
SERIE TEMPORAL : 2013 até 2015

Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)
var educaFirstTopic = 
Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)
var educaScndTopic =
Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)
var educaThirdTopic =


VIOLENCIA
INDICADORES 
SERIE TEMPORAL : 2013 até 2015

Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)
Proporción de mujeres víctimas de violencia física o sexual en los últimos 12 meses (% de mujeres de entre 15 y 49 años)
Dados somente em PERU - Lembrar ideia dashboars para este tema*/
