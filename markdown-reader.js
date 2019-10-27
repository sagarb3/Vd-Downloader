var fs = require("fs");
const { promisify } = require("util");
fs.readFile = promisify(fs.readFile);

const getFilesToDownload = async fileToRead => {
  try {
    const data = await fs.readFile(fileToRead, "utf-8");
    const linesArr = data.split(/\r?\n/);
    return linesArr
      .filter(e => {
        return e.startsWith(`- [ ]`);
      })
      .map(e => {
        return e.replace("- [ ]", "").trim();
      });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getFilesToDownload
};
