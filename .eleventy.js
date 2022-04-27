module.exports = config => {
  config.addPassthroughCopy('font')
  config.addPassthroughCopy('assets')
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
