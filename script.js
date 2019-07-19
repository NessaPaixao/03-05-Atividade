let nome = prompt("Digite seu nome");
let idade = Number(prompt("Digite sua idade"));
let aposentado = prompt("Você é aposentado? Sim ou Não ?");
let estudante = prompt("Você estuda? Sim ou Não ?");

aposentado = aposentado.toUpperCase();
estudante = estudante.toUpperCase();


if ( idade >= 60 || aposentado === "SIM"){
    console.log(`Parabéns ${nome}, você ganhou a entrada gratuita`)
}

else if(idade >= 18 && idade <= 59 && estudante === "SIM" ){
    Console.log(`${nome}, você irá pagar uma meia entrada no valor de R$17,50 por ter ${idade} anos e ser estudante!`)
}

else if (idade >= 18 && idade <= 59){
    console.log(`${nome}, você irá pagar R$35,00 na entrada por ter ${idade} anos!`)
}

else if (idade >= 13 && idade <=17 ){
    console.log(`${nome}, você irá pagar R$15,00 na entrada por ter ${idade} anos!`)
}

else if (idade >0 && idade <=12){
    console.log(`${nome}, você irá pagar R$10,00 na entrada por ter ${idade} anos!`)
}

else {
    console.log("erro")
}