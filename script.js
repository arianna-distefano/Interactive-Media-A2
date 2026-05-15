const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
    if (video.paused || video.ended) {
        video.play();
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    } else {
        video.pause();
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    }
}
function updateProgressBar() {
    const value = (video.currentTime / video.duration) * 100;
    progressBar.style.width = value + "%";
}
// Comment Section

function addComment() {
    const input = document.getElementById("comment-input");
    const list = document.getElementById("comment-list");

    if (input.value.trim() === "") return;

    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.textContent = input.value;

    list.appendChild(comment);

    input.value = "";
}

function toggleFullscreen() {
    const video = document.getElementById("custom-video-player");

    if (!document.fullscreenElement) {
        video.requestFullscreen().catch(err => {
            console.log(`Error attempting fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}