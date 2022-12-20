const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', () => {
  gulp.src('css/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
  gulp.watch('css/style.css', gulp.series('css'));
});
