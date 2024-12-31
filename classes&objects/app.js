//Prototypes
const student = {
    name : "Nikita Patil",
    marks : 8.74,

    printMarks: function (){
        console.log(this.marks);
    }
};
//if object & prototype have same method then object method will be used.
const employee = {
    calTax1() {
        console.log("Tax rate is 10x");
    }
};

const Nikita = {
    salary: 100000,
    calTax : function (){
        console.log("Tax rate is 20x");
    }
}

Nikita.__proto__ = employee;

//classes
class ToyotaCar {
    //Constructor
    constructor(brand, milage){
        console.log("Creating new object");
        this.brand = brand;
        this.milage = milage;
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(){
        this.brand = this.brand;
    }
}

let fortuner = new ToyotaCar("fortuner", 10);
let lexus = new ToyotaCar("lexus");
lexus.brand = "Scorpio";

//Inheritance
class Person{

    constructor(drink){
        this.drink = drink;
        console.log("Exit main constructor!")
    }

    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

   work(){
        console.log("Do Nothing!");
    }
}
//inheritence
class Engineer extends Person{
    //super constructor
    constructor(branch){
        super();
        //super.eat();
        this.branch = branch;
        console.log("Exit super constructor!")
    }
    work(){
        console.log("Work Fast!");
    }
}
//Argument passing
let nikitaPatil = new Engineer("Computer Engineering");

//Practice questions
let Data = "website data!";
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data : ", Data);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        Data = "Some new data!"
    }
}

let student1 = new User("Nikita", "abc123@.com");
let Admin1 = new Admin("admin", "admin@college.com");