const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

//desafio 1: Toos os alunos são bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map( a => a.bolsista).reduce(algumBolsista))