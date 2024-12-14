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

while ( check ){
    let numeroUsuario = prompt('ingrese un número entre el 1 y el 10')
    if( numeroUsuario == numeroMagico ){
        alert('Felicitaciones! Acertaste el número mágico')
        document.write('<h2>Felicitaciones! Acertaste el número mágico</h2>')
        check = false
    } 
    else if( numeroUsuario > numeroMagico ){
        alert('te pasaste, intenta con un número más bajo')
    }
    else{
        alert('te quedaste corto, intenta con un número más alto')
    }
}