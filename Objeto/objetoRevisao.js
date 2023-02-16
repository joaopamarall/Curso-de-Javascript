//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome ='Cadeira'
produto['marca do produto']  = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor:89000,
    proprietario: {
        nome: 'João',
        idade: 25,
        endereco: {
            logradouro: 'Rua Carlos Reichmann',
            numero: 86,
            complemento: 'Casa 03'
        }
    },
    condutores: [{
        nome: 'João',
        idade: 25
    }, {
        nome: 'Luana',
        idade: 26
    }],
    calcularValorSeguro: function() {
        //...
    }
}
//mudando os dados
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)