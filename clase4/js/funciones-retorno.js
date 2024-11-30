function saludar(nombre)
{
    console.log('hola', nombre)
}
/* Función para convertir kilómetros a millas */

function convertir( km )
{
    let millas = km * .62
    return millas
}


saludar('Rick')
saludar('Morty')
saludar('Summer')
console.log('----------')
let resultado = convertir(27)

console.log(resultado)
console.log(convertir(30))