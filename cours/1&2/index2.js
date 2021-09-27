// alert('index2 : Le DOM de JS !')

// Selecteurs
//document.querySelector('h4').style.background="yellow"

// const baliseHTML = document.querySelector("h4");
// baliseHTML.style.background = "yellow";

// Click event
const questionContainer = document.querySelector(".click-event")
const btn1 = document.querySelector('#btn1');
const btn2 = document.getElementById('btn2');
const response = document.querySelector('p');
//console.log(questionContainer, btn1, btn2, response);

questionContainer.style.borderRadius = "25px";

// ajouter un event
questionContainer.addEventListener('click', () => {
    console.log("Click !");
    // questionContainer.style.border = "3px solid red";
    // rajoute ou enleve la classe
    questionContainer.classList.toggle('questionContainerClick');
})

btn1.addEventListener("click", () => {
    console.log("Click btn1");
    response.classList.add('showResponse');
    response.style.background = "green"
})

btn2.addEventListener("click", () => {
    console.log("Click btn2");
    response.classList.add('showResponse');
    response.style.background = "red"
}) 

// ----------------------------------------------------------------------
// mouse event
const mouseMove = document.querySelector('.mouseMove');
//console.log(mouseMove);

// ajouter un event
window.addEventListener('mousemove', (e) => {
    //console.log('la souris bouge');
    //console.log(e, e.target);
    mouseMove.style.left = e.pageX + "px";
    mouseMove.style.top = e.pageY + "px";

})

// Mouse down grossit le cercle
window.addEventListener("mousedown", () => {
    //console.log("test");
    mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
})

// Mouse up reduit le cercle
window.addEventListener("mouseup", () => {
    //console.log("test");
    mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
    mouseMove.style.border = "2px solid black"
})

// Mouse enter passe sur une div 
questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background ="rgb(0,0,0,0.6)"
})

// mouse out sort de la div
questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background =  "pink"
})

// Mouse over quand on passe sur la div 
response.addEventListener('mouseover', () => {
    response.style.transform = "rotate(2deg)"
})

// ----------------------------------------------------------------------
// keyPress event
 const keypressContainer = document.querySelector('.keypress');
 const key = document.getElementById("key");
// console.log(keypressContainer, key);

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
}

document.addEventListener('keypress', (e) => {
    //console.log("yes", e.key);
    key.textContent = e.key

    if(e.key === "b") {
        keypressContainer.style.background = "turquoise";
    } else if (e.key === "c") {
        keypressContainer.style.background = "pink";
        ring(e.key)
    } else {
        keypressContainer.style.background = "grey";
    }
}) 

// ----------------------------------------------------------------------
// Scroll event
const nav = document.querySelector("nav");
//console.log(nav);

window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px"
    }
})

// ----------------------------------------------------------------------
// forms event
const inputName =document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');

let pseudo = "";
let language = "";

console.log(inputName, select, form);
inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
    //console.log(pseudo);
});

select.addEventListener('input', (e) => {
    language = e.target.value;
    //console.log(language);
})

form.addEventListener('submit', (e) => {
    //evite le chargement de la page
    e.preventDefault();
    if(cgv.checked){
        // affiche le contenue des variables
        // selection de div sans class ni id
        // innerHTML peut injecter des balises 
        document.querySelector('form > div').innerHTML = `
            <h3>Pseudo : ${pseudo} </h3>
            <h4>Langage préféré : ${language} </h4>
        `
    }else {
        alert('Veuillez accepter les CGV')
    }
})

// ----------------------------------------------------------------------
// load event
window.addEventListener('load', () => {
    //console.log("Doc chargé ");
})

// ----------------------------------------------------------------------
//for each 
const boxes = document.querySelectorAll(".box");
//console.log(boxes);

// boxes.forEach((box) => {
//     box.addEventListener('click', (e) => {
//         //console.log(e.target);
//         box.style.transform = "scale(0.9)"
//     })
// })

// ----------------------------------------------------------------------
// addEventListener Vs onclick
// document.body.onclick = () => {
//     console.log("click");
// }

// bubbling => fin 
document.body.addEventListener('click', () =>{
    console.log("click 1");
}, false)

// Usecapture
document.body.addEventListener('click', () =>{
    console.log("click 2");
}, true)


// ----------------------------------------------------------------------
// Stop propagation
// questionContainer.addEventListener('click' , (e) =>{
//     alert('Test propagation');
//     e.stopPropagation
// })

// removeEventListener 

// ----------------------------------------------------------------------
// Browser Object Model BOM
btn2.addEventListener('click', () => {
    confirm('Etes vous sur ?')
})

btn1.addEventListener('click', () => {
    let answer = prompt("Entrez votre prénom !")
    questionContainer.innerHTML += '<h3>Bravo ' + answer + ' ! </h3>'
})

// Dans 2 sec tu execute la commande
// setTimeout(() => {
//     questionContainer.style.borderRadius = "300px"
// }, 2000)

// let interval = setInterval(() => {
//     document.body.innerHTML += 
//     `<div class='box'>
//         <h2>Nouvelle Boite!</h2>
//     </div>`;
// }, 1000);

// document.body.addEventListener('click', () => {
//     clearInterval(interval)
// })

//location 
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

// location.replace('http://google.com')
// window.onload = () => {
//    location.href = "http://twitter.fr"
//}

//console.log(navigator.userAgent);
//console.log(history)
//window.history.back()

// ----------------------------------------------------------------------
// SetProperty
window.addEventListener('mousemove', (e) => {
    nav.style.setProperty('--x', e.layerX + "px")
    nav.style.setProperty('--y', e.layerY + "px")
})