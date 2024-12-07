const btn = document.querySelector('#btn')
const frase = document.querySelector('#frase')

// addEventListener('evento', acción)
btn.addEventListener(
        'click',
        function()
        {
            frase.innerText = 'hiciste click!'
        }
)
btn.addEventListener(
        'mouseover',
        function()
        {
            frase.innerText = 'mouse sobre'
        }
)
btn.addEventListener(
        'mouseout',
        function()
        {
            frase.innerText = 'reposo'
        }
)