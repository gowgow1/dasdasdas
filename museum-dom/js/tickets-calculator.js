// Ticket Type calculator
const permanentExhibition = document.querySelector('.permanent');
const temporaryExhibition = document.querySelector('.temporary');
const combinedExhibition = document.querySelector('.combined');
let ticketPrice = 20;

function inputCheck() {
    localStorage.setItem('permanent', `${permanentExhibition.checked}`);
    localStorage.setItem('temporary', `${temporaryExhibition.checked}`);
    localStorage.setItem('combined', `${combinedExhibition.checked}`);
}

permanentExhibition.addEventListener('click', value => {
    ticketPrice = 20;
    countTotalPrice();
    permanentExhibition.checked = true;
    temporaryExhibition.checked = false;
    combinedExhibition.checked = false;
    inputCheck();
});

temporaryExhibition.addEventListener('click', value => {
    ticketPrice = 25;
    countTotalPrice();
    temporaryExhibition.checked = true;
    permanentExhibition.checked = false;
    combinedExhibition.checked = false;
    inputCheck();
});

combinedExhibition.addEventListener('click', value => {
    ticketPrice = 40;
    countTotalPrice();
    combinedExhibition.checked = true;
    permanentExhibition.checked = false;
    temporaryExhibition.checked = false;
    inputCheck();
});

localStorage.getItem('permanent') === 'true' && permanentExhibition.setAttribute('checked', '');
localStorage.getItem('temporary') === 'true' && temporaryExhibition.setAttribute('checked', '');
localStorage.getItem('combined') === 'true' && combinedExhibition.setAttribute('checked', '');


// Ticket amount calculator
const inputBasic = document.querySelector('.number-basic');
const inputSenior = document.querySelector('.number-senior');
const buttonDown = document.querySelectorAll('.step-down');
const buttonUp = document.querySelectorAll('.step-up');
const total = document.querySelector('.buy-options__total-price');

function countTotalPrice() {
    let totalPrice = ticketPrice * inputBasic.value + ticketPrice * inputSenior.value / 2;
    total.innerHTML = `${totalPrice}`;
    localStorage.setItem('total', `${ticketPrice * inputBasic.value + ticketPrice * inputSenior.value / 2}`);
}

buttonDown[0].addEventListener('click', () => {
    inputBasic.value--;
    if (+inputBasic.value <= 0) {
        inputBasic.innerHTML = '0';
        inputBasic.value = 0;
    } else if (+inputBasic.value >= '20') {
        inputBasic.innerHTML = '20';
        inputBasic.value = 20;
    } else {
        inputBasic.innerHTML = `${inputBasic.value}`;
    }

    localStorage.setItem('basic', `${inputBasic.value}`);
    countTotalPrice();
})

buttonDown[1].addEventListener('click', () => {
    inputSenior.value--
    if (+inputSenior.value <= 0) {
        inputSenior.innerHTML = '0';
        inputSenior.value = 0;
    } else if (+inputSenior.value >= '20') {
        inputSenior.innerHTML = '20';
        inputSenior.value = 20;
    } else {
        inputSenior.innerHTML = `${inputSenior.value}`;
    }

    localStorage.setItem('senior', `${inputSenior.value}`);
    countTotalPrice();
})

buttonUp[0].addEventListener('click', () => {
    inputBasic.value++
    if (+inputBasic.value >= 20) {
        inputBasic.innerHTML = '20';
        inputBasic.value = 20;
    } else {
        inputBasic.innerHTML = `${inputBasic.value}`;
    }

    localStorage.setItem('basic', `${inputBasic.value}`);
    countTotalPrice();
})

buttonUp[1].addEventListener('click', () => {
    inputSenior.value++
    if (+inputSenior.value >= 20) {
        inputSenior.innerHTML = '20';
        inputSenior.value = 20;
    } else {
        inputSenior.innerHTML = `${inputSenior.value}`;
    }

    localStorage.setItem('senior', `${inputSenior.value}`);
    countTotalPrice();
})

total.innerHTML = `${localStorage.getItem('total')}`;
inputBasic.value = localStorage.getItem('basic');
inputSenior.value = localStorage.getItem('senior');