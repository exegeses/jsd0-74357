/*
    Los bucles o estructuras de interación 
    se utilizan para ejecutar bloques de código 
    de manera repetida
*/

function generarNumero()
{
    // Math.random()
        // Math  Contiene muchos métodos para cálculos aritméticos
            //  random Para generar un número aleatorio entre 0 ~ 1
    let numeroAleatorio = Math.random()
    let numeroMultiplicado = numeroAleatorio * 9 + 1
    let numero = Math.round(numeroMultiplicado)
    return numero
}

const numeroMagico = generarNumero()
console.log('js:',numeroMagico)
let check = true

while ( check ) {
    let numeroUsuario = prompt('ingrese un número entero entre 1 y 10')
    console.log('usr:',numeroUsuario)
    if( numeroUsuario == numeroMagico ){
        alert('Acertaste el número mágico')
        check = false
    }
    else{
        alert('No acertaste el número mágico')
    }
}