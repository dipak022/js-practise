
let xx = 10; // letaral syntex
const car = {
    name : "BMW",
    model : "500",
    weight : "80 kg",
    color : "Black",
    start : function (){
        console.log("Car Started");
    },
    drive : function (){
        console.log("Car drive");
    },
    brake : function (){
        console.log("Car brake");
    },
    stop : function (){
        console.log("Car stop");
    }
};


const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function(age) {
      this.studyInfo();  
      return this.firstName + " " + this.lastName + " age: " +age;
    },
    studyInfo : function() {
      console.log("Complate Software engineearing");
    }
};

person.country = "Bangladesh";

console.log(person['firstName']);
console.log(person.country);
console.log(person.id);
let info = person.fullName("20 years");
console.log(info);




