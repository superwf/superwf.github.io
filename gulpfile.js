var $ = require('gulp-load-plugins')()
var gulp = require('gulp')


function jade($src) {
  var $jade = $.jade({
    pretty: false,
  })
  $src.pipe($jade)
  .pipe(gulp.dest('./app/views'))
}

gulp.task('jade', function() {
  return jade(gulp.src('./app/views/*.jade', {base: 'app/jade'}))
})

gulp.task('dev', ['jade'], function() {
  gulp.watch('./app/views/*.jade').on('change', function(e) {
    jade(gulp.src(e.path, {base: 'app/jade'}))
  })
})

gulp.task('pngmin', function() {
  gulp.src('./public/images/*.png')
  .pipe($.pngmin())
  .pipe(gulp.dest('./app/images'))
})
