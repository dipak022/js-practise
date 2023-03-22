const car = ["A","B","C"];
let cars=[
    "A",
    "B",
    "c"
];
const car1 =[];
car1[0]="A";
car1[1]="B";
car1.push("C");
let car2 =car1[0]; 
console.log(car2);

const car3= new Array("A","B","C");
console.log(car3[0]);
for(let i=0;i<car3.length;i++){
    console.log(car3[i]);
}