function writeCards(arrNames, eventName){
    let arr = [];
    for(let i = 0; i < arrNames.length; i++){
        arr.push(`Thank you, ${arrNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return arr;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(n){
    while(n >= 0){
        console.log(n--);
    }
}