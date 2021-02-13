const video = document.getElementsByClassName("video")[0];
const juice = document.getElementsByClassName("red-juice")[0];
const juiceBar = document.getElementsByClassName("red-bar")[0];
const btn = document.getElementsByClassName("fa-play")[0];
const tElapsed = document.getElementsByClassName("time-elapsed")[0];
const tRemaining = document.getElementsByClassName("time-remaining")[0];
const buffered = document.getElementsByClassName("white-juice")[0];
var isPlaying = false;

function togglePlayPause(){
    if(video.paused) {
        console.log("AUdio: "+video.audioTracks);
        btn.className = "fas fa-pause";
        var bufferPos = video.buffered;
        console.log(bufferPos);
        video.play();
        isPlaying = true;
    }else{
        btn.className = "fas fa-play";
        var bufferPos = video.buffered;
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

video.ondblclick = function() {
    video.requestFullscreen();
}

