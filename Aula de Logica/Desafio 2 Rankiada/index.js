let nomeDoHeroi = "'Tiozinho Quer Aprender'"

function calcularNivel(vitoria, derrota) {
    let saldoDeVitorias = vitoria - derrota
    let nivel

    if(vitoria < 10) {
        nivel = "Ferro"

    } else if (vitoria >= 11 && vitoria <= 20){
        nivel = "Bronze"
    } else if (vitoria >= 21 && vitoria <= 50){
        nivel = "Prata"
    } else if (vitoria >= 51 && vitoria <= 80){
        nivel = "Ouro"
    } else if (vitoria >= 81 && vitoria <= 90){
        nivel = "Diamante"
    } else if (vitoria >= 91 && vitoria <= 100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    return { saldoDeVitorias, nivel}
}

let quantidadeVitoria = 161
let quantidadeDerrota = 60

let resultado = calcularNivel(quantidadeVitoria, quantidadeDerrota)

console.log(`O Herói ${nomeDoHeroi} tem um saldo de ${resultado.saldoDeVitorias} Vitórias e alcançou o nivel ${resultado.nivel}`)
