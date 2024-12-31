console.log("Hello World!");
//This is a comment in javaScript!
/*This is Multiline comment*/
/* operators
   Arithmetic +,-,*,/
   Modulus %   second name is: remainder
   Exponentiation 2to the power 3
   Unary increment ++ decrement --
   Assignment =, +=, -=, *=, %=, **=
   //Comparision ==, equal to & type ===, !, Not & Type !===
   //Logical && || !
*/
//operands== any variable name or character

let a=10;
let b=2;
//Arithmetic
console.log("a+b =", a+b);
console.log("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);
//Modulus
console.log("a%b =", a%b);
//Exponentital
console.log("a**b =",a**b);
//Unary
console.log(++a);
console.log(--a);
//Assignment
console.log("a+=3", a+=3);
console.log("a-=3", a-=3);
console.log("a*=3", a*=3);
console.log("a%=3", a%=3);
console.log("a=3", a=3);
//Comparision
console.log("a==3", a==3);
console.log("a===3", a===3);
console.log("a!=3", a!=3);
console.log("a!==3", a!==3);
console.log("a<=3", a<=3);
console.log("a>=3", a>=3);
console.log("a>3", a>3);
console.log("a<3", a<3);
//Logical
let cond1 = a>b;
let cond2 = a===6;
console.log(cond1 && cond2);
console.log(cond1 || cond2);
console.log(!cond1 < cond2);



// Conditionals

let age = 23;
// if statement
if(age>18){
    console.log("You can vote!");
}
//if else statement
if(a>18){
    console.log("You can vote!");
}
else{
    console.log("You cannot vote!");
}
//if else if
if(age<18){
    console.log("Junior");
}
else if(age>60){
    console.log("Senior Citizen");
}
else{
    console.log("middle");
}
// Ternary Operators
let result = age>18 ? "Adult" : "Not Adult"

console.log(result);

// Practice Q

/*let name = prompt("Hello Guys..");
console.log(name);*/

/*let number = prompt("Enter Number..");
if(number %5 === 0){
    console.log(number,"Number is multiple of 5");
}
else{
    console.log(number,"Number is not multiple of 5");
}
*/

let score= prompt("Enter your score(0-100)");
let grade;

if(score>=90 && score<=100){
    grade = "A";
}
else if(score>=70 && score<=89){
    grade = "B"
}
else if(score>=60 && score<=69){
    grade="C"
}
else if(score>=50 && score<=59){
    grade="D"
}
else{
    grade="F";
}
console.log("Your grade is: "+ grade);

