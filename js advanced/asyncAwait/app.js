async function getAllData() {
    console.log("Getting 1st data....");
    await getData(1);
    console.log("Getting 2nd data....");
    await getData(2);
    console.log("Getting 3rd data....");
    await getData(3);
}