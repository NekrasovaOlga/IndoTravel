import modal from './modal.js';


const footerForm = document.querySelector('.footer__form');
const reservationForm = document.querySelector('.reservation__form');

footerForm.addEventListener('submit', e => {
    e.preventDefault();

    const title = footerForm.querySelector('.footer__title');
    const text = footerForm.querySelector('.footer__text');
    const inputWrap = footerForm.querySelector('.footer__input-wrap');

    const data = {
        email: footerForm.email.value
    }
    fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'post',
        body: JSON.stringify(data)
    })
    .then( response => (response.ok) ? response.json : Promise.reject('is not ok: ' + response.status))
    .then( (person) => {
        title.textContent = 'Ваша заявка успешно отправлена';
        text.textContent = 'Наши менеджеры свяжуться с вами в течении 3-х рабочих дней'; 
        inputWrap.style.display = 'none';
    })
    .catch( (err) => {
        title.textContent = 'Упс... Что то пошло не так';
        text.textContent = 'Не удалось отправить заявку. Пожалуйста повторите попытку еще раз.';
    })
})



reservationForm.addEventListener('submit', e => {
    e.preventDefault();

    const reservationInputs = document.querySelector('.reservation__inputs');
    const reservationContacts = document.querySelector('.reservation__contacts');
    const reservationBottom = document.querySelector('.reservation__bottom');
    const reservationTitle = document.querySelector('.reservation__title');

    const data = {
        data: reservationForm.dates.value,
        countPeople: reservationForm.people.value,
        nameUser: reservationForm.fio.value,
        phoneUser: reservationForm.phone.value,
    }

    fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'post',
        body: JSON.stringify(data)
    })
    .then( response => (response.ok) ? response.json : Promise.reject('is not ok: ' + response.status))
    .then( (person) => {
        const modalOverlay = modal();
        document.body.append(modalOverlay)
        reservationTitle.textContent = 'Ваша заявка успешно отправлена';
        reservationInputs.textContent = 'Наши менеджеры свяжуться с вами в течении 3-х рабочих дней'; 
        reservationContacts.style.display = 'none';
        reservationBottom.style.display = 'none';
    })
    .catch( (err) => {
        alert('Не удалось отправить заявку. Пожалуйста повторите попытку еще раз.');
    })


})