

function createsquare(){
    let square = document.createElement('div');

    square.classList.add('square')
    
    return square;
}


let butt = document.getElementById('butt')

butt.addEventListener('click', function(){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

for(i=0; i<=99; i++){
    let square = createsquare();
    square.innerText = i + 1;

    square.addEventListener('click', function(){
        this.classList.toggle('clicked');
        console.log(this)
    });

    grid.append(square)
}

})



//Creo l'elemento in HTML che ospiterà la griglia
