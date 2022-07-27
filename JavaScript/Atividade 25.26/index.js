const cpf = document.getElementById("cpfs"); 
const cpfQTD = document.getElementById("cpfGera");

const cpfCriar = document.querySelector("#btnCpf");
cpfCriar.addEventListener("click", cpfGerar);
const apagarCpf = document.querySelector("#cpfApagar")
apagarCpf.addEventListener("click", () => {cpf.value = null; cpfQTD.value = null})

function cpfGerar(){
    for(let i = 0; i < parseInt(cpfQTD.value); i++){
        cpf.value += `${gerarCpf()}\n`;
    }
}
function gerarCpf() {
  const num1 = aleatorio();
  const num2 = aleatorio();
  const num3 = aleatorio();
  const dig1 = dig(num1, num2, num3);
  const dig2 = dig(num1, num2, num3, dig1);
  return `${num1}.${num2}.${num3}-${dig1}${dig2}`;
}
function dig(n1, n2, n3, n4) { 
  const nums = n1.split("").concat(n2.split(""), n3.split(""));
  if (n4 !== undefined){ 
    nums[9] = n4;
  }
  
  let x = 0;
  for (let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) {
    x += parseInt(nums[j]) * i;
  }
  
  const y = x % 11;
  return y < 2 ? 0 : 11 - y; 
}
function aleatorio() {
  const aleat = Math.floor(Math.random() * 999);
  return ("" + aleat).padStart(3, '0'); 
}

//=====================================================================//

const placa = document.getElementById("placaVal");
const placaRes = document.getElementById("placaRes");

const placaValidar = document.querySelector("#btnPlaca");
placaValidar.addEventListener("click", validarPlaca);
const apagarPlaca = document.querySelector("#placaApagar");
apagarPlaca.addEventListener("click", () => {placa.value = null; placaRes.value = null})

function validarPlaca(){

  let placaAntiga = /^[a-zA-Z]{3}[0-9]{4}$/;
  let placaNova = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;

  if(placaAntiga.test(placa.value) || placaNova.test(placa.value)){
    placaRes.value = "Valido"
  }else{
    placaRes.value = "Invalido"
  }
}

//=====================================================================//

const telefones = document.getElementById("telefones");
const ddd = document.getElementById("telDdd");
const qtd = document.getElementById("telQtd");

const telCriar = document.querySelector("#btnTel");
telCriar.addEventListener("click", telGerar);
const apagarTel = document.querySelector("#telApagar");
apagarTel.addEventListener("click", () => {telefones.value = null; ddd.value = null; qtd.value = null;})

function telGerar(){
    for(let i = 0; i < parseInt(qtd.value); i++){
        telefones.value += `${gerarTel()}\n`;
    }
}

function gerarTel(){

    aleat1 = ("" + Math.floor(Math.random() * 9999)).padStart(4, '0');
    aleat2 = ("" + Math.floor(Math.random() * 9999)).padStart(4, '0');
    
    return `(${ddd.value}) 9${aleat1}-${aleat2}`;
}

//=====================================================================//

const vCpf = document.getElementById("cpfVal");
const vCpfRes = document.getElementById("cpfRes");

const cpfValidar = document.querySelector("#btnValCpf");
cpfValidar.addEventListener("click", validarCpf);

function validarCpf(){
    let digit = vCpf.value.split("");
    let digit2 = digit;
    digit2[8] = digit[9]
    let x = 0;
    let a = 0;
    for(let i = 10, j = 0; i >= 2; i--, j++){
        x += parseInt(digit[j]) * i;
        a += parseInt(digit2[j]) * i;
    }

    let y = x % 11;
    let b = a % 11;

    let h = y < 2 ? 0 : 11 - y
    let g = b < 2 ? 0 : 11 - b

    console.log(digit[9])
    console.log(y)
    console.log(digit2)
    console.log(digit[10])
    console.log(b)

}