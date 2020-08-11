const fs = require('fs')
const express = require('express')
const cors = require('cors')
const parrot = require('parrot-middleware')

const config = require('./../config')
const { getMock } = require('../mocks')

const scenarios = require('../scenarios')

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
  imgDir: `${buildMode ? config.fractalExternalBuildPrefix : '/'}Images`,
  site: config.currentWebsite,
})

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, '../../fractal/docs'))

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, `../../${config.directories.buildDirectory}/Website/themes/`))


/*
 * Publish path
 */
fractal.web.set('builder.dest', path.join(__dirname, `../../${config.directories.buildDirectory}/Fractal`))

fractal.web.set('server.syncOptions', {
  middleware: [
    {
      route: '/api',
      handle: (request, response, next) => {
        const mocksPath = '../../fractal/components/mocks/'
        const fileName = request.url.indexOf('?') !== -1 ?
          `${request.url.substring(1, request.url.indexOf('?'))}.json` :  // '/search?query=123' => 'search'
          `${request.url.substring(1)}.json`
        const filePath = path.join(__dirname, `${mocksPath}${fileName}`)

        fs.exists(filePath, (exists) => {
          if (exists) {
            setTimeout(() => {
              console.log(`Giving out the "${fileName}" mock!`)
              response.writeHead(200, { 'Content-Type': 'application/json' })
              fs.createReadStream(filePath).pipe(response)
            }, 1500)
          } else {
            response.writeHead(404, { 'Content-Type': 'text/plain' })
            response.end('ERROR File does not exist')
          }
        })
      }
    }
  ]
})

/**
 * Customize handlebars
 */
const hbs = require('@frctl/handlebars')({
  helpers: {
    json: val => JSON.stringify(val),
    mock: val => getMock(val)
  }
})

fractal.components.engine(hbs)

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

        return new Promise((resolve, reject) => {
          const app = express()
          app.use(cors())
          app.use(parrot(scenarios))

          app.listen(9999, error => {
            if (error) {
              reject(error)
            } else {
              logger.success(`parrot-server up and listening on port ${9999}`) // eslint-disable-line no-console
              resolve()
            }
          })
        })
      })
    }

    const builder = fractal.web.builder()

    builder.on('error', err => logger.error(err.message))

    return builder.build().then(() => {
      logger.success(`Fractal static HTML build for project ${config.currentWebsite} complete!`)
    })
  }
}
