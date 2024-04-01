let firstName = document.getElementById("firstName");


// firstName.addEventListener('keyup',()=>{
//     console.log(firstName.value)
// })


// firstName.addEventListener('keydown',()=>{
//     console.log(firstName.value)
// })


// firstName.addEventListener('keypress',()=>{
//     console.log(firstName.value)
// })



firstName.addEventListener('keyup',()=>{
    console.log(firstName.value)

    let firstNameRegEx = /^[A-z]+$/g

    let firstNameError = document.getElementById('firstNameError');

    if(firstNameRegEx.test(firstName.value))
    {
        firstNameError.innerHTML = "";
    }
    else
    {
        firstNameError.innerHTML = "Kindly Enter Alphabets only.";

    }


})





city.addEventListener('keyup',()=>{
    console.log(city.value);

    let cityRegEx = /^[A-z]+$/g;

    if(cityRegEx.test(city.value))
    {
        cityError.innerHTML ="";
    }
    else
    {
        cityError.innerHTML = "Kindly Enter Alphabets only"
    }




})


zip.addEventListener('keyup',()=>{
    console.log(zip.value);

    let zipRegEx = /^\d+$/g;

    if(zipRegEx.test(zip.value))
    {
        zipError.innerHTML ="";
    }
    else
    {
        zipError.innerHTML = "Kindly Enter Numbers only"
    }




})






