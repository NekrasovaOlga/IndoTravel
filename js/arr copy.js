const randomArray = (length, min, max, param) => {

    if(max < min) return randomArray(length, max, min);

    const mas = Array(length)
    .fill()
    .map(() => Math.round(Math.random() * (max - min) + min));

 return mas
}


console.log(randomArray(10, 20, 5, 'odd'))