console.log("Hello World!");
//for loop
let sum = 0;
for(let i=1; i<=5; i++){
    sum=sum+i;
}
console.log("sum= ", sum);
console.log("Loop has ended.");
//While loop
let i=1;
while(i<=5){
    console.log("i= ", i);
    i++;
}
//do while loop
let j=20;
do{
    console.log("Heyy sam!")
    j++;
} while(j<=30);
//for-of loop
let str = "Nikita Patil";
let size = 0;
for(let i of str){
    console.log("i = ",i);
    size++;
}
console.log("String size= ", size);
// for-in loop
let student = {
    name: "Nikita Patil",
    age: 23,
    cgpa: 8.74,
    isPass: true
};
for(let key in student){
    console.log("Key= ", key, "Value= ", student[key]);
}
// Practice Q
//print even numbers
for(let num=0; num<=100; num++){
    if(num%2 === 0){
        console.log(num);
    }
}
console.log("Loop has ended.");
//print odd numbers
for(let num=0; num<=100; num++){
    if(num%2 !== 0){
        console.log(num);
    }
}
//guessing game

let gamenum = 25;

let usernum = prompt("Guess the game number: ");

while(usernum != gamenum){
    usernum = prompt("You entered the wrong number, Guess again: ");
}
console.log("Congratulations, You entered the right number.");