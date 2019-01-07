function tratarErroELancar(erro) {
  // throw new Error('...')
  // throw 10
  // throw true
  // throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date()
  }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + ' !!!') // informado a propriedade "name" para que seja apresentado o erro
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('final')
  }
}

const obj = { nome: 'Cleverson' }
imprimirNomeGritado(obj)
