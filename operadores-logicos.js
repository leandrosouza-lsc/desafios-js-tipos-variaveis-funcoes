const notaFinal = 8;
const faltas = 2;
const advertencias = 0;

if(notaFinal < 7 || faltas > 4){
    console.log('Reprovado, reforçe os estudos!');
}else{
    console.log('Aprovado! Parabéns!');
}

if(faltas <=2 && !advertencias){
    console.log('Recebeu bônus');
}else{
    console.log('Não recebeu bônus');
}
