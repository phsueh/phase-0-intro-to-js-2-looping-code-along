function writeCards(arr, event) {
    const writeCardsArr = [];
    for (let i = 0; i < arr.length; i++) {
        writeCardsArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    return writeCardsArr;
}

function countDown(num){
    const count = 0;
    while (count <= num) {
        console.log(num);
        debugger;
        num--;
    }
}
