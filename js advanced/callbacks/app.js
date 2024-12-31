console.log("one");
console.log("two");

setTimeout(() =>{
    console.log("hiii");
},2000);//timeout

console.log("three");
console.log("four");

//synchronous programming callback
function sum(a,b){
    console.log(a+b);
}

function calculator (a,b, sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum);

//asynchronous programming callback
const hello = () => {
    console.log("hello");
};
setTimeout(hello,3000);

//callback hell topic
function getData (dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

//callback hell
getData(1, () =>{
    console.log("Getting data1...");
    console.log("Getting data2...");
    getData(2, () =>{
        getData(3);
        console.log("Getting data3...");
    });
})

