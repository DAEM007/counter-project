// REFERENCE TO THE ELEMENTS FOR DOM MANIPULATION
const counter = document.querySelector('.counter');
const lowCount = document.querySelector('#count-low');
const highCount = document.querySelector('#count-high');


let count = 0;

highCount.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > 0){
        counter.style.color = 'rgb(19, 238, 19)';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = '#fff';
    }
    counter.animate({
        opacity: [0.2, 1.0],
    },
    {
        fill: 'forwards',
        duration: 1000
    }
    )
})

lowCount.addEventListener('click', () => {
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML < 0){
        counter.style.color = 'rgb(255, 0, 0)';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = '#fff';
    }
    counter.animate({
        opacity: [0.2, 1.0],
    },
    {
        fill: 'backwards',
        duration: 1000
    }
    )
})


