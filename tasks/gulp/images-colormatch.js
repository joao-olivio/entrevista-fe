const glob = require('glob')
const es = require('event-stream')

const config = require('./../config')

module.exports = function (gulp) {
  return function () {
    return glob(`${config.directories.featureDirectory}ColorMatch/code/colormatchassets/images/**`, (err, files) => {
      const tasks = files.map((stylesDirectoryPath) => gulp.src(`${stylesDirectoryPath}**/*`)
          .pipe(gulp.dest(`${config.directories.websiteDirectory}/colormatchassets`)))

      return es.merge.apply(null, tasks)
    })
  }
}
