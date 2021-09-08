const show = document.querySelector("#show")
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const increase = document.querySelector("#increase")

let count = 0

decrease.addEventListener('click', (e)=>{
    count--
    show.innerText = count.toString()
})
reset.addEventListener('click', (e)=>{
    count = 0
    show.innerText = count.toString()
})
increase.addEventListener('click', (e)=>{
    count++
    show.innerText = count.toString()
})