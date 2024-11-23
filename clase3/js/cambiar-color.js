// Ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');

function cajaVerde()
{
    caja.style.backgroundColor = 'hsl(120, 50%, 50%)'
    caja.style.rotate = '35deg'
    caja.innerText = 'Verde'
}
function cajaNaranja()
{
    caja.style.backgroundColor = 'hsl(50, 50%, 50%)'
    caja.style.rotate = '-40deg'
    caja.innerText = 'Naranja'
}
function cajaCeleste()
{
    caja.style.backgroundColor = 'hsl(180, 70%, 70%)'
    caja.style.rotate = '60deg'
    caja.innerText = 'celeste'
}