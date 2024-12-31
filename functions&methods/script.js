//function
/*function myFunction(){
    console.log("Hello Programmers!");
}
myFunction();
//Parameterised Function
function myfunction(msg){
    console.log(msg);
}
myfunction("I like JS.");

// sum
function sum(x, y){
    sum = x+y;
    return sum;
}
*/
//Arrow Functions

const arrowSum = (a,b) => {
    //console.log(a + b);
    return a+b;
}
arrowSum();

//takes string as an argument & return count of vowels

function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
            count++;
        }
    }
    console.log(count);
}
//arrow function
const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
            count++;
        }
    }
    console.log(count);
}

//For Each
let arr = ["Pune", "Bombay", "Bengluru"];
arr.forEach((val) => {
    console.log(val);
});

//print square of each number using for each loop

let nums = [2,3,5,6,8];

/* Using forEach
nums.forEach((num) => {
    console.log(num*num);
})*/

/*Using map method
nums.map((val) =>{
    console.log(val);
})*/

/* Arrow function
let calcSquare = (num) => {
    console.log(num*num);
}*/

// Filter
 let arrr = [1,2,3,4,5,6,7,8];

 let evenArrr = arrr.filter((val) => {
    return val % 2 === 0;
 });
 console.log(evenArrr);

 //reduce
 const output = arrr.reduce((res, curr) => {
    return res + curr;
 });
console.log(output);