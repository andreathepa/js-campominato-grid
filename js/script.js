

//Creare funzione per il singolo quadratino

function createsquare(){
    let square = document.createElement('div');

    square.classList.add('square')
    
    return square;
}


//Creo l'elemento in HTML che ospiterà la griglia
const grid = document.getElementById('grid');

for(i=0; i<=99; i++){
    let square = createsquare();
    square.innerText = i + 1

    square.addEventListener('click', function(){
        this.classList.toogle('clicked;');
    })

    grid.append(square)
}
