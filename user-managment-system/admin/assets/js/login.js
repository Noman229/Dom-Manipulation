const emailAddress = document.getElementById('emailAddress')
const password = document.getElementById('password')
const loginBtn = document.getElementById('loginBtn')

// Get The Logged In User
// let userLoggedIn = JSON.parse(localStorage.getItem('loggedInUser'))
// console.log(userLoggedIn)

// Get Data From Local Storage
let existingData = JSON.parse(localStorage.getItem('Storage Data'))


loginBtn.addEventListener('click', () => {
    
    // Check empty fields
    if (!emailAddress.value || !password.value) {
        return alert('Please fill all fields')
    }
    
    // Get input fields values
    let userDetails = {
        email: emailAddress.value,
        password: password.value,
    }


    // Find email in loop
    let userEmailFound = existingData.find((user) => {
        if(user.email === userDetails.email) return user
    })
    


    // If invalid email
    if (!userEmailFound) return alert('Sorry! An account has not been created on this email')
    
    // Match email & password from local storage
    if ( emailAddress.value === userEmailFound.email && password.value === userEmailFound.password )  {
        alert('Congratulations! You are successfully Logged in')

        localStorage.setItem('loggedInUser', JSON.stringify(userEmailFound))

        setTimeout(() => {
            window.location.href = 'dashboard.html'
        } , 1000)
    }else{
        return alert('Invalid Credentials')
    }

        

    
    
    

    


})