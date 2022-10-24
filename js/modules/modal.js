import style from './loadStyle.js';

const modalCreate = async (data) => {
    await style('css/modal.css');

    
    const overlay = document.createElement('div');
    const modal = document.createElement('div');
    const modalButton = document.createElement('div');

    overlay.className = 'overlay overlay_confirm';
    modalButton.className = 'modal__button';
    modal.className = 'modal';

    const closeForm = document.createElement('button');
    const submitForm = document.createElement('button');

    closeForm.className = 'modal__btn modal__btn_edit';
    submitForm.className = 'modal__btn modal__btn_confirm';

    closeForm.textContent = 'Изменить данные';
    submitForm.textContent = 'Подтверждаю';

    modal.insertAdjacentHTML('beforeend', `
    <h2 class="modal__title">Подтверждение заявки</h2>
    <p class="modal__text">Бронирование путешествия в Индию на ${data.countPeople} человек</p>
    <p class="modal__text">В даты: ${data.dataTime}</p>
    <p class="modal__text">Стоимость тура ${data.price}</p>
    `)

    modalButton.append(submitForm , closeForm);
    modal.appendChild(modalButton);

    overlay.append(modal);

    document.body.append(overlay);

    return new Promise( resolve => {
      closeForm.addEventListener('click', e => {
        overlay.remove();
        resolve(false);
      })
  
      submitForm.addEventListener('click', e => {
        overlay.remove();
        resolve(true);
      })
    })

    
}

const modalSubmit = async (title, desciprion, status) => {
  await style('css/modal.css');

    
    const overlay = document.createElement('div');
    const modal = document.createElement('div');
    const modalButton = document.createElement('div');

    overlay.className = 'overlay overlay_confirm';
    modalButton.className = 'modal__button';
    modal.className = 'modal';

    const closeForm = document.createElement('button');
    const submitForm = document.createElement('button');

    const createImg = new Image();
    createImg.src = 'img/ok.png';

    closeForm.className = 'modal__btn modal__btn_close';
    submitForm.className = 'modal__btn modal__btn_form';

    closeForm.textContent = 'X';
    submitForm.textContent = 'Забронировать';

    modal.insertAdjacentHTML('beforeend', `
    <h2 class="modal__title modal__title-success">${title}</h2>
    <p class="modal__text">${desciprion}</p>
    `)

    if(status){
      modalButton.append(createImg, closeForm);
    } else {
      modalButton.append(submitForm , closeForm);
    }
    
    modal.appendChild(modalButton);

    overlay.append(modal);

    document.body.append(overlay);

    return new Promise( resolve => {
      closeForm.addEventListener('click', e => {
        overlay.remove();
        resolve(false);
      })
  
      submitForm.addEventListener('click', e => {
        overlay.remove();
        resolve(true);
      })
    })
}

export default {modalCreate, modalSubmit};