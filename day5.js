// callback function => euta function chai arko function ma as an argument pass hunxa

// function sayHello(name,callback){
//     console.log(name)
//     callback()
// }

// function sayGoodBye(){
//     console.log("Goodbye")
// }

// sayHello("Sagar",sayGoodBye)

// higher order function (HOF)=> function that take accept one or more functions(callback) or return a function

//forEach HOF => loop matra line modification na garne vaye this is best

// const fruits=['Apple','Banana','Grape']

// // forEach HOF
// fruits.forEach(function(fruit){
//     console.log(fruit)
// })

// const numbers=[1,2,3,4,5]

// const squaredNumbers=[]
// numbers.forEach(function(number){
//     squaredNumbers.push(number**2) // **=this means power 2 
// })

// console.log(squaredNumbers)

// map HOF=>same as forEach but advantage of this map is we can use return as shown in given below example

// const numbers=[1,2,3,4,5]

// const squaredNumbers=numbers.map(function(number){
//    return number **2 
// })

// console.log(squaredNumbers)

// example users vanne array xa ani array vitra object xa. so object vitra ni array hunxa ra array vitra ni object hunxa
// map le original ma kei modification gardaina in the following example it only creates the new array

// const users=[
//     {
//         id:1,
//         firstName:"Sagar",
//         lastName:"Chaudhary",
//         address: "Sanepa"
//     },
//     {
//         id:2,
//         firstName:"Prabisha",
//         lastName:"Bajracharya",
//         address: "Godawari"
//     },
//     {
//         id:3,
//         firstName:"Bishal",
//         lastName:"Bajracharya",
//         address: "Godamchaur"
//     }
// ]

// // forEach using the arrow anonymous function
// users.forEach((user)=>{
//     console.log(user.firstName+user.lastName)
// })

// //map using the arrow anonymous function

// const result =users.map((user)=>{
//     return {
//         ...user, //...user => straight operator. yo user ma jati ako xa tei jasto xa testai dekhauxa
//         fullName: user.firstName + user.lastName //here the left hand side is the key
//     }
// })

// console.log(result)

// question exercise
// numbers2=[1,2,3,4,] yo xa yesma chai tala ko output hune gari aunu paryo

// [
//     {
//         number:1,
//         name:"A"
//     },
//     {
//         number:2,
//         name:"A"
//     },
//     {
//         number:3,
//         name:"A"
//     },
//     {
//         number:4,
//         name:"A"
//     },
// ]

// solution is given below

// const  numbers2=[1,2,3,4]

// const output=numbers2.map((number)=>{
//     return {
//         id:number,
//         name: "A"
//     }
// })

// console.log(output)

//filter == returns only true value 
// in the following example the output will be only the even values 

// const numbers3=[1,2,3,4,5,6,7,8,9,10]

// const evenNumber=numbers3.filter(function(number){
//     return number %2 ==0
// })

// console.log(evenNumber)

// example 2 of filter
// const books=[
//     {
//         title: "Mahabir Pun",
//         author: "Mahabir Pun",
//         year: 2023
//     },
//     {
//         title: "book2",
//         author: "author2",
//         year: 2020
//     },
//     {
//         title: "book3",
//         author: "author3",
//         year: 2021
//     },
//     {
//         title: "book4",
//         author: "author4",
//         year: 2022
//     },
//     {
//         title: "book5",
//         author: "author5",
//         year: 1990
//     },
//     {
//         title: "book6",
//         author: "author6",
//         year: 2024
//     },
//     {
//         title: "book7",
//         author: "author7",
//         year: 1999
//     },
//     {
//         title: "book8",
//         author: "author8",
//         year: 2018
//     },
// ]

// const output=books.filter(function(book){
//     return book.year > 2000
// })
// console.log(output)

// example 3 of use of filter
// const files =["app.js","script.js","style.cs","apple.c"]

// const jsFiles=files.filter(function(file){
//     return file.endsWith('.js')
// })

// console.log(jsFiles)

// const data= [10,null,0,"sagar",undefined,null,50]

// const output=data.filter(function(item){
//     return item!==null && item!==undefined
// })
// console.log(output)

//question tala vako data set ma author ko name Mahabir Pun vako wala matra filter garera aunu paryo

// const books=[
//     {
//         title: "Mahabir Pun",
//         author: "Mahabir Pun",
//         year: 2023
//     },
//     {
//         title: "book2",
//         author: "author2",
//         year: 2020
//     },
//     {
//         title: "book3",
//         author: "author3",
//         year: 2021
//     },
//     {
//         title: "book4",
//         author: "author4",
//         year: 2022
//     },
//     {
//         title: "book5",
//         author: "author5",
//         year: 1990
//     },
//     {
//         title: "book6",
//         author: "author6",
//         year: 2024
//     },
//     {
//         title: "book7",
//         author: "author7",
//         year: 1999
//     },
//     {
//         title: "book8",
//         author: "author8",
//         year: 2018
//     },
// ]

// const output=books.filter(function(book){
//     return book.author=="Mahabir Pun"
// })
// console.log(output)


//reduce => yo use garda callback function ma (accumulator,currentValue) yesari hunxa
// const numbers=[1,2,3,4,5]

// const result=numbers.reduce(function(accummulator,currentValue){
//         return accummulator + currentValue
// },0) //0=>initial value of accumulator

// console.log(result)

// example 2 of reduce 
// return jaile ni accumulator garne
// const cartItems=[
//     {
//         name:"Product A",
//         quantity: 2,
//         price: 2
//     },
//     {
//         name:"Product B",
//         quantity: 5,
//         price: 5
//     },
//     {
//         name:"Product C",
//         quantity: 4,
//         price: 200
//     }
// ]

// //total quantity, total kati amount ko product xa

// const output = cartItems.reduce(function(accummulator,currentProduct){
//     accummulator.totalPrice=accummulator.totalPrice + (currentProduct.quantity * currentProduct.price)
//     accummulator.totalQuantity=accummulator.totalQuantity + currentProduct.quantity
//     return accummulator
// },{totalPrice:0,totalQuantity:0})

// console.log(output)

// example 3 => age adhar ma group garnu paryo tala ko data haru

// const people=[
//     {
//         name:"Sagar",
//         age:22
//     },
//     {
//         name:"Prabisha",
//         age:22
//     },
//     {
//         name:"Bishal",
//         age:20
//     },
//     {
//         name:"Person4",
//         age:25
//     }
// ]

// const groupedData=people.reduce(function(accummulator,person)
// {
//     const age=person.age
//     //tala ko code logic ma if age wala key xaina vane empty array create garne if xa vane tesma person ko data halne
//     if(!accummulator[age]){
//         accummulator[age]=[]
//     }
//     accummulator[age].push(person)
//     return accummulator
// },{})

// console.log(groupedData)

