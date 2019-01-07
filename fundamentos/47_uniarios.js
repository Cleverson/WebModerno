let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // Retorna verdadeiro, pois o num2 só é processado depois que o num1(prefixo depois o sufixo).
console.log(num1 === num2)
