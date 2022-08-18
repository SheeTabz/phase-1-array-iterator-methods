// (function(){
//     console.log("Sam")
// })()
(function name(){
    console.log("Shee")
})()
const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
      personalQuote: "You're never too old to learn something new",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
      personalQuote: "I just got lost in thought - it was unfamiliar territory",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote: "Always remember you’re unique, just like everyone else",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
      personalQuote: "Behind every great man is a woman rolling her eyes",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote:
        "You don’t have to see the whole staircase, just take the first step",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
      personalQuote:
        "Failure is not the opposite of success: it’s part of success",
    },
  ];

function loopThroughArray(array){
    for(let item of array){
        console.log(item.firstName)
    }
}
// loopThroughArray(users)
function filterArrayColur(array){
    for(const item of array){
        if (item.favoriteColor === "Blue"){
            console.log(item.firstName)
        }
    }
}
filterArrayColur(users)

const user = [
    {
        name: 'John',
        yearOfBirth: 2000,
    },
    {
        name: "Shee",
        yearOfBirth: 2006
    }
]

// function cal(array){

// let age = 0
//     for(item of array){
      
//       return age;
//     }
   
// }
// console.log(cal(user))
function cal(item){
    const currentYear = new Date().getFullYear();
    const age = currentYear - item.yearOfBirth
    return age
}
const updateYear = user.map(cal)
console.log(updateYear)