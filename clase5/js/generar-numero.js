/*
    Al pulsar el botón vamos a generar un número
    Este número debe ser un entero entre el 0 y el 10
    Finalmente mostrar el número en el span
*/
const btn = document.querySelector('#btn')
const frase = document.querySelector('#frase')

function generarNumero()
{
    // Math.random()
        // Math  Contiene muchos métodos para cálculos aritméticos
            //  random Para generar un número aleatorio entre 0 ~ 1
    let numeroAleatorio = Math.random()
    console.log(numeroAleatorio)
    let numeroMultiplicado = numeroAleatorio * 10
    console.log(numeroMultiplicado)
    let numero = Math.round(numeroMultiplicado)
    console.log(numero)
    return numero
}

btn.addEventListener('click', function()
    {
        frase.innerText = generarNumero()
    }
)


