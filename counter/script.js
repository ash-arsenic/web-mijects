const show = document.querySelector("#show")
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const increase = document.querySelector("#increase")

let count = 0

decrease.addEventListener('click', (e)=>{
    count--
    show.innerText = count.toString()
    if(count < 0) {
        show.style.color = 'red'
    }else if (count == 0) {
        show.style.color = 'black'
    }

})
reset.addEventListener('click', (e)=>{
    count = 0
    show.innerText = count.toString()
    show.style.color = 'black'
})
increase.addEventListener('click', (e)=>{
    count++
    show.innerText = count.toString()
    if(count > 0) {
        show.style.color = 'green'
    }else if (count == 0) {
        show.style.color = 'black'
    }
})