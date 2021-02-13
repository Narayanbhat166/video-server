const video = document.getElementsByClassName("video")[0];
const videoContainer = document.getElementsByClassName("c-video")[0];
const juice = document.getElementsByClassName("red-juice")[0];
const juiceBar = document.getElementsByClassName("red-bar")[0];
const btn = document.getElementsByClassName("fa-play")[0];
const tElapsed = document.getElementsByClassName("time-elapsed")[0];
const tRemaining = document.getElementsByClassName("time-remaining")[0];
const buffered = document.getElementsByClassName("white-juice")[0];
const fullBtn = document.getElementsByClassName("fa-expand-alt")[0];
var isPlaying = false;
var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
if (!fullScreenEnabled) {
   fullscreen.style.display = 'none';
}

// below line is to remove default controls from showing up in some browsers
video.removeAttribute("controls");

function togglePlayPause(){
    if(video.paused) {
        console.log("Audio: "+video.audioTracks);
        btn.className = "fas fa-pause";
        let bufferPos = video.buffered;
        console.log(bufferPos);
        video.play();
        isPlaying = true;
    }else{
        btn.className = "fas fa-play";
        let bufferPos = video.buffered;
        console.log(bufferPos);
        video.pause();
        isPlaying = false;
    }
}

btn.onclick = function() {
    togglePlayPause();
    tRemaining.innerHTML = time_convert(video.duration);
};

function time_convert(num)
{ 
    var minutes = Math.floor(num/60); 
    var seconds = Math.floor(num % 60);
    var hours = Math.floor(minutes / 60);
    minutes = minutes % 60; 
    if(hours < 10) hours = '0'+hours;
    if(seconds < 10) seconds = '0'+seconds;
    if(minutes < 10) minutes = '0' + minutes;

  return hours + ":" + minutes + ":" + seconds         
}

video.addEventListener('timeupdate', () => {
    var juicePos = video.currentTime/video.duration;
    juice.style.width = juicePos * 100 + "%";
    tElapsed.innerHTML = time_convert(video.currentTime)

    var bufferPos = video.buffered.end(0) / video.duration;
    buffered.style.width = bufferPos * 100 + "%";

});

juiceBar.addEventListener("click", (e) => {
    console.log(e);
    console.log("X=" + e.offsetX/juiceBar.clientWidth);
    let seekCoordX = e.offsetX/juiceBar.clientWidth;
    let seekPosTime = seekCoordX * video.duration;
    console.log(seekPosTime);
    video.currentTime = seekPosTime;
});

video.onclick = function() {
    togglePlayPause();
    tRemaining.innerHTML = time_convert(video.duration);
};

window.addEventListener('keydown',(event) => {
  console.log(event.keyCode); 
  switch(event.keyCode){
      case 39: {
          if(video.currentTime <= video.duration - 10)
            video.currentTime += 10;
      }
      break;

      case 37: {
          if(video.currentTime >= 10){
              video.currentTime -= 10;
          }
      }
      break;
    case 38: {
        console.log(video.volume);
        if(video.volume < 1)
            video.volume += 0.2;
    }
    break;
    case 40: {
        console.log(video.volume);
        if(video.volume >= 0.3)
            video.volume -= 0.2;
    }
    break;
    case 32: {
        togglePlayPause();
    }
  } 
});

// The fullscreen functionality
videoContainer.addEventListener("dblclick", handleFullscreen);

fullBtn.addEventListener("click", handleFullscreen);

function handleFullscreen() {
  if (isFullScreen()) {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
    fullBtn.className = "fas fa-expand-alt";
 }
 else {
    if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
    else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
    else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
    else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
    fullBtn.className = "fas fa-compress-alt";
 }
}

function isFullScreen() {
  return !!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
}