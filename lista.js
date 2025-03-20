// Array para armazenar a lista de compras
let listaDeCompras = [];

// Função para adicionar item à lista
function adicionarItem(item) {
    listaDeCompras.push(item);
    console.log(`Item '${item}' adicionado!`);
}

// Função para remover item da lista pela posição
function removerItem(posicao) {
    if (posicao >= 0 && posicao < listaDeCompras.length) {
        listaDeCompras.splice(posicao, 1);
        console.log(`Item na posição ${posicao} removido!`);
    } else {
        console.log("Posição inválida.");
    }
}

// Função para pesquisar item pelo nome
function pesquisarPorNome(nome) {
    const resultado = listaDeCompras.filter(item => item.toLowerCase().includes(nome.toLowerCase()));
    if (resultado.length > 0) {
        console.log("Itens encontrados: " + resultado.join(", "));
    } else {
        console.log("Nenhum item encontrado.");
    }
}

// Função para exibir a lista
function mostrar
