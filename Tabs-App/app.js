const tab = document.querySelector('#tabs')
const tabBtns = document.querySelector('#tabBtns')
const tabImg = document.querySelector('#tabImg')
const tabcontent = document.querySelector('#tabcontent')

const btns = ['History', 'Vision', 'Goals']
const data = [
    {img: 'btn-1.jpg', title: 'Our History', slug: 'History', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, '},
    {img: 'btn-2.jpg', title: 'Our Vision', slug: 'Vision', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
    {img: 'btn-3.jpg', title: 'Our Goals', slug: 'Goals', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,'},
]

btns.forEach((singleBtn) => {
    tabBtns.innerHTML += `<button id="${singleBtn}" onclick="tabs('${singleBtn}')">${singleBtn}</button>`
})


function tabs(e) {
    data.filter((item) => {
        if(item.slug.includes(e)) {
            return true
        }else if (e == 'Goals') {
            return true
        }
    }).forEach(result => {
        tabImg.innerHTML = `<div class="tab-img"><img src="${result.img}" alt="${result.title}-img"></div>`
        tabcontent.innerHTML = `<div class="title">${result.title}</div><div class="description">${result.description}</div>`
    })
}

tabs('History')