const storeAssay = [];
function calculateAndReturn(currentIndex,value){
    const result = currentIndex * value;
    return result;
}
function display(result, index, number){
    return `${number} * ${index} = ${result}`;
}
function multiplicationTable(number, length){
    let i = 1;
    //i <= length;
    for( ; ;) {
        if(i === length+1){
           break;
        }else{
            let storeResult = calculateAndReturn(i,number);
            let val =  display(storeResult, i, number);
            //console.log(val);
            storeAssay.push(val);
            i++;
        }
    }
}
const length = 10;
//const number = parseInt("10"); // any number 
const number = parseInt(prompt('Enter an any integer number for multiplication table : ')); // any number 
multiplicationTable(number, length);
let text = "";
for (let x of storeAssay) {
  text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;

