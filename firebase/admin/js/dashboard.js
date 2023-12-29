import { auth, signOut, onAuthStateChanged } from "./config.js";

const logoutBtn = document.querySelector('#logoutBtn')

window.addEventListener('load', function() {
  console.log("page is fully loaded")
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      document.body.classList.add("user-logged-in");
    } else {
      document.body.classList.remove("user-logged-in");
      window.location.href = 'admin/login.html'
    }
  });
})

logoutBtn.addEventListener('click', function() {
  signOut(auth).then(() => {
    setTimeout(() => {
      window.location.href = 'admin/login.html'
    } , 500)
  }).catch((error) => {
    alert(error)
  });
})