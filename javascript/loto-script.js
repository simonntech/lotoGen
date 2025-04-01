const result = document.getElementById('result');
const areasave = document.getElementById('areasave');
let msg = document.getElementById('msg');
let currentNumbers = [];

function generateNumbers() {
    let numeros = [];

    while (numeros.length < 20) {
        let randomNumber = Math.floor(Math.random() * 99) ;

        if (!numeros.includes(randomNumber)) {
        numeros.push(randomNumber);
    }
}
    
    numeros.sort((a, b) => a - b);

    for (let i = 0; i < 20; i++) {
        document.getElementById(`n${i+1}`).innerText = numeros[i].toString().padStart(2, '0');
    }

    result.classList.remove('transparent');
    areasave.classList.remove('transparent');
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
        localStorage.setItem('sorteioLoto', JSON.stringify(currentNumbers));
        showMsg();

        const historico = JSON.parse(localStorage.getItem('historicoJogos') || '[]');
        historico.push({
            jogo: 'Lotomania',
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