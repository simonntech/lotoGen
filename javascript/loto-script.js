const result = document.getElementById('result');
const areasave = document.getElementById('areasave');

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
}