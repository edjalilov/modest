let name = document.querySelector('#name');
let email = document.querySelector('#email');
let textarea = document.querySelector('.contact__box-text');
let contactBtn = document.querySelector('.contact__btn');

contactBtn.addEventListener('click', function () {
    document.querySelector('#name').value = ' ';
    document.querySelector('#email').value = ' ';
    document.querySelector('.contact__box-text').value = ' ';
})