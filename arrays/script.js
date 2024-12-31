let heroes = ['hritik','akshay','kartik','varun'];
console.log(heroes);
console.log(heroes[0]);
heroes[1]='vijay';
console.log(heroes);

for(let idx=0; idx<heroes.length; idx++){
    console.log(heroes[idx]);
}

for(let el of heroes){
    console.log(el.toUpperCase());
}

// practice Q
//Avg marks
let marks = [96, 87, 67, 57];
let sum = 0;
for(let ele of marks){
    console.log(marks);
    sum+=ele;
}
let avg = sum / marks.length;
console.log(`the avg marks of the c;ass = $(avg)`, avg);

//print offer prices
let items = [250, 645, 300, 900, 50];
let idx = 0;
for(let val of items){
    console.log(`value at index ${idx} = ${val}`);
    let offer = val / 10;
    items[idx] = items[idx] - offer;
    console.log(`value after offer = ${items[idx]}`)
    idx++;
}

/*Array Methods
push(): add to end
pop() : delete from end & return
toString() : converts array to string
*/

let veggies = ["potato", "lady fingure", "bottol guard", "bitter guard"];

veggies.push("cabbage");
console.log(veggies);

veggies.pop();
console.log(veggies);

console.log(veggies.toString());

let marvel_heroes = ["thor", "spiderman", "ironman", "antman", "Dr. strange"];
let dc_heroes = ["superman", "batman"];

let heroess = marvel_heroes.concat(dc_heroes);
console.log(heroess);

let value = marvel_heroes.shift();
console.log("deleted", value);

console.log(marvel_heroes.slice(1,4));

console.log(marvel_heroes.splice(2, 2, "Nikita", "Patil"));

// practice Q remove, remove n add on it place, add 

let companies = ["Bloomberg", "Microsoft", "Google", "PWC", "Oracle"];
companies.shift();
console.log(companies);
companies.splice(2, 1 ,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);

