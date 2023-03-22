let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZSDad";
let length = text.length;
console.log(length);

let str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("sadfsdg"));

let text1 = "Please locate where 'locate' occurs!";
console.log(text1.indexOf("locate", 2));

let text3 = "The rain in SPAIN stays mainly in the plain";
console.log(text3.match("ain"));

let firstName = "John";
let lastName = "Doe";

let textName = `Welcome ${firstName}, ${lastName}!`;
console.log(textName);


let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);