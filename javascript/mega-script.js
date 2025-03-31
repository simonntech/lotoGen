const result = document.getElementById('result');
const areasave = document.getElementById('areasave')

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

    return numeros
}


function save(numeros) {
    localStorage.setItem('ultimoSorteio', JSON.stringify(numeros))

    alert("Jogo salvo!" + numeros)

    result.classList.add('transparent')
    areasave.classList.add('transparent')
}