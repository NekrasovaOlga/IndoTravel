const headerSection = document.querySelector('.header');
const menuItem = document.querySelector('.header__menu');

headerSection.addEventListener('click', e => {
    const target = e.target;
    if(target.closest('.header__menu-button')){
        menuItem.classList.toggle('header__menu_active');
    } else if(menuItem.classList.contains('header__menu_active')){
        menuItem.classList.remove('header__menu_active');
    }
    
})