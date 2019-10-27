# Download Youtube Videos

## Nodejs Used For Project

1. nodejs version 10.16.0

2. support nodejs version 8.X.X and above.

3. [youtube-dl](https://ytdl-org.github.io/youtube-dl/index.html) library used to dowload the videos

## Simple Project to download videos from youtube easily

**Please create a folder called videos at the root level (same level as the file index.js)**

1. Current Usage Limited to download of only limited number of videos

2. To Download the videos you simply need to paste the watch part of the youtube video

3. Increase the number of videos you want to download by increasing this array

```js
const videoUrlArr = ["watch?v=yNu4aLCUb08"];
```

## Feature Till Now

- [x] Multiple Video Download
- [x] Same Name as the Real Video Name
- [x] Videos Stored in folder called videos

## Missing Features

- [ ] Videos Folder is not auto created
- [ ] No Gui
- [ ] No Json File to add the video url , need to change index.js file

## Future Goals

- [ ] Enabling Options Via Json File For File Format
- [ ] Conversion of Video to mp3 format
- [ ] Optional Storage
- [ ] Playlist download
- [ ] Extracting Info and storing the info in the database
- [ ] Making it an electron based app managed by mongodb
