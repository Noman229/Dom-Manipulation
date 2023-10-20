let slideIndex = 0
let slideItem = [
    { img: 'noman.png', name: 'Noman', designation : 'Hiring Manager', description : '"He is an excellent developer. Done the job as requested. Highly Recommended!!!"' },
    { img: 'nadeem.png', name: 'Nadeem Khan', designation: 'Service Provider', description: 'Nadeem is passionate about his work. He knows very well how to finish work on time. I was thrilled with working with him. I also want to work with him in our future task' },
    { img: 'sufyan.png', name: 'Sufiyan Khan', designation: 'Business Man', description: 'My working experience with sufyan excellent, He is efficient in WordPress. Project delivered on time. I highly recommend to work with sufyan and wants more work in future' },
    { img: 'hassan.png', name: 'Hassan Khan', designation: 'Nanna Munna Bacha', description: 'I enjoyed working with him. His communication was top-notch, he met all deadlines'}
]

let slideImg = document.querySelector('#slideImg')
let slideName = document.querySelector('#name')
let slideDesignation = document.querySelector('#designation')
let slideDec = document.querySelector('#description')

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextvBtn')




slideImg.src = slideItem[slideIndex].img
slideName.textContent = slideItem[slideIndex].name
slideDesignation.textContent = slideItem[slideIndex].designation
slideDec.textContent = slideItem[slideIndex].description


function nextHandler() {
    if (slideIndex < slideItem.length - 1) {
        slideIndex++
        slideImg.src = slideItem[slideIndex].img
        slideName.textContent = slideItem[slideIndex].name
        slideDesignation.textContent = slideItem[slideIndex].designation
        slideDec.textContent = slideItem[slideIndex].description
    }
}

function prevHandler() {
    if (slideIndex > 0) {
        slideIndex--
        slideImg.src = slideItem[slideIndex].img
        slideName.textContent = slideItem[slideIndex].name
        slideDesignation.textContent = slideItem[slideIndex].designation
        slideDec.textContent = slideItem[slideIndex].description
    }
}