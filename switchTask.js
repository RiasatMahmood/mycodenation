// let topping = "beef"

// switch(topping) {
//     case "chicken":
//     case "sweetcorn":
//         console.log("these are important ingredients for my pizza")
//         break
    
//         case "pineapple":
//             case "beef":
//                 console.log(`i dont mind having ${topping} on my pizza`)
//                 break
        
//         case "ham":
//             case"tomatoes":
//             console.log (`${topping} should not be on my pizza`)
// }


// let password = ("2")
// if (password< "8"){
//     console.log("password too short")
// }

// else{
//     console.log("permission granted")
// }


// let num=1001
// if (1001 === 1001){
//   console.log("true")
// }
// else { console.log( "not a match")}


// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome'}

//     // take input
// const string =('abababa: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);

// let num=6.1
// if (num%3 === 0){

//     console.log("fizz")
// }
// else if (num%5 === 0){
//     console.log("buzz")
// }

// // else if (num%3 ==0&num%5 ==0) {
// //     console.log("fizzbuzz")
// // }

// else {console.log(num)}

// const time= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
// //let time=
// // let placeOfWork=CodeNation
// //let townOfHome=Blackburn
// //seconds in hour 3600
// let currentTime=new Date()
// const oneDay = (1000*60*60*24)
// const oneHour = (oneDay/24) 

// console.log(currentTime)
// console.log(oneDay)
// console.log(oneHour)

// if (time> 9 && time <17) {
//     console.log("at work")
// }

// let text = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// {console.log(text.lastIndexOf("a,e,i,o,u"))}

// const str = 'boab'

// const isPalidrome = (inStr) =>{
//     inStr=inStr.toLowerCase()
//     for (let i=0; i<inStr.length; i+=1) {
//         if (inStr[i] !== inStr[inStr.length - 1 - i ]) {
//             return false
        
//         }
//     }
//     return true
// }

// console.log(isPalidrome(str))


const str = 'bo...b'

const isPalidrome = (inStr) =>{
    inStr=inStr.replace(/\W/g,'')
    inStr=inStr.toLowerCase()

    return inStr === inStr.split('').reverse().join('')
}
    console.log(isPalidrome(str))