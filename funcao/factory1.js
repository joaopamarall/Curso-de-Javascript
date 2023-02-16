//jeito primitivo, ou mais trabalhoso de colocar dados pois é muito mabual
const prod1 = {
    nome:'...',
    preco: 45
}

const prod2 = {
    nome:'...',
    preco: 45
}

//Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())