var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , browserify = require('gulp-browserify')
  , nodemon = require('gulp-nodemon')

// Run server and watch everything
gulp.task('default', function() {
  nodemon({ script: './bin/www', ext: 'styl' })
    .on('change', ['css', 'scripts'])
    .on('restart', function() {
      console.log('restarted!')
    })
})

// Build all assets
gulp.task('build', ['css'], function() {
  gulp.watch('./assets/stylesheets/*.styl', function() {
    gulp.run('css')
  })
})

// CSS build task
gulp.task('css', function() {
  gulp.src('./assets/stylesheets/style.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./public/stylesheets'))
})

// JS build task
gulp.task('scripts', function() {
  gulp.src('./assets/javascripts/main.js')
    .pipe(browserify({}))
    .pipe(gulp.dest('./public/javascripts/'))
})
