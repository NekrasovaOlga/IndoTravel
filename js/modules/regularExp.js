// const inputName = document.querySelector('.reservation__input_name');
const inputPhone = document.querySelector('#reservation__phone');

// inputName.addEventListener('input', e => {
//     const reg = /[А-Яа-я ]/gi;
//     const result = inputName.value.match(reg);
//     inputName.value = result?.join('') || '';
// })

// inputPhone.addEventListener('input', e => {
//     const reg = /[+\d]/gi;
//     const result = inputPhone.value.match(reg);
//     inputPhone.value = result?.join('') || '';
// })

const telMask = new Inputmask('+7 (999) 999-99-99');

telMask.mask(inputPhone);

const justValidate = new JustValidate('.reservation__form');
justValidate
    .addField('.reservation__input_name', [
        {
            rule: 'required',
            errorMessage: 'Укажите ваше ФИО',
        },
        {
            rule: 'minLength',
            value: 5,
            errorMessage: 'Не короче 5 символов',
        },
    ])
    .addField('.reservation__input_phone', [
        {
            rule: 'required',
            errorMessage: 'Укажите ваш телефон',
        },
        {
            validator(value){
                const phone = inputPhone.inputmask.unmaskedvalue();
                return !!(Number(phone) && phone.length === 10);
            },
            errorMessage: 'Номер телефона набран не правильно',
        }
    ])