const md = require('markdown-it')
const anchor = require('markdown-it-anchor')
const slugify = require('slugify')

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
    'txt',
  ])

  config.setLibrary('md', md({
    html: true,
    linkify: true,
    breaks: true,
  }).use(anchor, {
    slugify: s => slugify(s, {
      lower: true,
      remove: /\d/,
      strict: true,
    })
  }))

  return {
    dir: {
      input: 'src',
      output: 'public',
    }
  }
}
