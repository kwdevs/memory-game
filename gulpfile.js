var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync'], function () {
	gulp.watch('app/*.html');
	gulp.watch('app/js/**/*.js');
	gulp.watch('app/css/**/*.css');
})