/*let promise = new Promise((resolve, reject) =>{
    console.log("I am a promise");
    resolve(123);
    //reject("some error occured");
});

function getData(dataId, getNextData){
    return new Promises((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}*/

const getPromise = () => {
   return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("Promises fullfilled!");
});

promise.catch((err) => {
    console.log("rejected");
});