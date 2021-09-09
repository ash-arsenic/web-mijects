const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('#change-btn');
const background = document.querySelector('#background');
const back = document.querySelector('#back');
const hex = document.querySelector('#hex');
const simple = document.querySelector('#simple');

let hexa = false;

hex.addEventListener('click', function() {
    hexa = true;
})

simple.addEventListener('click', function() {
    hexa = false;
})

btn.addEventListener('click', function() {

    if(hexa) {
        const hexValue = getHexValue();
        back.style.backgroundColor = hexValue;
        background.textContent = hexValue;
    }
    else {
        const randomNumber = Math.floor(Math.random()*colors.length);
        back.style.backgroundColor = colors[randomNumber];
        background.textContent = colors[randomNumber];
    }
})

function getHexValue() {
    let hexValue = "#";
    for(let i=0; i<6; i++) {
        const rand = Math.floor(Math.random()*hexValues.length);
        hexValue += hexValues[rand];
    }
    return hexValue;
}