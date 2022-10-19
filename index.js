/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

butter 1 cup = 225g
flour 1 cup = 150g
sugar 1 cup = 200g
*/

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const lengthSec = document.getElementById("length-sec")
const volumeSec = document.getElementById("volume-sec")
const massSec = document.getElementById("mass-sec")

inputBtn.addEventListener("click", function() {
    length(inputEl.value)
    volume(inputEl.value)
    mass(inputEl.value)
})

function length(num) {
    let feet = (num * 3.281).toFixed(1)
    let meter = (num / 3.281).toFixed(1)
    lengthSec.innerHTML = 
        `<h2>長度 (公尺/英尺)</h2> 
        <p>${inputEl.value} 公尺 = ${feet} 英尺 | ${inputEl.value} 英尺 = ${meter} 公尺</p>`  
}

function volume(num) {
    let gallon = (num * 0.264).toFixed(1)
    let liter = (num / 0.264).toFixed(1)
    volumeSec.innerHTML = 
        `<h2>容量 (公升/加侖)</h2>
        <p>${inputEl.value} 公升 = ${gallon} 加侖 | ${inputEl.value} 加侖 = ${liter} 公升</p>`  
}

function mass(num) {
    let pound = (num * 2.204).toFixed(1)
    let kilogram = (num / 2.204).toFixed(1)
    massSec.innerHTML = 
        `<h2>重量 (公斤/磅)</h2>
        <p>${inputEl.value} 公斤 = ${pound} 磅 | ${inputEl.value} 磅 = ${kilogram} 公斤</p>`  
}