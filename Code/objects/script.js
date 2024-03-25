// const person = 
// {
//     firstName: "Owais",
//     lastName: "Ahmed",
//     age: 56,
//     job: "Software Developer",
//     favColor: ['blue','black','purple']
// }

// console.log(person)

// console.log(person.firstName)

// console.log(person.age)
// console.log(person.favColor);
// console.log(person.favColor[1])


// Array of Objects

// const emps = [
//     {
//             firstName: "Owais",
//             lastName: "Ahmed",
//             age: 56,
//             job: "Software Developer",
//             favColor: ['blue','black','purple']
//         },
//         {
//                 firstName: "Haris",
//                 lastName: "zahid",
//                 age: 16,
//                 job: "Accountant",
//                 favColor: ['Magenta','Gray','White']
//             }
// ]


// console.log(emps)

// for (let i = 0; i < emps.length; i++) {
//     console.log(emps[i].age)
    
// }



const emps = {
                firstName: "Haris",
                lastName: "zahid",
                birthYear: 1996,
                job: "Accountant",
                favColor: ['Magenta','Gray','White'],
                age: function(currentYear){
                    return  currentYear - this.birthYear
                }
        }


const emps1 = {
                firstName: "Sharif",
                lastName: "Khan",
                birthYear: 2000,
                job: "Accountant",
                favColor: ['Magenta','Gray','White'],
                age: function(currentYear){
                    return  currentYear - this.birthYear
                }
}

// console.log(emps.firstName)
// console.log(lastName)

console.log(emps.age(2024));
console.log(emps1.age(2024));
