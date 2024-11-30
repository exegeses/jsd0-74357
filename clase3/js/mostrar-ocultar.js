// ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

// declaramos funciones de control
function ocultar()
{
    // caja.style.visibility = 'hidden'
    // caja.style.opacity = '0'
    caja.style.display = 'none'
}
function mostrar()
{
    // caja.style.visibility = 'visible'
    // caja.style.opacity = '1'
    caja.style.display = 'block'
}

// propuesta Romeo
function mostrarocultar() {
    caja.style.display = (caja.style.display === 'none') ? 'block' : 'none';
  }

// propuesta Ale
function alternar()
{
    if(caja.style.display == 'none')
    {
        caja.style.display = 'block'
    }
    else
    {
        caja.style.display = 'none'
    }
}  

//variante A
function showHide()
{
    if(caja.style.display == 'none')
        {
            mostrar()
        }
        else
        {
            ocultar()
        }
}

// variante B
function showHide2()
{
    ( caja.style.display == 'none' ) ? mostrar() : ocultar()
}
