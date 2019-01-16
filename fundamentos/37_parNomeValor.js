// Par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Cleverson',
    idade: 44,
    peso: 90,
    endereco: {
        logradouro: 'Estrada do Paraiso',
        numero: 326
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
