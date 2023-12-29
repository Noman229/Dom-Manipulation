const oldPassword = document.getElementById('oldPassword')
const newPassword = document.getElementById('newPassword')
const cPassword = document.getElementById('cPassword')

const changePassword = document.getElementById('changePassword')

const existingData = JSON.parse(localStorage.getItem('Storage Data'))
const userLoggedIn = JSON.parse(localStorage.getItem('loggedInUser'))
let currrentUserIndex;

if(!userLoggedIn) window.location.href = 'login.html'

for(let i = 0; i < existingData.length; i++) {
    if(existingData[i].email == userLoggedIn.email){
        currrentUserIndex = i
    }
}


changePassword.addEventListener('click', () => {
    if(oldPassword.value !== userLoggedIn.password) {
        alert('Old Password Is Not Correct!')
        return false
    } else if(newPassword.value !== cPassword.value) {
        alert('The New Password Is Not Match With Confirm Password!')
        return false
    }else{
        updatedInfo = {
            name: userLoggedIn.name,
            email: userLoggedIn.email,
            phone: userLoggedIn.phone,
            password: newPassword.value,
        }
        existingData[currrentUserIndex] = updatedInfo
        console.log(updatedInfo)
    }
    // Update local storage
    localStorage.setItem('Storage Data', JSON.stringify(existingData))

    alert('Your info has been updated, Please again login now')
    setTimeout(() => {
        localStorage.removeItem('loggedInUser')
        window.location.href = 'login.html'
    } , 1000)

})