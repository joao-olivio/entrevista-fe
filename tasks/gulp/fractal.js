const fs = require('fs')
const config = require('./../config')

/*
* Are we in build mode?
*/
const buildMode = process.argv.indexOf('--build') > -1

/*
* Require the path module
*/
const path = require('path')

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create()

/*
 * Give your project a title.
 */
fractal.set('project.title', config.currentWebsite)
/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, '../../fractal/components'))
fractal.components.set('default.preview', '@preview')
fractal.components.set('default.context', {
  imgDir: `${buildMode ? config.fractalExternalBuildPrefix : '/'}images`,
  site: config.currentWebsite,
})

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, '../../fractal/docs'))

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, `../../${config.directories.buildDirectory}/Website/themes/${config.currentWebsite}`))

/**
 * Customize handlebars
 */
const hbs = require('@frctl/handlebars')({
    helpers: {
      switch: (value, options) => {
          this._switch_value_ = value;
          const html = options.fn(this); // Process the body of the switch block
          delete this._switch_value_;
          return html;
        },
        case: (value, options) => {
            if (value == this._switch_value_) {
                return options.fn(this);
            }
        },
        json: (val) => JSON.stringify(val)
    }
});
fractal.components.engine(hbs);

/*
 * Publish path
 */
fractal.web.set('builder.dest', path.join(__dirname, `../../${config.directories.buildDirectory}/fractal`))

// Create mock APIs
fractal.web.set('server.syncOptions', {
  middleware: [
    {
      route: '/api',
      handle: (request, response) => {
        // Directory of all mock API files
        const mocksPath = '../../fractal/components/mocks/'

        // Filename is just the url of the API + .json
        const requestUrlPath = request.url.split('/')
        const fileName = `${(requestUrlPath[requestUrlPath.length - 1])}.json`
        const filePath = path.join(__dirname, `${mocksPath}${fileName}`)

        // Emulate API Response
        fs.exists(filePath, (exists) => {
          if (exists) {
            // Emulate success response
            setTimeout(() => {
              console.log(`Giving out the ${fileName} mock! @${filePath}`)
              response.writeHead(200, { 'Content-Type': 'application/json' })
              fs.createReadStream(filePath).pipe(response)
            }, 1500)
          } else {
            // Emulate error response
            response.writeHead(404, { 'Content-Type': 'text/plain' })
            response.end(`ERROR File does not exist @${filePath}`)
          }
        })
      }
    }
  ]
})

const logger = fractal.cli.console

module.exports = function (gulp) {
  return function () {
    if (!buildMode) {
      const server = fractal.web.server({
        sync: true,
      })

      server.on('error', err => logger.error(err.message))

      return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url} for project ${config.currentWebsite}`)
      })
    }

    const builder = fractal.web.builder()

    builder.on('error', err => logger.error(err.message))

    return builder.build().then(() => {
      logger.success(`Fractal static HTML build for project ${config.currentWebsite} complete!`)
    })
  }
}
