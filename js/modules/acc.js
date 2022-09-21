const travelItem = document.querySelectorAll('.travel__item');
const travelButtons = document.querySelectorAll('.travel__item-title');
const travelWrapper = document.querySelectorAll('.travel__item-text-wrapper');

let travelAccHeight = 0;

travelWrapper.forEach(elem => {
    if(travelAccHeight < elem.scrollHeight){
        travelAccHeight= elem.scrollHeight;
    }
})
travelButtons.forEach( (btn, index) => {
    travelWrapper[0].style.height = `${travelAccHeight}px`;
    btn.addEventListener('click', () => {
        for( let i = 0; i < travelItem.length; i++){
            if(index === i){
                travelWrapper[i].style.height = `${travelAccHeight}px`;
                travelItem[i].classList.toggle('travel__item_active');
            } else {
                travelWrapper[i].style.height = ``;
                travelItem[i].classList.remove('travel__item_active');
            }
        }
    })
})