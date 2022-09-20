'use strict';

{
    
    const timerRaining = (timerDoc, deadline) => {

        const secondArr = ['секунда', 'секунды', 'секунд'];
        const minutesArr = ['минута','минуты','минут'];
        const hoursArr = ['час','часа', 'часов'];
        const dayArr = ['день', 'дня', 'дней'];

        const createElem = (elem, className) => {
            const elemBlock = document.createElement(elem);
            elemBlock.className = className;

            return elemBlock;
        }

        timerDoc.classList.add('timer');

        const timerTitle = createElem('p', 'timer__title');
        timerTitle.textContent = 'До конца акции осталось:';

        const timerItemDays = createElem('p', 'timer__item_days timer__item');
        const timerItemHours = createElem('p', 'timer__item_hours timer__item');
        const timerItemMinutes = createElem('p', 'timer__item_minutes timer__item');


        const timerCountDays = createElem('span', 'timer__count timer__count_days');
        const timerCountHours = createElem('span', 'timer__count timer__count_hours')
        const timerCountMinutes = createElem('span', 'timer__count timer__count_minutes');

        const timerUnitsDays = createElem('span', 'timer__units timer__units_days');
        const timerUnitsHours = createElem('span', 'timer__units timer__units_hours')
        const timerUnitsMinutes = createElem('span', 'timer__units timer__units_minutes');

        timerItemDays.append(timerCountDays, timerUnitsDays);
        timerItemHours.append(timerCountHours, timerUnitsHours);
        timerItemMinutes.append(timerCountMinutes, timerUnitsMinutes);

        timerDoc.append(timerTitle, timerItemDays, timerItemHours, timerItemMinutes);


        const getDeclination = (time, timeArr) => {
            let oneTime = time % 100;
            
            if(oneTime >= 5 && oneTime <= 20){
                return timeArr[2]
            }
            oneTime = time % 10;
            if(oneTime === 1){
                return timeArr[0]
            }
            if(oneTime >= 2 && oneTime <= 4){
                
                return timeArr[1]
            } else {
                
                return timeArr[2]
            }
        }

        const dataTimer = () => {
            const nowData = Date.now();
            const endData = new Date(deadline).getTime();
            console.log(endData)

            var date = new Date(); //Current timestamp
date = date.toGMTString(); 
//Based on the time zone where the date was created
console.log(date);

/*based on the comment getTimezoneOffset returns an offset based 
on the date it is called on, and the time zone of the computer the code is
 running on. It does not supply the offset passed in when constructing a 
date from a string. */

date = new Date(date); //will convert to present timestamp offset
date = new Date(date.getTime() + (date.getTimezoneOffset() * 60 * 1000)); 
console.log(new Date(date));


            const timeRaining = endData - nowData;
            
            const timerDay = Math.floor(timeRaining / (1000 * 60 * 60 * 24));
            let timerHours = Math.floor(timeRaining / (1000 * 60 * 60));
            let timerMinutes = Math.floor(timeRaining / (1000 * 60) % 60 );
            let timerSecond = Math.floor(timeRaining / 1000 % 60 );

            const declinationDay = getDeclination(timerDay, dayArr);
            const declinationHours = getDeclination(timerHours, hoursArr);
            const declinationMinutes = getDeclination(timerMinutes, minutesArr);
            const declinationSecond = getDeclination(timerSecond, secondArr);

            if(timerHours < 10){
                timerHours = '0' + timerHours;
            }
            if(timerMinutes < 10){
                timerMinutes = '0' + timerMinutes;
            }
            if(timerSecond < 10){
                timerSecond = '0' + timerSecond;
            }
            return {timeRaining, timerDay, timerHours, timerMinutes, timerSecond, declinationDay, declinationHours, declinationMinutes, declinationSecond }
        }
        const returnElem = (elems, timerText) => {
            elems.map((item, index) => {
                return item.textContent = timerText[index];
            })
            return elems;    
        }

        const start = () => {
            const timer = dataTimer();

            const timerItemNumber = [timerCountDays, timerCountHours, timerCountMinutes];
            const timerTextArr = [timerUnitsDays, timerUnitsHours, timerUnitsMinutes];

            let declinationArr = [timer.declinationDay, timer.declinationHours, timer.declinationMinutes];
            let timerNumberArr = [timer.timerDay,timer.timerHours, timer.timerMinutes];

            returnElem(timerItemNumber, timerNumberArr);
            returnElem(timerTextArr, declinationArr);

            if(timer.timerDay <= 0){
                let declinationArr = [timer.declinationHours, timer.declinationMinutes, timer.declinationSecond];
                let timerNumberArr = [timer.timerHours, timer.timerMinutes, timer.timerSecond];

                returnElem(timerItemNumber, timerNumberArr);
                returnElem(timerTextArr, declinationArr);

            }

            if(timer.timeRaining < 0){
                timerDoc.textContent = 'Акция закончилась';
                timerDoc.style.cssText = `
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px`;
            }
         const interBal = setTimeout(start, 1000);
        }
        start();
    }
    const timerDoc = document.querySelectorAll('[data-timer-deadline]');

    timerDoc.forEach( itemTimer => {
        timerRaining(itemTimer, itemTimer.dataset.timerDeadline);
    })
    
}