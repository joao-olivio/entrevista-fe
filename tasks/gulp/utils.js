const fs = require('fs')

module.exports = {

  getFilesFromDirectory: function getFiles(dir, files_) {
    files_ = files_ || []
    const files = fs.readdirSync(dir)
    for (const i in files) {
      const name = `${dir}/${files[i]}`
      if (fs.statSync(name).isDirectory()) {
        getFiles(name, files_)
      } else {
        files_.push(name)
      }
    }
    return files_
  },

  getThemeName: path => path.split('/')[2],
}
