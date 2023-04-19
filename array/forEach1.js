
// Primeiro jeito de imprimir os aprovados
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

//Segundo jeito de imprimir os aprovados
aprovados.forEach(nome => console.log(nome))

//Terceiro jeito de imprimir os aprovados
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)