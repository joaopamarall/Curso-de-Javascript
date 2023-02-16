//na function declaration, na primeira linha de execução o seu código já estará disponível 
console.log(soma(3, 4))
//na function expression isso já não acontece(ele retorna um erro, porque não está declarado antes de chamar no console)
console.log(sub(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function(x, y) {
    return x - y
}

//named function expression
const mult = function mult(x, y) {
    return x * y
}