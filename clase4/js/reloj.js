/*
    Crear un reloj digital
    formato:  hh:mm:ss        i.e.: 16:04:32
*/
const frase = document.querySelector('#frase')

function agregarCero(numero)
{
    if( numero < 10 ){
        numero = '0'+ numero
    }
    return numero
}

function mostrarReloj()
{
    // creamos un objeto de fecha
    const fecha = new Date()

    // obtenemos el número correspondiente a las horas 
    let horas = fecha.getHours()
    horas = agregarCero( horas )
    console.log('horas:', horas)

    // obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes()
    minutos = agregarCero( minutos )
    console.log('minutos:', minutos)

    // obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds()
    segundos = agregarCero( segundos )
    console.log('segundos:', segundos)

    // Escribimos en el span 
    //frase.innerText = horas + ':' + minutos + ':' + segundos
    frase.innerText = `${horas}:${minutos}:${segundos}`
}

// Invocamos la función mostrarReloj()
mostrarReloj();

// actualizar el llamado a la función mostrarReloj()
setInterval( mostrarReloj, 1000 )