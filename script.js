//day 6 js 
console.log("Hello this is for DOM")
const h1=document.querySelector('.thisish1')
// h1.textContent="bye world"
// h1.innerHTML="<mark>bye world</mark>"

// console.log(h1)

const button=document.getElementsByTagName('button')[0]
button.textContent="Hello"
console.log(button)

button.addEventListener('click',()=>{ //this function makes followig changes in the html when the button is clicked
    h1.textContent="Bye world"
    var newParagraph=document.createElement('p')
    newParagraph.textContent="learning dom"
    document.body.appendChild(newParagraph) //appendChlid will insert new paragraph in the html
})
