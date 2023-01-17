const btnFiltro = document.querySelectorAll('button')

btnFiltro.forEach(btn => btn.addEventListener("click", filtrarLivro))


function filtrarLivro() {
    
    const btnValor = document.getElementById(this.id)
    const categoria = btnValor.value
    let livrosFiltrados = categoria == 'disponivel' ? filtroEstoque() : filtroCategoria(categoria)
    exibeLivros(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalLivros(livrosFiltrados)
        exibirValorTotalLivros (valorTotal)
    }

}

function filtroCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtroEstoque() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalLivros(valorTotal) {
    elementoValorTotalLivros.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
      </div>
    `
}