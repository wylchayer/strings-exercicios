const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const removerEspaco = (string) => {
    const remocaoEspaco = string.trim()
    return remocaoEspaco
}

const stringSemEspaco = removerEspaco(minhaString)
console.log(`
Quantidade de caracteres da variável antes da remoção dos espaços: ${minhaString.length}
Quantidade de caracteres da variável após a remoção dos espaços: ${stringSemEspaco.length}`)

const substituicaoAnderlines = (string) => {
    const substituindo = string.replaceAll('________','sticioso')
    return substituindo
}

const fraseFinal = substituicaoAnderlines(stringSemEspaco)
console.log(fraseFinal)