const contadorA = require('./126_instanciaUnica')
const contadorB = require('./126_instanciaUnica')

const contadorC = require('./126_instanciaNova')()
const contadorD = require('./126_instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
