module.exports = config => {
  config.addPassthroughCopy('src/CNAME')
  config.setTemplateFormats([
    'html',
    'md',
    'css',
    'js',
    'json',
    'png',
    'svg',
    'ttf',
  ])

  return {
    dir: {
      input: 'src',
      output: 'public',
    }
  }
}
