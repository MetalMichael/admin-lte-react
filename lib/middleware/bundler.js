const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../../webpack.config')

module.exports = function (options) {
  let compiler = Webpack(webpackConfig)

  compiler.plugin('compile', () => {
    if (!options.quiet) console.log('Bundling...')
  })

  compiler.plugin('done', (stats) => {
    if (!options.quiet) console.log('Bundled in ' + (stats.endTime - stats.startTime) + 'ms')
  })

  let bundler = new WebpackDevServer(compiler,
    { publicPath: options.publicPath,
      hot: true,
      quiet: options.quiet,
      noInfo: true,
      stats: {
        colors: true
      },
      headers: {
          "Access-Control-Allow-Origin": "*",
      },
    })

  bundler.listen(options.targetPort, options.targetHost, () => {
    if (!options.quiet) console.log('Bundling project, please wait...')
  })
}
