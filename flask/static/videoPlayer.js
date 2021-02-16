const video = document.getElementsByClassName("video")[0];
const videoContainer = document.getElementsByClassName("c-video")[0];
const juice = document.getElementsByClassName("red-juice")[0];
const juiceBar = document.getElementsByClassName("red-bar")[0];
const btn = document.getElementsByClassName("fa-play")[0];
const tElapsed = document.getElementsByClassName("time-elapsed")[0];
const tRemaining = document.getElementsByClassName("time-remaining")[0];
const buffered = document.getElementsByClassName("white-juice")[0];
const fullBtn = document.getElementsByClassName("fa-expand-alt")[0];
const volBtn = document.getElementsByClassName("fa-volume-up")[0];
const volJuice = document.getElementsByClassName("volume-juice")[0];
/*const theControlBar = document.getElementsByClassName("controls")[0];*/
var isPlaying = false;
var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
if (!fullScreenEnabled) {
   fullscreen.style.display = 'none';
}

// below line is to remove default controls from showing up in some browsers
/*video.removeAttribute("controls");*/

// test script to check if a certain video codec is supported
function supportType(vidType,codType) { 
  var x = document.createElement("VIDEO");
  isSupp = x.canPlayType(vidType+';codecs="'+codType+'"');
  if (isSupp == "") {
    isSupp = "No";
  }
  return(isSupp);
  //e.target.parentNode.innerHTML = "Answer: " + isSupp;
} 

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
  //console.log(event.keyCode); 
  switch(event.keyCode){
    case 39: {
      if(video.currentTime <= video.duration - 10)
        video.currentTime += 10;
    }
    break;

    case 37: {
      if(video.currentTime >= 10)
        video.currentTime -= 10;
    }
    break;

    case 38: {
        if(video.volume < 1) {
          changeVolume(0.2);
        }
    }
    break;
    case 40: {
        if(video.volume >= 0.3) {
          changeVolume(-0.2);
        }else {
          changeVolume(-video.volume);
        }
    }
    break;
    case 32: {
        togglePlayPause();
    }
  } 
});

// The fullscreen functionality
video.addEventListener("dblclick", handleFullscreen);

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

volBtn.onclick = function() {
  const volSlider = document.getElementsByClassName("volume-slider")[0];
  const volSliderVis = window.getComputedStyle(volSlider).getPropertyValue("visibility");
  console.log(volSliderVis);
  if(volSliderVis == "hidden") {
    volSlider.style.visibility = "visible";
  }else {
    volSlider.style.visibility = "hidden";
  }
};

volJuice.setAttribute("value", video.volume);

function changeVolume(val) {  //will decrease volume when negative value is passed
  video.volume += val;  
  volJuice.stepUp(val/volJuice.getAttribute("step"));
  console.log("volume changed to " + video.volume);
}

volJuice.onchange = function(e) {
  video.volume = e.target.value;
  console.log("volume changed to " + video.volume + " by using slider.");
};

video.onvolumechange = function() {
  //console.log("Audio muted =" +video.muted);  // video muted property does not change at all !
  if(video.volume == 0) {
    volBtn.className = "fas fa-volume-mute";
    console.log("audio muted");
  }else if(video.volume < 0.5) {
    volBtn.className = "fas fa-volume-down";
  }else {
    volBtn.className = "fas fa-volume-up";
  }
}