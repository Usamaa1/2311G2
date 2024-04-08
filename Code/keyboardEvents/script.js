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

email.addEventListener('keyup',()=>{
    console.log(email.value);

    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*.(\w{2,4})$/g;

    if(emailRegEx.test(email.value))
    {
        emailError.innerHTML ="";
    }
    else
    {
        emailError.innerHTML = "Kindly enter valid email only"
    }

})


password.addEventListener('keyup',()=>{
    console.log(password.value);

    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/g;

    if(passwordRegEx.test(password.value))
    {
        passError.innerHTML ="";
    }
    else
    {
        passError.innerHTML = "Password must contains 1 uppercase 1 lower case Letter, 1 special Character  and 1 Number only"
    }

})


eye.addEventListener('click',()=>{
    password.setAttribute('type','text')
})


