const startWidth = 15;
const endWidth = 35;
const distance = 500;

const buttonMenu = document.querySelector('.header__menu-button');
const menuSvgRect = document.querySelectorAll('.header__menu-button svg rect');
//const menuSvgRect2 = buttonMenu.querySelector('rect:nth-child(3)');

buttonMenu.addEventListener('click', () => {
    if(!buttonMenu.classList.contains('active')){
        buttonMenu.classList.add('active');
        update(startWidth);
    } else {
        buttonMenu.classList.remove('active');
        update(endWidth);
    }
})

function update(width) {
    menuSvgRect.forEach((circle, index) => {
        
        const angle = width * (2 - index / 10);
        console.log(angle)
        circle.style.transition = `0.${angle}s`;
        circle.setAttribute('width', `${angle}px`);
    });
}

