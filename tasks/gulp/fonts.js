const glob = require('glob')
const es = require('event-stream')

const config = require('./../config')
const utils = require('./utils')

module.exports = function (gulp) {
  return function () {
    /**
     * Find all font directories
     */
    return glob(`${config.directories.projectDirectory}**/code/**/Fonts`, (err, files) => {
      /**
       * Map all font directories to tasks
       */
      const tasks = files.map((fontsDirectoryPath) => {
        /**
         * Get the current project name
         */
        const themeName = utils.getThemeName(fontsDirectoryPath)

        /**
         * Copy the fonts from the /src directory to the project folder
         */
        return gulp.src(`${fontsDirectoryPath}**/**`) // added extra * so also folders are copied.
          .pipe(gulp.dest(config.directories.themeBuildDirectory + themeName))
      })

      // create a merged stream
      return es.merge.apply(null, tasks)
    })
  }
}
