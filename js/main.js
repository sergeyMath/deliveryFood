const cartButton = document.querySelector('#cartButton');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal_close');


cartButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

function toggleModal(){
    modal.classList.toggle('is-open');
}

new WOW().init();