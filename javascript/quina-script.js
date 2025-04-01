const result = document.getElementById('result');
const areasave = document.getElementById('areasave');
let currentNumbers = [];

function generateNumbers() {
    let numeros = [];

    while (numeros.length < 5) {
        let randomNumber = Math.floor(Math.random() * 80) +1;

        if (!numeros.includes(randomNumber)) {
        numeros.push(randomNumber);
    }
}
    
    numeros.sort((a, b) => a - b);

    for (let i = 0; i < 5; i++) {
        document.getElementById(`n${i+1}`).innerText = numeros[i].toString().padStart(2, '0');
    }

    result.classList.remove('transparent');
    areasave.classList.remove('transparent');

    currentNumbers = numeros;
}

function save() {

    try {
        localStorage.setItem('sorteioQuina', JSON.stringify(currentNumbers));
        alert ("Jogo da Quina salvo com sucesso: " + currentNumbers.join(', '));

        const historico = JSON.parse(localStorage.getItem('historicoJogos') || '[]');
        historico.push({
            jogo: 'Quina',
            data: new Date().toLocaleString(),
            numeros: currentNumbers
        });

        localStorage.setItem('historicoJogos', JSON.stringify(historico));

        result.classList.add('transparent');
        areasave.classList.add('transparent');
    } catch(e) {
        alert("Erro ao salvar: " + e.message);
    }
}