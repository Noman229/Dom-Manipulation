const fullName = document.getElementById('fullName')
const emailAddress = document.getElementById('emailAddress')
const phoneNumber = document.getElementById('phoneNumber')
const editInfoBtn = document.getElementById('editInfoBtn')

const existingData = JSON.parse(localStorage.getItem('Storage Data'))
const userLoggedIn = JSON.parse(localStorage.getItem('loggedInUser'))
let currrentUserIndex;

if(!userLoggedIn) window.location.href = 'login.html'

for(let i = 0; i < existingData.length; i++) {
    if(existingData[i].email == userLoggedIn.email){
        currrentUserIndex = i
    }
}


let existInfo = {
    name: fullName.value = userLoggedIn.name,
    email: emailAddress.value = userLoggedIn.email,
    phone: phoneNumber.value = userLoggedIn.phone
}



// Event listener for the editInfoBtn
editInfoBtn.addEventListener('click', () => {
    updatedInfo = {
        name: existInfo.name = fullName.value,
        email: existInfo.email = emailAddress.value,
        phone: existInfo.phone = phoneNumber.value,
        password: userLoggedIn.password
    }
    
    existingData[currrentUserIndex] = updatedInfo

    // Update local storage
    localStorage.setItem('Storage Data', JSON.stringify(existingData))

    alert('Your info has been updated, Please again login now')
    setTimeout(() => {
        localStorage.removeItem('loggedInUser')
        window.location.href = 'login.html'
    } , 1000)

});
