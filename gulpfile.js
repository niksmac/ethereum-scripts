var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var script = ['./src/*.js'];

gulp.task('default', function() {
  return gulp.src(script)
    .pipe(concat('geth.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/'));
});

