// Novo recurso do ES2015

const pessoa = {
    nome: 'Cleverson',
    idade: 44,
    endereco: {
        logradouro: 'Caminho do Paraiso',
        numero: 326
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const {
    endereco: { logradouro, numero }
} = pessoa
console.log(logradouro, numero)

const {
    conta: { ag, num }
} = pessoa
console.log(ag, num)
