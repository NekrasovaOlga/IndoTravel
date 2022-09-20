const randomCount = (max, min, param) => {
    let newCount = Math.round(Math.random() * (max - min) + min);
    
    if(param == 'even'){
        while(newCount%2){
            newCount = randomCount(max,min,param);
        }
     }
     if(param == 'odd'){
        while(!(newCount%2)){
            newCount = randomCount(max,min,param);
        }  
     }
    return newCount;
}

const randomArray = (length, min, max, param) => {
    
    if(max < min) return randomArray(length, max, min, param);
  const mas = Array(length)
    .fill()
    .map(() => randomCount(max, min, param));

 return mas
}


console.log(randomArray(10, 20, 5, 'even'))