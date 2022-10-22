

const modalCreate = () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
// overlay_confirm
    const modal = document.createElement('div');
    modal.className = 'modal';


    modal.insertAdjacentHTML('beforeend', `
    <h2 class="modal__title">Подтверждение заявки</h2>
    <p class="modal__text">Бронирование путешествия в Индию на 6 человек</p>
    <p class="modal__text">В даты: 24 ноября - 7 декабря</p>
    <p class="modal__text">Стоимость тура 459 588₽</p>
    <div class="modal__button">
      <button class="modal__btn modal__btn_confirm">Подтверждаю</button>
      <button class="modal__btn modal__btn_edit">Изменить данные</button>
    </div>
    `)
    overlay.append(modal);
    return overlay
}

export default modalCreate;