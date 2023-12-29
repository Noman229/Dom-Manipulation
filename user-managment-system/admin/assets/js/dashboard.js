let UserName = document.getElementById('UserName')
let logout = document.getElementById('logout')
let editInfo = document.getElementById('editInfo')

const userLoggedIn = JSON.parse(localStorage.getItem('loggedInUser'))
if(!userLoggedIn) window.location.href = 'login.html'

// Get Data From Local Storage
let existingData = JSON.parse(localStorage.getItem('Storage Data'))

UserName.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).name


editInfo.addEventListener('click', () => {
    window.location.href = 'edit-register.html'
})

logout.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser')
    window.location.href = 'login.html'
})