const glob = require('glob')
const es = require('event-stream')

const config = require('./../config')

module.exports = function (gulp) {
  return function () {
    return glob(`${config.directories.featureDirectory}**/code/Styles/Components/`, (err, files) => {
      const tasks = files.map((stylesDirectoryPath) => {
        return gulp.src(`${stylesDirectoryPath}**/*`)
          .pipe(gulp.dest(`${config.directories.themeBuildDirectory}${config.currentWebsite}`))
      })

      return es.merge.apply(null, tasks)
    })
  }
}
