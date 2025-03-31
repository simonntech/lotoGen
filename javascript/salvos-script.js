// Função para carregar o último sorteio
function carregarUltimoSorteio() {
    const ultimoSorteio = localStorage.getItem('ultimoSorteio');
    if (ultimoSorteio) {
        return JSON.parse(ultimoSorteio);
    }
    return null; // Se não houver nada salvo
}

// Ao carregar a página, verifica se há um sorteio salvo
window.addEventListener('DOMContentLoaded', () => {
    const ultimoSorteio = carregarUltimoSorteio();
    if (ultimoSorteio) {
        console.log("Último sorteio:", ultimoSorteio);
        // Aqui você pode exibir os números na tela
    }
});