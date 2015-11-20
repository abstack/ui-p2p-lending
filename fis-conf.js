// default settings. fis3 release

// Global start
fis.match('src/ui-p2p-lending.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
})

fis.match('src/*.less', {
  packTo: 'dist/ui-p2p-lending.css'
})

// Global end

// default media is `dev`

// extends GLOBAL config
