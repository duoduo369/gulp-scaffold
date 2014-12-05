var coffee = require('gulp-coffee');
var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
  .pipe(coffee({bare: true}).on('error', gutil.log))
  .pipe(gulp.dest('./public/'))
});

gulp.task('default', function() {
  gulp.run('coffee')
});
