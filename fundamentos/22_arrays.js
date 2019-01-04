const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores.length)

valores.push({ id: 1 }, false, null, 'Teste')
console.log(valores)

// Apaga o último registro do array
console.log(valores.pop())

//delete o primeiro registro do array
delete valores[0]
console.log(valores)

console.log(typeof valores)
