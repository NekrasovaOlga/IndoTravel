const inputName = document.querySelector('.reservation__input_name');
const inputPhone = document.querySelector('#reservation__phone');

inputName.addEventListener('input', e => {
    const reg = /[А-Яа-я ]/gi;
    const result = inputName.value.match(reg);
    inputName.value = result?.join('') || '';
})

inputPhone.addEventListener('input', e => {
    const reg = /[+\d]/gi;
    const result = inputPhone.value.match(reg);
    inputPhone.value = result?.join('') || '';
})