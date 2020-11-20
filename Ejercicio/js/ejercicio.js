// Control de horas
// Elaborar un algoritmo para un trabajador que necesita calcular su
// salario semanal, el cual se obtiene de la siguiente manera:
// Si trabaja 40 horas o menos se le paga $400 por hora
// Si trabaja más de 40 horas se le paga $400 por cada una de las
// primeras 40 horas y $500 por cada hora extra.

'use stric';

document.getElementById('ValorSalario').style.display='none'

let sueldo = 0;
let sulNormal = 0;
let sulExtra = 0;
let horas;
let extra;
const horaValor = 400;
const extraValor = 500;

function Calcular(){
    document.getElementById('ValorSalario').style.display='block'
    document.getElementById('Horas').style.display='none'

    horas = Number(document.getElementById('Hora_Semana').value);

    sueldo = Salario(horas);

    document.getElementById('ValorDom').value = sulNormal;
    document.getElementById('ValorExtra').value = sulExtra;
    document.getElementById('Total').value = sueldo;
}

function Salario(horas){
    if(horas<=40){
        sulNormal = horas * horaValor;
    }
    else{
        var extra = horas - 40;
        sulNormal = 40 * horaValor;
        sulExtra = (extra * extraValor);
    }
    sueldo = sulNormal + sulExtra;
    return sueldo;
}