const fs = require("fs");
const youtubedl = require("youtube-dl");
const { getFilesToDownload } = require("./markdown-reader");

const videoInfo = video => {
  return new Promise((resolve, reject) => {
    video.on("info", info => {
      if (info) {
        return resolve(info);
      } else {
        return reject("Error");
      }
    });
  });
};
const videoDownloadComplete = (video, filename) => {
  return new Promise(resolve => {
    video.on("end", () => {
      return resolve(`100% ${filename}`);
    });
  });
};

const asyncDownload = async videoUrl => {
  try {
    const video = youtubedl(
      `http://www.youtube.com/${videoUrl}`,
      ["--format=18"],
      { cwd: __dirname }
    );
    const info = await videoInfo(video);
    video.pipe(fs.createWriteStream(`videos/${info._filename}.mp4`));
    return await videoDownloadComplete(video, info._filename);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const init = () => {
  getFilesToDownload("download.md")
    .then(arrOfVideos => {
      console.log("input video length", arrOfVideos.length);
      let i = 0;
      for (let video of arrOfVideos) {
        asyncDownload(video)
          .then(res => {
            if (res) {
              i = i + 1;
            }
            console.log("downloaded videos", i);
          })
          .catch(err => {
            console.log(err);
          });
      }
    })
    .catch(err => {
      console.log("error", err);
    });
};

init();
