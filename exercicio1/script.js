// Exercício 1

const nomeEComidasFavoritas = () => {
    const nome = prompt(`Digite seu nome:`)
    const comida1 = prompt(`Digite seu prato favorito (1/3):`)
    const comida2 = prompt(`Digite seu prato favorito (2/3):`)
    const comida3 = prompt(`Digite seu prato favorito (3/3):`)

    const mensagem = `
    Estas são as comidas favoritas de ${nome}:
    - ${comida1}
    - ${comida2}
    - ${comida3}.`

    return mensagem
}

const fraseFinal = nomeEComidasFavoritas()
console.log(fraseFinal)