import { auth, signInWithEmailAndPassword, onAuthStateChanged } from "./config.js";


// Login Fileds
const loginEmail = document.querySelector('#loginEmail')
const loginPassword = document.querySelector('#loginPassword')
const signInBtn = document.querySelector('#signInBtn')


window.addEventListener('load', function() {
    console.log("page is fully loaded")
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          window.location.href = '../dashboard.html'
        }
    });
})

signInBtn.addEventListener('click', function() {
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
        const user = userCredential.user;
        alert('Working')
        setTimeout(() => {
            window.location.href = '../dashboard.html'
        } , 500)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
    });
})