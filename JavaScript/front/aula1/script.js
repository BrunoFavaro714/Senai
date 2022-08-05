/*
exercicio 1
let a = 3, b = 3, c = 3;

if(a == b && b == c){
    console.log("equilatero");
}else if(a != b && b != c && a != c){
    console.log("escaleno");
}else{
    console.log("isósceles")
}
*/
/*
exercicio 2
var salarios = [1800, 2700, 3600, 4500];
salarios.forEach((salario) => {
    if(salario > 1903.98){
        console.log(salario-(salario*7.5)/100);
    }else if(salario > 2826.65){
        console.log(salario-(salario*15)/100);
    }else if(salario > 3751.05){
        console.log(salario-(salario*22.5)/100);
    }else if(salario > 4664.68){
        console.log(salario-(salario*27.5)/100);
    }else{
        console.log(salario);
    }
})
*/
/*
exercicio 3
var salario = 1500;
var filhos = 3;
funcionario(salario, filhos);
function funcionario(salario, filhos){
    if(salario < 1655.99){
        return console.log(filhos*56.47);
    }else{
        return console.log("Sem beneficio")
    }
}
*/