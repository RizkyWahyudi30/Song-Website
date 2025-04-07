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

### Tutorial on How to Use the Send Button Function
<details close="close">
<summary><i><b>Send Button Message</b></i></summary>

***
```js
/**
  * ©DitzDev
  **/
let buttons = [{ text: '', id: '' }]

conn.sendButtonMsg(jid, 'text', 'footer', buttons, quoted)
// Or
conn.sendButtonMsg(jid, 'text', 'footer', [{ text: '', id: '' }], quoted)
```
***
</details></details>
<details close="close"><summary><i><b>Send Button Message With Image</b></i></summary>

***
```js
/**
  * ©DitzDev
  * The imageUrl part must be a string of url
  **/
let buttons = [{ text: '', id: '' }]
conn.sendButtonImg(jid, 'text', 'footer', buttons, imageUrl, quoted)
// or
conn.sendButtonImg(jid, 'text', 'footer', [{ text: '', id: '' }], imageUrl, quoted)
```
***
</details></details>
<details close="close">
<summary><i><b>Send List Message</b></i></summary>

  ***
```js
/**
  * ©DitzDev
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

conn.sendListMsg(jid, 'text', 'footer', 'titleButton', sections, quoted)
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
