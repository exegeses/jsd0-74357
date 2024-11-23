/*
    Mostrar la fecha actual
    formato: dd/mm/yyyy     (23/11/2024)
*/
// ubicar elementos dentro del DOM  
const frase = document.getElementById('frase')

//creamos objeto de fecha
const fecha = new Date()
console.log(fecha)

// obtenemos el número de día de mes
let diaMes = fecha.getDate()
if( diaMes < 10 ){
    diaMes = '0' + diaMes
}
console.log('Dia:', diaMes)

// obtenemos el número de mes actual
let mes = fecha.getMonth() + 1
if( mes < 10 ){
    mes = '0' + mes
}
console.log('Mes:', mes)

// Obtenemos el número de año actual
let anio = fecha.getFullYear()
console.log('Año:', anio)

// Escribimos en el span
    //concatenación
//frase.innerText = diaMes + '/' + mes + '/' + anio
    // interpolación
frase.innerText = `${diaMes}/${mes}/${anio}`
