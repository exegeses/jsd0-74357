// ubicar elementos dentro del DOM
const btnRedbull = document.querySelector('#btnRedbull')
const btnMclaren = document.querySelector('#btnMclaren')
const btnFerrari = document.querySelector('#btnFerrari')
const btnMercedes = document.querySelector('#btnMercedes')
const btnAston = document.querySelector('#btnAston')

const redbull = document.querySelector('#redbull')
const mclaren = document.querySelector('#mclaren')
const ferrari = document.querySelector('#ferrari')
const mercedes = document.querySelector('#mercedes')
const amartin = document.querySelector('#amartin')

/* estado inicial */
mclaren.style.display = 'none'
ferrari.style.display = 'none'
mercedes.style.display = 'none'
amartin.style.display = 'none'


btnRedbull.addEventListener('click', function()
    {
        redbull.style.display = 'flex'
        mclaren.style.display = 'none'
        ferrari.style.display = 'none'
        mercedes.style.display = 'none'
        amartin.style.display = 'none'        
    }
)

btnMclaren.addEventListener(
        'click', 
        function()
        {
            redbull.style.display = 'none'
            mclaren.style.display = 'flex'
            ferrari.style.display = 'none'
            mercedes.style.display = 'none'
            amartin.style.display = 'none'
        }
)

btnFerrari.addEventListener('click', function()
    {
        redbull.style.display = 'none'
        mclaren.style.display = 'none'
        ferrari.style.display = 'flex'
        mercedes.style.display = 'none'
        amartin.style.display = 'none'
    }
)
btnMercedes.addEventListener('click', function()
    {
        redbull.style.display = 'none'
        mclaren.style.display = 'none'
        ferrari.style.display = 'none'
        mercedes.style.display = 'flex'
        amartin.style.display = 'none'
    }
)
btnAston.addEventListener('click', function()

    {
        redbull.style.display = 'none'
        mclaren.style.display = 'none'
        ferrari.style.display = 'none'
        mercedes.style.display = 'none'
        amartin.style.display = 'flex'
    }
)