const fly = document.createElement('div');
const docEl = document.documentElement;
let startScroll = 0;
fly.style.cssText = `
position: fixed;
width: 50px;
height: 50px;
right:0;
bottom: 0;
pointer-event: none;
background: url('img/fly.svg') center/contain no-repeat;
z-index: 9999;
`

document.body.append(fly);

const flyPositionCalc = () => {

    if(docEl.clientWidth < 758) {
        fly.style.display = 'none';
    } else {
        fly.style.display = 'block';
    }

const maxTop = docEl.clientHeight - fly.clientWidth;
const maxScroll = docEl.scrollHeight - docEl.clientHeight;

const percentScroll = (window.pageYOffset * 100) / maxScroll;

const left = maxTop * (percentScroll / 100);

if(startScroll < percentScroll){
    startScroll = percentScroll;
    fly.style.transform = `translateY(-${left}px) rotate(270deg)`;
} else {
    startScroll = percentScroll;
    fly.style.transform = `translateY(-${left}px) rotate(90deg)`;
}
};


window.addEventListener('scroll', () => {
    requestAnimationFrame(flyPositionCalc)
});

flyPositionCalc();