const btnPreco = document.querySelector('#btnOrdenarPorPreco')

btnPreco.addEventListener ("click", livrosPreco)

function livrosPreco () {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibeLivros (livrosOrdenados)
}