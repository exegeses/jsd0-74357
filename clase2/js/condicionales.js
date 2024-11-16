/**
 * Hacer una pregunta al usuario
 * - El usuario va a responder
 * - Vamos a almacenar la respuesta en memoria
 */
let respuesta = prompt('¿qué seleccionado ganó la copa del mundo Qatar 2022?')

// Ubicamos elemento dentro del DOM 
const frase = document.getElementById('frase')

if ( respuesta.toLowerCase() == 'argentina' ){
    // bloque a ejecutar si la condición es true
    //frase.innerText = '¡Correcto!'
    frase.innerHTML = '<img src="imgs/ok.png">'
}
else{
    // bloque a ejecutar si la condición es false
    //frase.innerText = '¡Incorrecto!'
    frase.innerHTML = '<img src="imgs/error.png">'
}