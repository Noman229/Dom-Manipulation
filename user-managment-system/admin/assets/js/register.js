const fullName = document.getElementById('fullName')
const emailAddress = document.getElementById('emailAddress')
const phoneNumber = document.getElementById('phoneNumber')
const password = document.getElementById('password')
const cPassword = document.getElementById('cPassword')
const registerBtn = document.getElementById('registerBtn')

const userLoggedIn = JSON.parse(localStorage.getItem('loggedInUser'))
if(userLoggedIn) window.location.href = 'dashboard.html'

let existingData = JSON.parse(localStorage.getItem('Storage Data')) || []


registerBtn.addEventListener('click', () => {

    // Check empty fields
    if (!fullName.value || !emailAddress.value || !phoneNumber.value || !password.value || !cPassword.value) {
        return alert('Please fill all fields')
    }
    // Check password length
    if (password.value.length < 8) {
        return alert('Password Should be atleast 8 characters')
    }
    // Check password & confirm password
    if (password.value != cPassword.value){
        return alert('Password Not Match!')
    }

    // Get input fields values
    let userDetails = {
        name: fullName.value,
        email: emailAddress.value,
        phone: phoneNumber.value,
        password: password.value,
        cpassword: cPassword.value
    }

    // Find username in loop
    let userNameFound = existingData.find((user) => {
        if(user.name === fullName.value) return user
    })
    // Check username exist
    if (userNameFound) return alert('Sorry! This username is alreday exist')

    // Find email in loop
    let userEmailFound = existingData.find((user) => {
        if(user.email === emailAddress.value) return user
    })
    // Check email exist
    if (userEmailFound) return alert('Sorry! This email is alreday exist')

    // Push data in local storage
    existingData.push(userDetails)
    localStorage.setItem('Storage Data', JSON.stringify(existingData))

    alert('Congratulations! You are successfully regitered')
    fullName.value = ''
    emailAddress.value = ''
    phoneNumber.value = ''
    password.value = ''
    cPassword.value = ''


    setTimeout(() => {
        window.location.href = 'login.html'
    } , 1000)
})