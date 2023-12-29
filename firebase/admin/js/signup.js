import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "./config.js";


// Sign Up Fileds
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const signUpBtn = document.querySelector('#signUpBtn')

window.addEventListener('load', function() {
    console.log("page is fully loaded")
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          window.location.href = '../dashboard.html'
        } else {
            window.location.href = 'admin/login.html'
        }
    });
})


signUpBtn.addEventListener('click', function() {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        alert('Your are registed!')
        setTimeout(() => {
            window.location.href = 'login.html'
        } , 1000)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
        // ..
    });
})

