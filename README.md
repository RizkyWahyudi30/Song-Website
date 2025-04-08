<p align="center">
  <img src="images/forHeader-github.jpeg" alt="Logo" width="100%">
</p>

# Song Website for Someone <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30">

Hi everyone, this is a small project of mine, I made a `song website for someone`, there are not too many features on the website.

The Tech Stack that I use here is 3, namely: </br>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Website Features

The following are the features displayed on the `Song Website`:

- 🎯 Songs can be played, paused, resumed, replayed, and can select the song you want to play
- 🎯 Displays song lyrics

### Short code from index.html and lyrics.js files:
<details close="close">
<summary><i><b>File index.html</b></i></summary>

***
```html
/**
  * ©RizkyWahyudi
  **/
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music Website | Anonymous</title>
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </head>
  <body>
    <div class="header finisher-header"></div>
    <div class="wrapper">
      <div class="top-bar">
        <i class="material-icons">expand_more</i>
        <span>Now Playing</span>
        <i class="material-icons">more_horiz</i>
      </div>
      <div class="img-area">
        <img src="" alt="" />
      </div>
      <div class="song-details">
        <p class="name"></p>
        <p class="artist"></p>
      </div>
      <div class="progress-area">
        <div class="progress-bar">
          <span></span>
        </div>
        <div class="timer">
          <span class="current">0:20</span>
          <span class="duration">3:40</span>
        </div>
        <audio id="main-audio" src=""></audio>
      </div>
      <div class="controls">
        <i id="repeat-list" class="material-icons" title="Playlist looped"
          >repeat</i
        >
        <i id="prev" class="material-icons">skip_previous</i>
        <div class="play-pause">
          <i class="material-icons">play_arrow</i>
        </div>
        <i id="next" class="material-icons">skip_next</i>
        <i id="more-music" class="material-icons">queue_music</i>
      </div>
      <!-- Lyrics Section -->
      <div class="lyrics-toggle">
        <i id="lyrics-btn" class="material-icons">lyrics</i>
        <span>Show Lyrics</span>
      </div>
      <div class="lyrics-area">
        <div class="lyrics-content"></div>
      </div>
      <!-- End Lyrics Section -->
      <div class="music-list">
        <div class="header">
          <div class="row">
            <i class="material-icons">queue_music</i>
            <span>Music list</span>
          </div>
          <i id="close" class="material-icons">close</i>
        </div>
        <ul></ul>
      </div>
    </div>

    <script src="js/music-list.js"></script>
    <script src="js/script.js"></script>
    <script src="js/lirik.js"></script>

    <script src="js/finisher-header.es5.min.js" type="text/javascript"></script>
    <script type="text/javascript">
      new FinisherHeader({
        count: 23,
        size: {
          min: 1030,
          max: 1500,
          pulse: 0,
        },
        speed: {
          x: {
            min: 0.6,
            max: 3,
          },
          y: {
            min: 0.6,
            max: 3,
          },
        },
        colors: {
          background: "#953eff",
          particles: ["#ff681c", "#87ddfe", "#231efe", "#ff0a53"],
        },
        blending: "lighten",
        opacity: {
          center: 0.6,
          edge: 0,
        },
        skew: 0,
        shapes: ["c"],
      });
    </script>
  </body>
</html>

```
***
</details></details>
<details close="close"><summary><i><b>File lirik.js</b></i></summary>

***
```js
/**
  * ©RizkyWahyudi
  **/
l// Contoh objek dengan lirik lagu
const lyricsData = [
  {
    src: "beliCiki-Koiiri", // pastikan cocok dengan src di music-list.js
    lyrics: `
    Beli Ciki
    Beli koyo
    
    Sukiyo
    Ima anata ni omoi nosete hora
    Sunao ni naru no watashi
    Kono saki motto
    Sobani ite moikana
    Koi to koi ga kasanate
    
    Sukiyo..`,
  },
  {
    src: "reff-aduRayu",
    lyrics: `
    Maukah lagi kau mengulang ragu
    Dan sendu yang lama
    Dia yang dulu pernah bersamamu
    Memahat kecewa
    Atau kau inginkan yang baru
    Sungguh menyayangimu
    
    Aku ingin dirimu
    Yang menjadi milikku
    Bersamaku mulai hari ini
    Hilang ruang untuk cinta yang lain`,
  },
  // Tambahkan lirik untuk lagu lainnya
];

```
***
</details></details>
<details close="close">
<summary><i><b>File style.css</b></i></summary>

  ***
