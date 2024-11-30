//
function formato(num) {
    return num.toString().padStart(3, '0');
}

function formato2( num, digitos )
{
    return num.toString().padStart( digitos, '0' )
}



console.log(  formato(1) )
console.log(  formato(12) )
console.log(  formato(123) )

//-----
console.log('banco:', formato2( 35, 3 ))
console.log('sucursal:', formato2( 10, 4 ))