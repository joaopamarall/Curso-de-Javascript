function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

 console.log(criarProduto('Notebook', 3299.99))
 console.log(criarProduto('Tablet', 1999))