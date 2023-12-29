let profileNewPostField = document.querySelector('#profileNewPostField')
let profileNewPostImage = document.querySelector('#profileNewPostImage')
let profileNewPostBtn = document.querySelector('#profileNewPostBtn')
let postCard = document.querySelector('#postCard')
let newPostData;
let postImage;
let currrentUserIndex;


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


existingPostData.reverse().forEach(post => {
    postCard.innerHTML += `
        <div class="card">
            <div class="card-body">
                <div class="timeline-header">
                    <div class="d-flex align-items-center">
                        <img src="assets/images/default-profile-image.png" class="profile-image me-2" alt="Profile Image">
                        <p class="card-text text-end"><small class="text-muted">${post.name}</small></p>
                    </div>
                    <div class="post-action">
                        <ul class="list-unstyled mb-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
                                <ul class="dropdown-menu">
                                    <li><a id="editPost" class="dropdown-item" onclick="editPost()" href="#">Edit</a></li>
                                    <li><a id="deletePost" class="dropdown-item" onclick="deletePost(${post.id})" href="#">Delete</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <hr>
                <p class="card-text">${post.postdesc}</p>
            </div>
            <img src="${post.postimage}" class="card-img-bottom" alt="...">
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
})


function deletePost(postID) {
    JSON.parse(localStorage.getItem('Posts'))
    let newArrary = existingPostData.filter(posts => (posts.id != postID))
    localStorage.setItem('Posts', JSON.stringify(newArrary))
}


function editPost(postID) {
    let existingPostData = JSON.parse(localStorage.getItem('Posts'))

    let postResult = existingPostData.find((post) => post.id === postID)
    let postIndexResult = existingPostData.findIndex((post) => post.id === postID)

    oldPost = postResult
    oldPostIndex = postIndexResult

    profileNewPostField.value =  oldPost.postdesc
    profileNewPostImage = oldPost.postImage 
    profileNewPostBtn.textContent = 'Update'

    profileNewPostBtn.setAttribute('onclick', 'updatePost()')
}

function updatePost() {
    console.log(oldPostIndex)
    let updatePostData = {
        image: oldPost.postimage = postImage,
        desc: oldPost.postdesc = profileNewPostField.value
    }

    // let x = existingPostData.splice(oldPostIndex, 1, updatePostData)




    console.log(x)

    // existingPostData.splice(oldPostIndex, 1, newUpdatePostData)
    // localStorage.setItem('posts', JSON.stringify(existingPostData))

}


logout.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser')
    window.location.href = 'admin/login.html'
})

