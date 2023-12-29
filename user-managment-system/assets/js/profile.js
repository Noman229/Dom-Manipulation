const profileImage = document.querySelector('.profile-image')
const profileName = document.querySelector('.profile-name')
const profileNewPostField = document.querySelector('#profileNewPostField')
const profileNewPostImage = document.querySelector('#profileNewPostImage')
const profileNewPostBtn = document.querySelector('#profileNewPostBtn')
let postImage;
let postCard = document.querySelector('#postCard')

let existingPostData = JSON.parse(localStorage.getItem('Posts')) || []
const userLoggedIn = JSON.parse(localStorage.getItem('loggedInUser'))



if(!userLoggedIn) window.location.href = 'login.html'

function imageHandler() {
    postImage = prompt('Add Image Url')
}

profileNewPostBtn.addEventListener('click', () => {    
    let singlePost = {
        id: Date.now(),
        name: userLoggedIn.name,
        postdesc: profileNewPostField.value,
        postimage: postImage
    }

    // Push data in local storage
    existingPostData.push(singlePost)
    localStorage.setItem('Posts', JSON.stringify(existingPostData))
})

profileName.textContent = userLoggedIn.name

existingPostData.filter(loggedInUserPosts => {
    if(userLoggedIn.name === loggedInUserPosts.name){
        postCard.innerHTML += `
        <div class="card">
            <div class="card-body">
                <div class="timeline-header">
                    <img src="assets/images/default-profile-image.png" class="profile-image" alt="Profile Image">
                        <p class="card-text text-end"><small class="text-muted">${loggedInUserPosts.name}</small></p>
                </div>
                <hr>
                <p class="card-text">${loggedInUserPosts.postdesc}</p>
            </div>
            <img src="${loggedInUserPosts.postimage}" class="card-img-bottom" alt="...">
            <div class="post-engage">
                <div class="like">
                    <p><span><i class="fas fa-thumbs-up"></i></span> Like</p>
                </div>
                <div class="comment">
                    <p><span><i class="fas fa-comment"></i></span> Comment</p>
                </div>
                <div class="share">
                    <p><span><i class="fas fa-share"></i></span> Share</p>
                </div>
            </div>
            <div class="timeline-bottom">
                <img src="assets/images/default-profile-image.png" class="profile-image" alt="Profile Image">
                <input type="text" name="write-comment" placeholder="Write your comment">
            </div>
        </div>
    `
    }
})





logout.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser')
    window.location.href = 'admin/login.html'
})

