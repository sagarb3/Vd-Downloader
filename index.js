const fs = require("fs");
const youtubedl = require("youtube-dl");
const videoUrlArr = ["watch?v=yNu4aLCUb08"];

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
const asyncDownload = async videoUrl => {
  try {
    const video = youtubedl(
      `http://www.youtube.com/${videoUrl}`,
      ["--format=18"],
      { cwd: __dirname }
    );
    const info = await videoInfo(video);
    video.pipe(fs.createWriteStream(`videos/${info._filename}.mp4`));
    return "";
  } catch (err) {
    throw err;
  }
};
const init = arrOfVideos => {
  const promiseArr = arrOfVideos.map(e => {
    return asyncDownload(arrOfVideos);
  });
  Promise.all(promiseArr)
    .then(res => {
      console.log("all done");
    })
    .catch(err => {
      console.log(err);
    });
};

init(videoUrlArr);
