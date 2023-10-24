const btnDiv = document.querySelector('#menuBtnsBox')
const menuDiv = document.querySelector('#menu-box')

const menuBtns = ['All', 'Break Fast', 'Lunch', 'Dinner', 'Shakes']
let menuItems = [
    { img: './images/anda-partha.jpg', title: 'Anda Paratha', slug: 'anda-paratha', price: '150', category: 'Break Fast', description: 'It is a long established fact that a reader will be distracted.' },
    { img: './images/chicken-biryani.jpg', title: 'Chicken Biryani', slug: 'chicken-biryani', price: '450', category: 'Lunch', description: 'It is a long established fact that a reader will be distracted. ' },
    { img: './images/chicken-mandi.jpg', title: 'Chicken Mandi', slug: 'chicken-mandi', price: '1350', category: 'Dinner', description: 'It is a long established fact that a reader will be distracted. ' },
    { img: './images/shakes.jpg', title: 'Shakes', slug: 'shakes', price: '250', category: 'Shakes', description: 'It is a long established fact that a reader will be distracted. ' },
    { img: './images/chai-paratha.jpg', title: 'Chai Paratha', slug: 'chai-paratha', price: '100', category: 'Break Fast', description: 'It is a long established fact that a reader will be distracted.' },
    { img: './images/beef-biryani.jpg', title: 'Beef Biryani', slug: 'beef-biryani', price: '650', category: 'Lunch', description: 'It is a long established fact that a reader will be distracted. ' },
    { img: './images/zinger-burger.jpg', title: 'Zinger Burger', slug: 'zinger-burger', price: '500', category: 'Dinner', description: 'It is a long established fact that a reader will be distracted. ' },
    { img: './images/halwa-pori.jpg', title: 'Halwa Pori', slug: 'halwa-pori', price: '250', category: 'Break Fast', description: 'It is a long established fact that a reader will be distracted.' },
    { img: './images/chicken-karhai.jpg', title: 'Chicken Karhai', slug: 'chicken-karhai', price: '950', category: 'Lunch', description: 'It is a long established fact that a reader will be distracted. ' },
]





// ForEach for Btns 
menuBtns.forEach((btn) => {
    btnDiv.innerHTML += `<button class="${btn}" onclick="allData('${btn}')">${btn}</button>`
}) 


function allData(e) {
    menuItems.filter((item) => {
        menuDiv.innerHTML = ''
        if (item.category.includes(e)) {
            return true
        }else if (e == 'All'){
            return true
        }
    }).forEach(result => {
        menuDiv.innerHTML +=  
        `<div class="menu-item ${result.slug}">
            <div class="menu-img"><img src="${result.img}" alt=""></div>
            <div class="menu-content">
                <h2>${result.title}</h2>
                <h3>Rs: ${result.price}</h3>
                <h4>${result.category}</h4>
                <p>${result.description}</p>
            </div>
        </div>`
    })
}
allData("All")
































// function allData(e) {
//     menuItems.filter(item=>item.category === e).forEach(result => {
//         menuDiv.innerHTML =  
//         `<div class="menu-item ${result.slug}">
//             <div class="menu-img"><img src="${result.img}" alt=""></div>
//             <div class="menu-content">
//                 <h2>${result.title}</h2>
//                 <h3>Rs: ${result.price}</h3>
//                 <h4>${result.category}</h4>
//                 <p>${result.description}</p>
//             </div>
//         </div>`
//     })
// }










        