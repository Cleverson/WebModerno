class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        ;(this.nome = nome), (this.valor = valor)
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancemento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidade = 0
        this.lancamentos.forEach(l => {
            valorConsolidade += l.valor
        })
        return valorConsolidade
    }
}

const salario = new Lancamento('Salário', 45000)
const contaLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancemento(salario, contaLuz)
console.log(contas.sumario())
