function verificarIdade(){

let idade = document.getElementById("idade").value;
let resultado = document.getElementById("resultado")

if(idade >= 18 ){
    resultado.textContent = "Você é MAIOR de idade!";
}else{
    resultado.textContent = "Você é menor de idade!";
}
// Limpa o campo de entrada após a verificação
document.getElementById("idade").value = "";
}