//alert('Exercice Calculatrice')

// Exo calculatrice
let total = 0;

function addition(x){
    // += tu ajoute x a total
    total += x ;
    return total;
}

function soustraction(x){
    // -= tu retire x a total
    total -= x ;
    return total;
}

function division(x){
    if(total === 0){
        return (total = x);
    } else {
        // /= tu division x a total
        total /= x ;
        return total;
    }
}

function multi(x){
    if(total === 0){
        return (total = x);
    } else {
        // *= tu multiplie x a total
        total *= x ;
        return total;
    }
}

function reset() {
    total = 0
}

const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');
// console.log(buttons, result);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
       console.log(e.target.id);
       result.textContent += e.target.id
    })
})

equal.addEventListener('click', () => {
    // eval calcule
    result.textContent = eval(result.textContent)
})

clear.addEventListener('click' , () => {
    result.textContent = ""
})