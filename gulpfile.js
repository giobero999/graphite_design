var gulp = require('gulp'),
    browserSync = require('browser-sync').create();


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('browser-sync', function() {
    browserSync.init(["app/"],{
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('default', ['browser-sync']);