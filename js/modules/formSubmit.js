import modal from './modal.js';
console.log(modal)


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



reservationForm.addEventListener('submit',async (e) => {
    e.preventDefault();

    const reservationTitle = document.querySelector('.reservation__title');
    const price = document.querySelector('.reservation__price');

    const data = {
        dataTime: reservationForm.dates.value,
        countPeople: reservationForm.people.value,
        nameUser: reservationForm.fio.value,
        phoneUser: reservationForm.phone.value,
        price: price.textContent,
    }

    const showModal = await modal.modalCreate(data);

    if(showModal){
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'post',
            body: JSON.stringify(data)
        })
        .then( response => (response.ok) ? response.json : Promise.reject('is not ok: ' + response.status))
        .then( (person) => {

            modal.modalSubmit('Ваша заявка успешно отправлена', 'Наши менеджеры свяжутся с вами в течении 3-х рабочих дней', true);

            reservationForm.reset();
            
            reservationForm.dates.disabled = true;
            reservationForm.people.disabled = true;
            reservationForm.fio.disabled = true;
            reservationForm.phone.disabled = true;
        })
        .catch( (err) => {
            modal.modalSubmit('Упс... Что-то пошло не так', 'Не удалось отправить заявку. Пожалуйста, повторите отправку еще раз', false);
        })
    }
})