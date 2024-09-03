
//get the api and put it in myUrl
function getData (myUrl){
//get data from myUrl
    fetch (myUrl)
// the data from myUrl goes to respose when loaded
    .then((response) => {
//shows the data that was loaded
        console.log(response);
//now take machine data and convert to json file
        return response.json()
    })
    // Put json info in data
    .then((data) => {
    // put json data in console and display message as table
        console.table(data.message);
    // get section billede deom html and call it billede
        const billede = document.getElementById('billede')
    // in the section display img with  the sorce being my data message
        billede.innerHTML = `<img src="${data.message}">` 
    })
    // fanger fejl og displayer i consol
    .catch ((error) => {
        console.log(error);
    })
}
// gets data from api that getdata function grabs
getData('https://dog.ceo/api/breeds/image/random')



