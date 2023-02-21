/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capitalInicial, taxa, tempo) {
    return "Capital Inicial: R$" + capitalInicial + (", Resultado do Juros: R$" + capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return "Resultado da operação: R$" + (capitalInicial * (1 + taxa) ** tempo).toFixed(2).toString().replace(".", ",")
}

console.log(jurosSimples(100, 10/100, 2))
console.log(jurosCompostos(100, 10/100, 2))

