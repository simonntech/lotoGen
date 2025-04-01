const list = document.getElementById('list');
const nomeJogo = document.getElementById('nomeJogo');
const numeros = document.getElementById('numeros');
const data = document.getElementById('data');
const empty = document.getElementById('empty');

function acessoHistoricoJogos() {
    const jogos = localStorage.getItem('historicoJogos');
    if (jogos) {
        list.classList.remove('transparent');
        empty.classList.add('transparent');
        const historico = JSON.parse(jogos);

        list.innerHTML = '';

        historico.forEach((jogo, index) => {
            const item = document.createElement('div');
            item.className = 'list-item'

            item.innerHTML = `
                <h3>${jogo.jogo} - <span class="datalista"> ${jogo.data} </span></h3>
                <p><strong>Números: </strong>${jogo.numeros.join(', ')}</p>
                <button class="btn delete" onclick = "remove(${index})"><img src="../assets/deleteicon.png" alt="excluir jogo"> Excluir Jogo</button>
            `;

            list.appendChild(item)
        })

    }
}

function remove(index) {
    if (!confirm('Deseja realmente excluir esse jogo?')) {
        return;
    }

    const jogos = JSON.parse(localStorage.getItem('historicoJogos'));

    if (jogos && jogos.length > index) {
        jogos.splice(index, 1);

        localStorage.setItem('historicoJogos', JSON.stringify(jogos));

        acessoHistoricoJogos();

        if (jogos.length === 0) {
            list.classList.add('transparent')
            empty.classList.remove('transparent');
        }
        
    }

}