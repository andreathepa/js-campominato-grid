

//Creare funzione per il singolo quadratino

function createsquare(){
    let square = document.createElement('<div>');

    square.classList.add('square')
    
    return square;
}


//Creo l'elemento in HTML che ospiterà la griglia
const grid = document.getElementById('grid');

for(i=1; i<=100; i++){
    let square = createsquare();
    square.innerText = i + 1
}
