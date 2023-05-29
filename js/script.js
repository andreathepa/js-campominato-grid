//Creare funzione creazione caselle
function createsquare(){
    let square = document.createElement('div');

    square.classList.add('square');
    
    return square;
}

//Creare bottone per far partire la partita


let butt = document.getElementById('butt')

//Aggiungere evento in modo tale che ogni volta che si clicca play appare la grid

butt.addEventListener('click', function(){
    //Creo variabile per raggiungere il mio grid
    const grid = document.getElementById('grid');
    //Così quando clicco play fornisce una nuova grid
    grid.innerHTML = '';


//Creo ciclo per generare i singoli quadrati con i numeri dentro
for(i=0; i<=99; i++){
    let square = createsquare();
    square.innerText = i + 1;

    //Creo l'evento per far sì di colorare una cella ogni volta che viene cliccata
    square.addEventListener('click', function(){
        this.classList.toggle('clicked');
        console.log(this)
    });
    //Stampo il singolo quadratino nella griglia
    grid.append(square)
}

});


