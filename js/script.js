const wrapper = document.querySelector(".wrapper"),
  musicImg = wrapper.querySelector(".img-area img"),
  musicName = wrapper.querySelector(".song-details .name"),
  musicArtist = wrapper.querySelector(".song-details .artist"),
  mainAudio = wrapper.querySelector("#main-audio"),
  playPauseBtn = wrapper.querySelector(".play-pause"),
  prevBtn = wrapper.querySelector("#prev"),
  nextBtn = wrapper.querySelector("#next"),
  progressArea = wrapper.querySelector(".progress-area"),
  progressBar = wrapper.querySelector(".progress-bar");

let musicIndex = 1;

window.addEventListener("load", () => {
  loadMusic(musicIndex);
});

// music function
function loadMusic(indexNumb) {
  musicName.innerText = allMusic[indexNumb - 1].name;
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  mainAudio.src = `audio/${allMusic[indexNumb - 1].src}.mp3`;
}

// play music
function playMusic() {
  wrapper.classList.add("paused");
  playPauseBtn.querySelector("i").innerText = "pause";
  mainAudio.play();
}

// pause music
function pauseMusic() {
  wrapper.classList.remove("paused");
  playPauseBtn.querySelector("i").innerText = "play_arrow";
  mainAudio.pause();
}

// next music
function nextMusic() {
  // here we'll just increment of index by 1
  musicIndex++;
  // if musicIndex is greater than array length than musixIndex will be 1 so the first song will plat
  musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
}

// prev music
function prevMusic() {
  // here we'll just decrement of index by 1
  musicIndex--;
  // if musicIndex is greater than 1 than musixIndex will be array length so the last song will plat
  musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
}

playPauseBtn.addEventListener("click", () => {
  const isMusicPaused = wrapper.classList.contains("paused");

  // if isMusicPaused is true then call pauseMusic else call playMusic
  isMusicPaused ? pauseMusic() : playMusic();
});

// next music btn
nextBtn.addEventListener("click", () => {
  nextMusic(); // next music
});
// prev music btn
prevBtn.addEventListener("click", () => {
  prevMusic(); //
});

// update progress bar music
mainAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime; // gettting current time of song
  const duration = e.target.duration; // getting total duration of song

  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  let musicCurrentTime = wrapper.querySelector(".current");
  musicDuration = wrapper.querySelector(".duration");

  mainAudio.addEventListener("loadeddata", () => {
    // update song duration
    let audioDuration = mainAudio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    musicDuration.innerText = `${totalMin}:${totalSec}`;
  });
  // update song current time
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// update playing song current time on according to the progress bar width
progressArea.addEventListener("click", (e) => {
  let progressWidthval = progressArea.clientWidth; // getting width on the progress
  let clickedOffSetX = e.offsetX; // getting offset x value
  let songDuration = mainAudio.duration; // getting song total duration

  mainAudio.currentTime = (clickedOffSetX / progressWidthval) * songDuration;
  playMusic();
});

// on repeat, shuffle song according to the icon
const repeatBtn = wrapper.querySelector("#repeat-list");
repeatBtn.addEventListener("click", () => {
  // first we get the innerText of the icon then we'll change according
  let getText = repeatBtn.innerText; // getting inner text of icon

  switch (getText) {
    case "repeat":
      repeatBtn.innerText = "repeat_one";
      repeatBtn.setAttribute("title", "Song looped");
      break;
    case "repeat_one":
      repeatBtn.innerText = "shuffle";
      repeatBtn.setAttribute("title", "Playback shuffle");
      break;
    case "shuffle":
      repeatBtn.innerText = "repeat";
      repeatBtn.setAttribute("title", "Playlist looped");
      break;
  }
});

// above we just changed the icon, now lets work on what to do
// after the song ended

mainAudio.addEventListener("ended", () => {
  // we'll do according to the icon means if user has set icon to loop song then we'll repeat
  // the current song and will do futher accordingly

  let getText = repeatBtn.innerText;
  switch (getText) {
    case "repeat": // if this icon is repeat then simply we call the nextMusic function so that next song
      nextMusic();
      break;
    case "repeat_one":
      mainAudio.currentTime = 0;
      loadMusic(indexNumb);
      break;
    case "shuffle":
      let randIndex = Math.floor(math.random() * allMusic.length + 1);
      do {
        randIndex = Math.floor(math.random() * allMusic.length + 1);
      } while ((musicIndex = randIndex));
      musicIndex = randIndex;
      loadMusic(musicIndex);
      playMusic();
      break;
  }
});
