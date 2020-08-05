module.exports = {

  directories: {
    src: 'src/',
    projectDirectory: 'src/yourprojectname/',
    buildDirectory: 'build',
    themeBuildDirectory: './build/Website/themes/',
  },

  currentWebsite: 'yourprojectname',
  fractalExternalBuildPrefix: '/yourprojectname/',
  autoPrefixerBrowsers: ['last 2 versions', 'ie >= 10', 'Safari >= 9', 'iOS >= 8'],
  bundle: {
    cssBundleName: 'bundle.css',
    jsBundleName: 'bundle.js',
    jsMapName: 'bundle.map.js',
  }
}
