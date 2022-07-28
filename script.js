const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btns = document.querySelectorAll('#top-col button')
const submitBtn = document.querySelector('#submit-btn');
const rateValue = document.querySelector('span');
const mainCard = document.querySelector('#main-card');
const secondaryCard = document.querySelector('#secondary-card');

let rate;


btn1.addEventListener('click', () => {
    removeBtns();
    btn1.classList.replace('btn-passive', 'btn-active');
    rate = 1;
})

btn2.addEventListener('click', () => {
    removeBtns();
    btn2.classList.replace('btn-passive', 'btn-active');
    rate = 2;
})

btn3.addEventListener('click', () => {
    removeBtns();
    btn3.classList.replace('btn-passive', 'btn-active');
    rate = 3;
})

btn4.addEventListener('click', () => {
    removeBtns();
    btn4.classList.replace('btn-passive', 'btn-active');
    rate = 4;
})

btn5.addEventListener('click', () => {
    removeBtns();
    btn5.classList.replace('btn-passive', 'btn-active');
    rate = 5;
})

submitBtn.addEventListener('click', () => {
    if (rate) {
        mainCard.classList.add('hide');
        secondaryCard.style.display = 'block';
        rateValue.append(rate);
    } else {
        alert('Please select a rating');
    }
})

// Removes the active-state styling for all buttons

function removeBtns() {
    for (let btn of btns) {
        btn.classList.replace('btn-active', 'btn-passive')
    }
}