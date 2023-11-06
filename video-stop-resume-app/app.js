const stop = document.querySelector('#stop')
const resume = document.querySelector('#resume')
const video = document.querySelector('#video')



function stopHandler() {
    video.pause()
}

function resumeHandler() {
    video.play()
}

function hoverHandler() {
    video.pause()
    video.setAttribute('onmouseout', 'outHandler()')
}

function outHandler() {
    video.play()
}