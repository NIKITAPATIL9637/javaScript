// Strings
let str1= "Nikita";
let str2= 'Patil';
console.log(str1, str2);

console.log(str1.length);
console.log(str2.length);

console.log(str1[2]);
console.log(str1[3]);

//Template Literals

let sentence = `This is a template literals`;
let num = 10;
console.log(sentence);
console.log(typeof sentence);
console.log(typeof num);
// object
let obj = {
    item: "pen",
    price: 10,
};
// String
console.log("The cost of",obj.item, "is", obj.price, "rupees.");
// Template
let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);

//interpolation
let string = `This is a template literal, ${1+2+3}`;
console.log(string);

//escape chacters
console.log("Nikita \n patil");
//tab space
console.log("Nikita \t patil");

//String Methods
let str3 = "Nikita Patil   ";
let str4 = "Pooja Patil";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3.trim());
console.log(str3.slice(5,10));
console.log(str3.concat(str4));
console.log(str3.replace("Nikita", "Nik"));
console.log(str3.charAt(4));

//practice Q
let fullname = prompt("Enter your fullname without spaces: ");
let username = "@" + fullname + fullname.length;
console.log(username);