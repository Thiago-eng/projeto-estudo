function classificarNivel(xp) {
    if (xp < 1000) return "Ferro"
    else if (xp <= 2000) return "Bronze"
    else if (xp <= 5000) return "Prata"
    else if (xp <= 7000) return "Ouro"
    else if (xp <= 8000) return "Platina"
    else if (xp <= 9000) return "Ascendente"
    else if (xp <= 10000) return "Imortal"
    else return "Radiante"
}

let herois = [
    { nome: "Arming", xp: 6778 },
    { nome: "Katar", xp: 1200 },
    { nome: "Lyra", xp: 9500 }
]

for (let i = 0; i < herois.length; i++) {
    const heroi = herois[i]
    const nivel = classificarNivel(heroi.xp)
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`)
}
