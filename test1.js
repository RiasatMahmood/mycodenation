// {
// const oneDay = (1000*60*60*24)
// let currentTime = new Date();
// const myBirthday = new Date(2023,05,17)
// const difference= (currentTime-myBirthday)


// console.log(oneDay)
// console.log(currentTime)
// console.log(myBirthday)
// console.log(Math.round(difference/86400000)) }

// const oneDay = (1000*60*60*24)
// let currentTime = new Date()
// const birthdate = new Date(1991,05,17)
// const difference =(birthdate-currentTime)

// console.log(oneDay)
// console.log(currentTime)
// console.log(birthdate)
// console.log(Math.round(difference/86400000))

// let numberGen = "start"

// while (numberGen != 50) {
//  console.log(numberGen)
//  numberGen= Math.ceil(Math.random()*100)

// }
// console.log(numberGen)

// const loop = (times, callback) => { for (let i = 0; i < times; i++) { callback(i); } };



let day ="sunday"

const person = {
    firstName: "sally",
    lastName:"evans",
    age:27,
    occupation:"sales assistant",
    married: false,
    homeOwner:false,
    hobbies: ["tennis", " boxing", "gym"],

}

if (day=== "saturday" || day === "sunday") {
    console.log(`great its ${day}, lets play ${person.hobbies[1]}`)
}
else{
    console.log(`oh no its ${day} i hate being a ${person.occupation}`)
 }




// const person = {
//     firstName: "sally",
//     lastName:"evans",
//     age:27,
//     occupation:"sales assistant",
//     married: false,
//     homeOwner:false,
//     hobbies: ["tennis", " boxing", "gym"],
//     marketingOp() {
//         if (this.homeOwner== false && this.age >25) {
//             return"send mortgage offer email"
//         }
//         else if (this.homeOwner == false && this.age <25){
//             return "Send summer holiday fun credit card offer"
//         }
//         else if (this.homeOwner== true && this.age>25){
//             return " asddf"
//         }
//         else{
//             return "asdsd"