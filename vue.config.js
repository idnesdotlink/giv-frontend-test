module.exports = {
  publicPath:
    process.env.DOCS === 'true'
      ? 'https://idnesdotlink.github.io/giv-frontend-test'
      : '/',
  outputDir: process.env.DOCS === 'true' ? 'docs' : 'docs',
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .oneOf('pug-inline-template')
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end()
      .end()

    config.module
      .rule('md')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}
