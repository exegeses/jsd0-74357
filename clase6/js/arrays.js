const frase = document.querySelector('#frase')

const marcas = [
                'Hermès', 'Zara','Boss',
                'Aeropostale', 'Tomy', 'Kingpin',
                'Gola','Hollister','Abercrombie',
                'JCrew'
                ]

console.log(marcas)
console.table(marcas)

// mostrar el listado de marcas en el span
//frase.innerText = marcas

// Mostrar una marca dentro del span
frase.innerText = marcas[3]

/*
    Primero mostrar una marca dentro del span
    Al pulsar el icono de siguiente
         se debe mostrar la siguiente marca
    Al pulsar el icono de anterior 
         se debe mostrar la marca anterior
*/

console.log('--------------------------------------')
// ubicamos elementos dentro del dom
const rotador = document.querySelector('#rotador')
console.log(rotador)

const anterior = rotador.children[0]
const siguiente = rotador.children[2]
const span = rotador.children[1]


let indice = 4
//mostrar una marca deltro del span
span.innerText = marcas[indice]

/* Al pulsar el icono de siguiente
         se debe mostrar la siguiente marca*/
siguiente.addEventListener( 'click', function()
            {
                indice ++
                if( indice == marcas.length ){
                    indice = 0
                }
                span.innerText = marcas[indice]
            }
)
anterior.addEventListener( 'click', function()
            {
                indice --
                if( indice == -1 ){
                    indice = marcas.length -1
                }
                span.innerText = marcas[indice]
            }
)