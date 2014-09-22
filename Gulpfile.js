var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , nodemon = require('gulp-nodemon')

// Run server and watch everything
gulp.task('default', function() {
  nodemon({ script: './bin/www', ext: 'styl' })
    .on('change', ['compressCSS'])
    .on('restart', function() {
      console.log('restarted!')
    })
})

// Build all assets
gulp.task('gogogo', ['compressCSS'], function() {
  gulp.watch('./assets/stylesheets/*.styl', function() {
    gulp.run('compressCSS')
  })
})

// CSS build task
gulp.task('compressCSS', function() {
  gulp.src('./assets/stylesheets/style.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./public/stylesheets'))
})


