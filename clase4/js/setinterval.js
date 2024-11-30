const frase = document.querySelector('#frase')

let numero = 0

function incrementar()
{
    //numero = numero + 1
    numero ++
    frase.innerText = numero
}

incrementar();

// La función setInterval sirve para ctualizar el llamado a una función
setInterval( incrementar, 500 )
 
