Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callBack(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
