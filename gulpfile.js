

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');


//compile sass
gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});


gulp.task('reload', function() {
  browserSync.reload();
})


gulp.task('serve', ['sass'], function() {
  browserSync({
    server: './src'
  });
  gulp.watch('src/*.html', ['reload'] );
  gulp.watch('src/sass/**/*.scss', ['sass'])
});



gulp.task('default', ['serve']);