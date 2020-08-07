const glob = require('glob')
const es = require('event-stream')

const config = require('./../config')
// const utils = require('./utils')

module.exports = function (gulp) {
  return function () {
    return glob(`${config.directories.featureDirectory}**/code/Images/Components/`, (err, files) => {
      const tasks = files.map((imagesDirectoryPath) => {
        return gulp.src(`${imagesDirectoryPath}**/*`)
          .pipe(gulp.dest(`${config.directories.themeBuildDirectory}${config.currentWebsite}`))
      })

      return es.merge.apply(null, tasks)
    })
  }
}
