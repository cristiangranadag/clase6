let numUno = 5;

Simple(numUno);

function Simple (){
    if(numUno < 5){
        alert('El ' + numUno + ' es menor');
    }
    else if(numUno == 5){
        alert('El ' + numUno + ' es igual');
    }
    else {
        alert('El ' + numUno + ' es mayor')
    }
}