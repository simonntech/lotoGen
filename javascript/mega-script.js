const result = document.getElementById('result');
const areasave = document.getElementById('areasave');
const msg = document.getElementById('msg')
let currentNumbers = [];

function generateNumbers() {
    let numeros = [];

    while (numeros.length < 6) {
        let randomNumber = Math.floor(Math.random() * 60) +1;

        if (!numeros.includes(randomNumber)) {
        numeros.push(randomNumber);
    }
}

    numeros.sort((a, b) => a - b)
    
    for (let i = 0; i < 6; i++) {
        document.getElementById(`n${i+1}`).innerText = numeros[i].toString().padStart(2, '0');
    }

    result.classList.remove('transparent')
    areasave.classList.remove('transparent')

    currentNumbers = numeros;
}

function showMsg() {
    msg.classList.remove('transparent');

    setTimeout(() => {
        msg.classList.add('transparent');
    }, 5000)
}

function save() {

    try {
        localStorage.setItem('sorteioMega', JSON.stringify(currentNumbers));

        showMsg();

        const historico = JSON.parse(localStorage.getItem('historicoJogos') || '[]');
        historico.push({
            jogo: 'Mega-sena',
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