/**07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

function calcularBhaskara (a, b, c) {

    //calcula o discriminante
    let delta = Math.pow(b, 2) - (4 * a * c);

    //verifica se existem raízes reais
    if  (delta < 0) {
        return "Não existem raízes reais."
    }

    //Calcula as raízes reais
    let x1 = (-b + Math.sqrt(delta))/ (2 * a);
    let x2 = (-b - Math.sqrt(delta))/ (2 * a);

    return [x1, x2];

}

//Exemplo de uso
let a = 1
let b = -5
let c = 6
let raizes = calcularBhaskara(a, b, c);
console.log(`As raízes da equação ${a}x^2 + ${b}x + ${c} são: [${raizes}]`);