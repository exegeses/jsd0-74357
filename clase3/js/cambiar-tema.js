/* 
    Al hacer click en el botón cambiar 
    que se cambie la hoja de estilos
*/    

const link = document.querySelector('#link')

// tema inicial
let tema = 'dark'

function cambiar()
{

    if( tema == 'dark' ){
        link.href = '../css/light.css'
        tema = 'light'
    }else{
        link.href = '../css/estilos.css'
        tema = 'dark'
    }
    
}


