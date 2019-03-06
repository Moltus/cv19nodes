const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
  // 1. where is my scss file
  return gulp.src('./src/styles/**/*.scss')
  // 2. pass that file through sass compiler
    .pipe(sass().on('error', sass.logError))
  // 3. where do I save the compiled CSS ?
    .pipe(gulp.dest('./dist/styles'))
  // 4. stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch('./src/styles/**/*.scss', style);
  gulp.watch('./dist/**/*.html').on('change', browserSync.reload);
  gulp.watch('./dist/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;