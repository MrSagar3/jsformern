//fucntion-> resusable bloock of code writtene to overcome repetition and more.
//  types-> 1) named function, 
//          2) regular function,
//          3) arrow function,
//          4) anonymous function

// regular function example

// function add(a,b,c){
//     console.log(a+b+c)
// }

// add(1,3) // yesto ma error auxa output=NaN(Not a Number)

// function add(a,b,c=3){
//     console.log(a+b+c)
// }
// add(1,2) //yesma chai result = 6 auxa because default value of parameter is given

// function add(a,b,c=3){
//     console.log(a+b+c)
// }
// add(1,2,4) // yesma chai result 7 auxa cause arugement ma value deko xa ani argument ma value dida parameter ma vako value lidaina 

//Named function

// above functioin can also be written as below and it is known as named function

// let add= function(a,b,c){
//     console.log(a+b+c)
// }

// add(1,3,1)


// arrow function
// this is online arrow function

// let add =(a,b,c) => console.log(a+b+c)
// add(1,2,1)

// for multiple return we must use curly braces like shown  in the below example

// let add=(a,b,c) =>{
//     console.log(a+b+c)
//     console.log("hello")
// }

// add(1,2,1)

// anonymous function example

// (()=>{
//     console.log("I am anonymouse")
// })()

// question => create a function that gives the square of the give number

// let squarenum=(a)=>{
//     return a*a
// }
// const result = squarenum(5)
// console.log(result)

// LOOPS in javascript
// loops  are used to do the repitative task

const friends=['Sagar','Prabisha','Bishal']

// for loop

// syntax: for(initialization;condition;iteration)

// for(let i=0;i<3;i++){
//     console.log(i)
// }

// printing the value of array using the for loop

// for(i=0;i<3;i++){
//     console.log(friends[i])
// }


// using the length method

// for(i=0;i<friends.length;i++){
//     console.log(friends[i])
// }

// using the advance version of for loop
// // the below one is mainly used for the array
// for(friend of friends)
// {
//     console.log(friend)
// }

// further use of advance version of for loop. in the following example we have created an object 
// const person={
//     name:"Sagar Chaudhary",
//     address:"Sanepa"
// }

// now we have to access the key value of the above person object we use the for loop as the following
// for(let key in person){
//     console.log(key)
// }

// now if we have to access the value of the person object using the advance for loop then we use the following

// for(let value in person){
//     console.log(person[value])
// }

// accessing the both the key and value of the object then we use the advance for loop through the following way

// for(let key in person){
//     console.log(key,person[key])
// }

// Hoisting => behaviour where variable and function declaration are moved to the top during compilation phase

// hoisting makes the use of variable or function without first declaring it
// as it doesnot gives the error but gives undefined output

// var bata use garera varaible banako xa vane tyo kura lai bannu vanda agadi use garna sakinxa but let use garera banako xa vane use garna sakidaina error auxa

// hoisting example
// console.log(name)
// var name="Sagar Chaudhary" // output : undefined

// let kaile ni hoisted hudaina
// let name="sagar" //output: error

// regular function jaile ni hoisted hunxa
// add()
// function add(){
//     console.log(1+1)
// } //output=2

// arrow function ni hoisted hudaina
// add()
// let add=()=>{
//     console.log(1+1)
// } //output: error


// named function ma ni hoisted hudaina
// add()
// var add=function(){
//     console.log(1+1)
// }


//question output k auxa 
function example(){
    console.log(y)
    var y=99 //var use garera yo hoisted hunxa so output : undefined
    // let y=99//same kura let use garyo vane chai error auxa
}
example()

