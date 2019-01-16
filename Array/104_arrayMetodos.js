const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro - função pop() exclui o último registro do Array
console.log(pilotos)

pilotos.push('Verstappen') // função push() adiciona um item no array
console.log(pilotos)

pilotos.shift() // função shift() remove o primeiro item do array
console.log(pilotos)

pilotos.unshift('Hamilton') // função unshift() adiciona no primeiro item do array
console.log(pilotos)

// splice() pode adicionar ou remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
