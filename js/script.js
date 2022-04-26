/*
**Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**Consigli del giorno:**
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

/*
    1. Creare 5 numeri casuali (da 1 a 20).
    2. Rendere i numeri unici.
    3. Pusha i numeri in un array
    4. Creare un box dove appendere i numeri in modo che siano visibili.
    5. Creare un timer alla fine del quale i box guadagnano la classe "invisible".
    6. Creare un array vuoto in cui l'untente può pushare 5 numeri a suo piacimento.
    7. Confrontare l'arrey utente con quello estratto casualmente.
    8. Comunica i risultati.
*/

// Variabili universali
const INIT_BTN = document.querySelector(".my-btn");
const CONTAINER = document.querySelector(".container");
const limiteEstrazioni = 5;
let listaNumeriComputer = [];
let listaNumeriUtente = [];

// Logica
INIT_BTN.addEventListener('click', inizio);


// Funzioni
//
function inizio(){
    pulisci();
    setTimeout(cancellaCelle, "2000");

    for (let i = 0; i < limiteEstrazioni; i++){
        generaCella();
    }

}


// //
function pulisci(){
    CONTAINER.innerHTML = "";
    listaNumeriComputer = [];
}

function generaCella(){
    
    const box = document.createElement("div");
    box.classList.add("box", "center", "m10");

    box.append(generaNumeri(0, 9));


    CONTAINER.append(box);
    return box;
}

function generaNumeri(min, max){
    numero = Math.floor(Math.random() * (max - min));
    listaNumeriComputer.push(numero);

    console.log(listaNumeriComputer);
    return numero;
}

function cancellaCelle() {
    console.log("ciao");
    CONTAINER.innerHTML = "";
}