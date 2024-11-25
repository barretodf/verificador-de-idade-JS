let nome = "João";
let idade = 25;
let altura = 1.80;
let isAluno = true;

document.write("O nome do aluno é: "+ nome + "<br>");
document.write("A idade do aluno é: " + idade + "<br>");
document.write(`A altura do aluno é: ${altura} <br>`);
document.write("Aluno matriculado? " + isAluno + "<br>");


// ------------------------------------------------

// Funções

// Isso imprimirá olá Maria na tela
function saudacao(nome) {
    document.write("Olá, " + nome + "! <br>" );
  }  
  saudacao("Maria");
// ----------------------------------------
// Isso vai pular linha
function pularLinha() {
    document.write("<br><br>");
  }  
  pularLinha(); //Sempre que chamar vai pular

// -----------------------------------------

function somar(a, b,) {
    return a + b;
}
let resultado = somar(10, 5)
document.write(resultado)
 
pularLinha()
// ---------------------------------------
// função como método de objeto
const pessoa = {
    nome: "Carlos",

    saudacao: function(){
        document.write("Olá, eu sou " + this.nome);
    }
};
pessoa.saudacao()
pularLinha()
// ------------------------------------------
// Função com variavel local e global
let numeroGlobal = 10;
 function minhaFuncao() {
    let numeroLocal = 5;
    document.write(numeroGlobal);
    document.write(numeroLocal)
 }
minhaFuncao()
pularLinha()
// -----------------------------------------
// Funções anônimas: São funções que não possuem um nome. Elas são geralmente atribuídas a variáveis.

// Função anônima atribuída a uma variável

// const saudacao = function(nome) {
//     return `Olá, ${nome}!`;
//   };

  
  // Arrow function
//   const dobro = numero => numero * 2;

// ----------------------------------------
// Funções de Alta Ordem
// São funções que recebem outras funções como parâmetro ou retornam uma função. Exemplos comuns são map, filter e reduce.

const numeros = [1, 2, 3, 4, 5];

// Dobrar cada número usando map
const numerosDobrados = numeros.map(numero => numero * 2);
document.write(numerosDobrados)
pularLinha()
// Filtrar números pares usando filter
const numerosPares = numeros.filter(numero => numero % 2 === 0);
document.write(numerosPares)
pularLinha()
pularLinha()

// ---------------------------------------

// Primeiro exercício do GPT 

// Crie um programa que pergunte dois números ao usuário e exiba a soma, subtração, multiplicação e divisão desses números.

// Dica: Use prompt() para pegar a entrada do usuário.

// Função para realizar os cálculos
function calcular(num1, num2) {
    const soma = num1 + num2;
    // const subtracao = num1 - num2;
    // const multiplicacao = num1 * num2;
    // const divisao = num1 / num2;
  
    document.write("Soma:", soma);
    pularLinha()
    // document.write("Subtração:", subtracao);
    // pularLinha()
    // document.write("Multiplicação:", multiplicacao);
    // pularLinha()
    // document.write("Divisão:", divisao);
  }
  
//   // Obtendo os números do usuário
//   const numero1 = parseFloat(prompt("Digite o primeiro número:"));
//   //   parseFloat() converte a entrada do usuário (que é uma string) para um número de ponto flutuante.
//   const numero2 = parseFloat(prompt("Digite o segundo número:"));
  
//   // Chamando a função para realizar os cálculos
//   calcular(numero1, numero2);





let frutas = ["Manga", "Banana", "Abacaxi"];
frutas.push("goiaba", "Pêra")//Acrescenta no fim
frutas.pop()//Deleta o último
frutas.unshift("Tomate", "Jaca", "Kiwi" )
frutas.shift()//Deleta a primeira
// frutas.splice(2,5)//Deleta essas posições
frutas.slice(2, 4)//Copia as posições indicadas e se não indicar nada nos parêntesis, copia todos.
// frutas.slice()




document.write(frutas);


