const formClass =['reservation__form', 'tour__form'];

const loadData = async (cb, form) => {
    const result = await fetch('date.json');

    const data = await result.json();
   
    cb(data, form)
}
const countPeople = (dataName, data, form) => {
    const peopleInput = form.querySelector('select[name="people"]');
    let dataPrice = 0;
    form.addEventListener('change', e => {
    
        if(e.target.name == 'dates'){
            peopleInput.innerHTML = `<option value="" class="tour__option reservation__option">Количество человек</option>`;
            data.forEach(item => {
                if(item.date == form.dates.value){
                    
                    for(let i = item['min-people']; i <= item['max-people']; i++){
                        const items = document.createElement('option');
                        items.className = 'tour__option reservation__option';
                        items.textContent = i;
                        items.value = i;     
                        peopleInput.append(items);
                    }
                    dataPrice = item.price;
                }
            })
        }  
        if(e.target.name == 'people' && form.people.value != ''){
            const textData = document.querySelector('.reservation__data');
            const textPrice = document.querySelector('.reservation__price');
            const textPeople = (form.people.value > 1 && form.people.value <= 4) ? 'человека' : 'человек'
            textData.textContent = `${form.dates.value}, ${form.people.value} ${textPeople}`;
            textPrice.textContent = `${+dataPrice * + form.people.value}₽`
        }
    })
}
const changeInput = (data, form) => {
    const dataInputs = form.querySelector('select[name="dates"]');


    data.map(item => {
        const items = document.createElement('option');
        items.className = 'tour__option reservation__option';
        items.textContent = item.date;
        items.value = item.date;     

        
        dataInputs.append(items);
    })
    countPeople(dataInputs, data, form);
}

formClass.forEach( form => {
    const searchForm = document.querySelector(`.${form}`);
    loadData(changeInput, searchForm);
})




