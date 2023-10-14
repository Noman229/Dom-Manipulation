let allColorsCodes = ['#555843', '#072541', '#363062', '#0F0F0F', '#5D12D2']
let textChange = document.querySelector('span')

var box = document.getElementById('box')
var btn = document.getElementById('btn')


function clrHandler(){
    let bgClr = Math.floor(Math.random() * allColorsCodes.length)
    document.body.style.backgroundColor = allColorsCodes[bgClr]
    textChange.textContent = allColorsCodes[bgClr]

    document.body.style.color = "white"
    btn.style.backgroundColor = "white"
    btn.style.color = "black"
    box.style.borderColor =  "white"
}