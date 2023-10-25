let accItem = document.querySelectorAll('.accordion-item')
let accbody = document.querySelectorAll('.accordion-item-body')

function showData(e) {
    for (var i = 0; i < accItem.length; i++){
        accbody[i].style.display = 'none'
        if (i === e){
            accbody[i].style.display = 'block'
        }
    }
}


