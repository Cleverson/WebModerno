const fs = require('fs')

const caminho = __dirname + '/131_arquivo.json'

// Sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./131_arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta')
    console.log(arquivos)
})
