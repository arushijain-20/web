const container = document.querySelector('.container');
const seats = document.getElementsByClassName('row>seat:not(occupied)');
const count = document.querySelector('.count');
const total = document.querySelector('.total');
const movieSelect= document.querySelector('#movie');

var price = parseInt(movieSelect.value);


function updateTotal(){
    const selected = document.querySelectorAll('.row>.selected');


    count.innerText = selected.length;
    total.innerText = selected.length * price;
    
}

movieSelect.addEventListener('change',(e)=>{

    price=parseInt(e.target.value);
    updateTotal();
});







container.addEventListener('click', (e)=>{
    if(!e.target.classList.contains('occupied') &&
     e.target.classList.contains('seat')){

        e.target.classList.toggle('selected');
    
        updateTotal();
    }
});