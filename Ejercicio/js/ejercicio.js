'use stric';

document.getElementById('ValorSalario').style.display='none'

let sueldo = 0;
let sulNormal = 0;
let sulExtra = 0;
let horas;
let extra;
const horasValor = 400;
const extraValor = 500;

function Calcular(){
    document.getElementById('ValorSalario').style.display='block'
    document.getElementById('Horas').style.display='none'

    horas = Number(document.getElementById('Hora_Semana').value);
    Salario(Horas)
}

function Salario(horas){
    if(horas<=40){
        sulNormal = horas * horasValor;
    }
    else{
        var extra = horas - 40;
        sulNomal = 40 * horasValor;
        sulExtra = (extra * extraValor);
    }
    sueldo = sulNormal + sulExtra;
    document.getElementById('ValorDom').value = sulNormal;
    document.getElementById('ValorExtra').value = sulExtra;
    document.getElementById('Total').value = sueldo;
    return sueldo;
}