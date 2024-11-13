// properties of array: array ma const ma change garna pauxa
//  push = insert the data from last and pop = take out the data from the array from last
// const days=['sunday','monday','tuesday']
// days.push("wednesyday") // inserting the data in array
// days[3]="wednesday" //ways to insert the data in array
// days.pop()
// console.log(days)

//unshift = used to insert the data in array from the begining and shift= used to insert the data in array

// days.unshift('saturday') //this will insert the saturday in the beginnig in array
// days.shift() //this will delete the saturday in the beginnig in array
// console.log(days) 
// console.log(days.length) // this will give the number of element present in the array

// slice 
// splice 
// split

// const numbers=[1,2,3,4,5]

// slice --> used to create of a portion of the array. It doesn't modify the original array

// syntax = slice(startIndex,endIndex) -> where startIndex is inclusive, endIndex is exlusive

// const newSlicedArray=numbers.slice(1,4)
// console.log(newSlicedArray)

// splice --> is used to change the content of an array by removing or replacing existing and/or adding new elements. modifies the original array
// syntax = splice(startIndex,deleteCount,item)

// let splicedNumbers=numbers.splice(2,1)
// console.log(splicedNumbers)
// console.log(numbers)

//split --> string lai array ma convert garxa 
// let text="I love javascript"
// const newArray=text.split(" ")
// console.log(newArray)

// object related methods

// const person={
//     name : "sagar chaudhary",
//     address : "sanepa"
// }
// Object.freeze(person)
// person.age=22 //yesari ni object ma values halna payo

// console.log(person)

// console.log(Object.keys(person)) //gives the output keys only
// console.log(Object.values(person)) //gives the output values only


// CONDITIONAL In Javascript

//if else condition
// const isRaining = false
// if(isRaining){
//     console.log("carry umbrella")
// }
// else{
//     console.log("dont carry umbrella")
// }


//else if condition
// const temperature=30
// if(temperature > 30){
//     console.log("it is hot outside")
// }
// else if (temperature > 25 && temperature <= 30){
//     console.log("It is pleasant outside")
// }
// else{
//     console.log("it is cold outside")
// }


// tenary operator -> syntax: condition ? "result when condtion becomes true": "result when condition becomes false"
// const isRaining= true
// const result = isRaining ? "carry umbrella": "dont carry umbrella"
// console.log(result)



// short circuit evaluation
// eg 1
// const isRaining=true
// const result = isRaining && "carry umbrella" //--> after && "carry umbrella output will be given if condition is true"
// console.log(result)

// eg 2
// const isRaining=false
// const result = isRaining && "carry umbrella" || "dont carry umbrella"//--> after && "dont carry umbrella output will be given because condition is false"
// console.log(result)



//nullish coelescing operator -> null ra undefined ko lagi one line ma code condition lekhna payo. null type check garna sakinxa

// let age =null
// let result = age ?? "No age"
// console.log(result)

// let age=undefined
// let result = age ?? "No age"
// console.log(result)