```css
/**
  * ©RizkyWahyudi
  **/
l@import url("https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,500&family=Outfit:wght@100..900&family=Parkinsans:wght@300..800&family=Poppins:wght@200;300;400;500;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital@0;1&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

*::before,
*::after {
  padding: 0;
  margin: 0;
}

:root {
  --pink: #ff74a4;
  --violet: #9f6ea3;
  --lightblack: #515c6f;
  --white: #ffffff;
  --darkwhite: #cecaca;
  --pinkshadow: #ffcbdd;
  --lightshadow: linear-gradient(10);
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 480px) {
  body {
    padding: 0 15px;
  }

  .wrapper {
    width: 90%;
    padding: 15px;
    margin: 0 auto;
    border-radius: 10px;
  }

  /* Metode alternatif untuk persegi */
  .img-area {
    width: 100%;
    height: 0;
    padding-top: 100%; /* Membuat tinggi sama dengan lebar (persegi) */
    position: relative;
  }

  .img-area img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* Container untuk seluruh konten */
.container {
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.header.finisher-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}

.wrapper {
  width: 380px;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  padding: 25px 30px;
  background: var(--white);
  box-shadow: 0px 6px 15px var(--lightshadow);
}

.wrapper i {
  cursor: pointer;
}

.top-bar,
.progress-area .timer,
.controls,
.music-list .header,
.music-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-bar i {
  font-size: 30px;
  color: var(--lightblack);
}

.top-bar span {
  font-size: 18px;
  color: var(--lightblack);
}

.img-area {
  height: 256px;
  width: 100%;
  margin-top: 25px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 6px 12px var(--lightshadow);
}

.img-area img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.song-details {
  text-align: center;
  margin: 30px 0;
  color: var(--lightblack);
}

.song-details .name {
  font-size: 21px;
}

.song-details .artist {
  opacity: 0.9;
  font-size: 18px;
}

.progress-area {
  height: 6px;
  width: 100%;
  background: #f0f0f0;
  border-radius: 50px;
  cursor: pointer;
}

.progress-area .progress-bar {
  height: inherit;
  width: 0%;
  position: relative;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--pink) 0%, var(--violet) 100%);
}

.progress-bar::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  background: linear-gradient(90deg, var(--pink) 0%, var(--violet) 100%);
  border-radius: inherit;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
  border: inherit;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.progress-area:hover .progress-bar::before {
  opacity: 1;
}

.progress-area .timer {
  margin-top: 2px;
}

.timer span {
  font-size: 13px;
  color: var(--lightblack);
}

.controls {
  margin: 40px 0 5px 0;
}

.controls i {
  font-size: 28px;
  user-select: none;
  background: linear-gradient(var(--pink) 0%, var(--violet) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.controls i:nth-child(2),
.controls i:nth-child(4) {
  font-size: 43px;
}

.controls #prev {
  margin-right: -13px;
}

.controls #next {
  margin-left: -13px;
}

.controls .play-pause {
  height: 54px;
  width: 54px;
  background: linear-gradient(var(--white) 0%, var(--darkwhite) 100%);
  box-shadow: 0px 0px 5px var(--pink);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-pause::before {
  content: "";
  position: absolute;
  height: 43px;
  width: 43px;
  border-radius: inherit;
  background: linear-gradient(var(--pink) 0%, var(--violet) 100%);
}
.play-pause i {
  height: 43px;
  width: 43px;
  line-height: 43px;
  text-align: center;
  border-radius: inherit;
  background-clip: text;
  background: inherit;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Lyrics Section Style */
.lyrics-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0 5px 0;
  cursor: pointer;
  color: var(--lightblack);
}

.lyrics-toggle i {
  margin-right: 5px;
  background: linear-gradient(var(--pink) 0%, var(--violet) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.lyrics-area {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  margin-top: 10px;
}

.lyrics-area.show {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
}

.lyrics-content {
  color: var(--lightblack);
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  white-space: pre-line;
}

/* Scrollbar styling for lyrics */
.lyrics-area::-webkit-scrollbar {
  width: 4px;
}

.lyrics-area::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.lyrics-area::-webkit-scrollbar-thumb {
  background: linear-gradient(var(--pink) 0%, var(--violet) 100%);
  border-radius: 10px;
}

.music-list {
  position: absolute;
  left: 0;
  bottom: -55%;
  opacity: 0;
  pointer-events: none;
  width: 100%;
  padding: 15px 30px;
  border-radius: 15px;
  background: var(--white);
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.14s ease-out;
}

.music-list.show {
  bottom: 0;
  opacity: 1;
  pointer-events: auto;
}
.music-list .header .row {
  display: flex;
  align-items: center;
  font-size: 19px;
  color: var(--lightblack);
}

.header .row i {
  cursor: default;
}

.header .row span {
  margin-left: 5px;
}

.header #close {
  font-size: 22px;
  color: var(--lightblack);
}

.music-list ul {
  margin: 10px 0;
  max-height: 260px;
  overflow-y: auto;
}

.music-list ul::-webkit-scrollbar {
  width: 0px;
}

.music-list ul li {
  cursor: pointer;
  list-style: none;
  padding-bottom: 10px;
  margin-bottom: 5px;
  color: var(--lightblack);
  border-bottom: 1px solid #e5e5e5;
}

.music-list ul li:last-child {
  border-bottom: 0px;
}

.music-list ul li .row span {
  font-size: 17px;
}

ul li .row p {
  opacity: 0.9;
}

ul li .audio-duration {
  font-size: 16px;
}

ul .playing {
  color: var(--violet);
  pointer-events: none;
}

/* Media Queries */
@media (max-width: 768px) {
  .wrapper {
    width: 90%;
    padding: 20px;
    margin: 0 auto;
  }

  .img-area {
    height: 200px;
  }

  .song-details .name {
    font-size: 18px;
  }

  .song-details .artist {
    font-size: 16px;
  }

  .controls i {
    font-size: 24px;
  }

  .controls .play-pause {
    height: 50px;
    width: 50px;
  }

  .play-pause i {
    height: 40px;
    width: 40px;
    line-height: 40px;
  }
}

@media (max-width: 480px) {
  .wrapper {
    width: 90%;
    padding: 15px;
    margin: 0 auto;
    border-radius: 10px;
  }

  .img-area {
    height: 180px;
  }

  .song-details .name {
    font-size: 16px;
  }

  .song-details .artist {
    font-size: 14px;
  }

  .controls i {
    font-size: 22px;
  }

  .controls .play-pause {
    height: 45px;
    width: 45px;
  }

  .play-pause i {
    height: 36px;
    width: 36px;
    line-height: 36px;
  }
}

```
***
</details></details>
<details close="close">
<summary><i><b>Send List Message With Image</b></i></summary>

***
```js
/**
  * ©DitzDev
  * The imageUrl part must be a string of url
  **/
let sections = [{
  title: 'title',
  rows: [{
  header: 'header',
  title: 'title',
  description: 'description',
  id: 'id' 
}] 
}]

conn.sendListImg(jid, 'text', 'footer', 'titleButton', sections, imageUrl, quoted)
```
***
</details></details>
<details close="close">
<summary><i><b>Send Button Card</b></i></summary>

***
```js
/**
  * ©DitzDev
  * The imageUrl part must be a string of url
  * [cards] Must follow the example below
  * type = ['buttons', 'url']
  **/
  let cards = [
    {
      header: 'header',
      body: 'body',
      footer: 'footer',
      imageUrl: 'string',
      buttons: [
        {
          type: 'url',
          text: "text of buttons url",
          url: "https://example.com"
        },
        {
          type: 'buttons',
          text: "text of buttons",
          id: "quick_reply_id_1"
        }
      ]
    }
  ];

  await conn.sendButtonCard(jid, 'text', 'footer', cards, quoted);
```
***
</details></details>

## Hosting Wsbite

I host my website with `vercel` </br>

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

> [!NOTE]
>
> I made this website because he is my friend, not my partner, I also made this as practice for myself
