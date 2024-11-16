// ubicamos el elemento span con el id="frase"
// almacenamos esta info en una variable
 let frase = document.querySelector('#frase')

// Modificamos el texto interno del span
// frase.innerText = 'texto modificado';

/*
    - Pedimos al usuario que ingrese su nombre
    - Una vez que el usuario ingresa su nombre, 
        almacenamos ese dato en memoria
    - Escribimos ese nombre de usuario dentro del span con el id="frase"
*/

let nombre = prompt('ingrese su nombre')
frase.innerText = nombre