var gulp = require('gulp');
var bs = require('browser-sync').create();
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlreplace = require('gulp-html-replace');
var rename = require('gulp-rename');

gulp.task('default', ['compile','browser-sync', 'watch']);

gulp.task('compile', ['js-minify', 'css-minify']);

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('./index.html').on('change',bs.reload);
  gulp.watch('js/script.js', ['js-minify']);
  gulp.watch('css/style.css', ['css-minify']);
})

gulp.task('js-minify', function() {
  gulp.src('js/script.js')
      .pipe(uglify())
      .pipe(rename('script.min.js'))
      .pipe(gulp.dest('./js'))
      .pipe(bs.stream());
});

gulp.task('css-minify', function() {
  gulp.src('css/style.css')
      .pipe(cleanCSS({ level : 2 }))
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./css'))
      .pipe(bs.stream());
});
