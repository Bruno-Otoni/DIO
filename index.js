// Desafio da aula de Logica do Felipe

let nomeDoHeroi = "'Tiozinho quer Aprender'"
let xp = 1

let pocaoDeXP = function() {
    xp += 1000
}

while (xp <= 10001) {
    let nivelDoHeroi

if (xp < 1001) {
    nivelDoHeroi = "Ferro"
}else if (xp <= 2001) {
    nivelDoHeroi = "Bronze"
}else if (xp <= 3001) {
    nivelDoHeroi = "Prata"
}else if (xp <= 4001) {
    nivelDoHeroi = "Ouro"
}else if (xp <= 5001) {
    nivelDoHeroi = "Ouro Negro"
}else if (xp <= 6001) {
    nivelDoHeroi = "Platina"
}else if (xp <= 7001) {
    nivelDoHeroi = "Ascendente"
}else if (xp <= 8001) {
    nivelDoHeroi = "Radiante"
}else if (xp <= 9001) {
    nivelDoHeroi = "Imortal"
}else if (xp >= 10000) {
    nivelDoHeroi = "'GOD'"
}else {nivelDoHeroi = "'GOD'"}

console.log("Parabéns ao Herói " + nomeDoHeroi + ", por alcançar o nível = " + nivelDoHeroi + ". Exp atual = " + xp)

pocaoDeXP()
}

nivelDoHeroi = "'GOD'"

console.log("Parabenizamos ao Herói " + nomeDoHeroi + " por alcançar o nível Maxímo" + nivelDoHeroi)
