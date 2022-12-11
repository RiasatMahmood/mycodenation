// const holidayDestination = (country,month) => {
//     console.log(`yay! Im going on holiday to ${country} in ${month}`)
// }
//     holidayDestination("spain","June")


// const hello =(myName, drink) => {
//     console.log(`hi my name is ${myName} and offers ${drink}`)
// }

// hello("Riasat","water")

// const multiply= (num1, num2) => {
//     return num1* num2
// }

// console.log(multiply (2,5))



// higher order function

const add = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}
console.log(add(2)(2))
