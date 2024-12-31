const URL ="https://api.restful-api.dev/objects";

const getFacts = async() =>{
    console.log("Getting data....");
    let response = await fetch(URL);
    console.log(response.status);//JSON Format
}