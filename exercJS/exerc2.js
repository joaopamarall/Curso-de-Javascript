/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/


//receber 3 parâmetros numa função, cujo objetivo é descobrir qual tipo de triângulo ele é.
function criarTriangulos(lado1, lado2, lado3) {
    if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)) {
        if (lado1 === lado2 && lado2 === lado3) {
            return 'Triângulo Equilátero'
        }else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            return 'Triângulo Isósceles'
        }else {
            return 'Triângulo Escaleno'
        }
    } else {
        return 'Não forma triângulo.'
    }
    
}

//retornar a classificação quanto ao tamanho dos seus lados.
console.log(criarTriangulos(3, 3, 3))
console.log(criarTriangulos(3, 2, 2))
console.log(criarTriangulos(3, 4, 2))
console.log(criarTriangulos(3, 7, 2))