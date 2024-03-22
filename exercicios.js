/*1
const nome = 'Leandro';
const numero = 10;
const afirmacao = true;

console.log(nome, numero, afirmacao);*/


/*2
const primeiroNome = 'Leandro';
const ultimoNome = 'Costa';
const nomeCompleto = primeiroNome + ' ' + ultimoNome;
const nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;

console.log(primeiroNome, ultimoNome, nomeCompleto, nomeCompletoTemplate);*/

/*3
const numero = 10;
const nome = 'Leandro';
const frase = `O jogador ${nome} vestirá a camisa número ${numero}!`;

console.log(frase);*/


/*4
let numero = 10;
console.log(numero);

numero = 11;
console.log(numero);*/

/*5
if(10 > 9){
    var nome = 'Leandro';
    console.log(nome);
}

console.log(nome);

if(10 > 9){
    let nomeLet = 'Natália';
    console.log(nomeLet);
}

console.log(nomeLet);*/

/*6
const chuva = false;

if (chuva == true){
    console.log('Está chovendo, leve um guarda chuva!');
}else{
    console.log('Não está chovendo, não será preciso levar o guarda chuva!');
}*/

/*1
const frase ='O Senhor é bom!';

console.log(frase);
console.log(frase.toUpperCase());*/

/*2
const numero = null;
let jogador;

console.log(numero, jogador);*/

/*3
const especie = 'Palora';
const peso = 300;
const venda = true;

console.log(typeof`${especie} ${peso} ${venda}`);
console.log(`${especie} ${peso} ${venda}`);*/

/*4
const peso = 1054;
const fileira = '4';

console.log(typeof String(peso),typeof Number(fileira));
console.log(String(peso), Number(fileira));*/

/*5
const especie = 'Boreal Red';

console.log(especie.toUpperCase(), especie.toLowerCase(), especie.slice(7));*/

/*1
const saldo = 15000;
const deposito = 5000;
const saque = 1000;
let operacao;

operacao = saldo + deposito - saque;

console.log(operacao);*/

/*2
let valor = 3;

function parOuImpar (){
    return valor % 2 === 0 ? 'O valor é par' : 'O valor é ímpar';
}

console.log(parOuImpar());*/

/*3
let logado = true;
let administrador = false;

if(logado && administrador){
    console.log('Usuário tem permissão para acessar esta funcionalidade');
}else{
    console.log('Usuário não tem permissão para acessar esta funcionalidade');
}*/

/*4
let logado = true;
let administrador = false;

if(logado || administrador){
    console.log('Usuário tem permissão para acessar esta funcionalidade');
}else{
    console.log('Usuário não tem permissão para acessar esta funcionalidade');

}*/

/*5
let idade = 18;
let idadeMinima = 18;

console.log(idade >= idadeMinima? 'Compra do ingresso permitida! Siga para próxima tela.' : 'Compra do ingresso não permitida!');*/

/*1
function saudacao(nome){
    return `Olá ${nome}, boas compras!`;
}

console.log(saudacao('Leandro'));*/

/*2
const exibirIdade = (idade) => idade >= 18? 'Pessoa é maior de idade' : 'Pessoa não é maior de idade';

console.log(exibirIdade(20));*/

/*3
const nomeVerificado = function (nome){

    let nomeInvertido = nome.split('').reverse().join('');

    if(nome === nomeInvertido){
        return `Sim, ${nome} é um palíndromo, pois se lermos de trás para frente temos o mesmo nome: ${nomeInvertido}`;
    }else{
        return `Não, ${nome} não é um palíndromo, pois se lermos de trás para frente temos esse nome: ${nomeInvertido}`;
    }
}

console.log(nomeVerificado('raiar'));*/

/*4
const numeroMaior = function (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return `O número ${num1} é o maior dos três números.`;
    }else if(num2 > num1 && num2 > num3){
        return `O número ${num2} é o maior dos três números.`;
    }else {
        return `O número ${num3} é o maior dos três números.`;
    }
}

console.log(numeroMaior(45, 30, 15));*/

/*5
const calculaPotencia = (base, expoente) => base ** expoente;

console.log(calculaPotencia(2, 3));*/

