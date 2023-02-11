const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

const trocaCores = (string) => {
    const fraseNova = string.replace('verde','rosa').replace('azul','laranja')
    return fraseNova
}

const fraseComCoresTrocadas = trocaCores(frase)

console.log(`Frase antiga:
${frase}
-
Nova Frase:
${fraseComCoresTrocadas}`)

const verificaVerdeNaFrase = (fraseNova) => {
    const verificaVerde = fraseNova.includes('verde')
    return verificaVerde
}

const verificaLaranjaNaFrase = (fraseNova) => {
    const verificaLaranja = fraseNova.includes('laranja')
    return verificaLaranja
}

const haVerde = verificaVerdeNaFrase(fraseComCoresTrocadas)
const haLaranja = verificaLaranjaNaFrase(fraseComCoresTrocadas)

console.log(`Há a palavra 'verde' na nova frase? - ${haVerde}
Há a palavra 'laranja' na nova frase? - ${haLaranja}`)

const aspasEmMaiusculo = (fraseNova) => {
   const fraseSeparada = fraseNova.split('"')
   fraseSeparada[1] = fraseSeparada[1].toUpperCase()
   const frasePronta = `${fraseSeparada[0]}"${fraseSeparada[1]}"`
   return frasePronta
}

const fraseComExtra = aspasEmMaiusculo(fraseComCoresTrocadas)

console.log(`Frase com extra:
${fraseComExtra}`)