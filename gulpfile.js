"use strict";

let gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    babel      = require('gulp-babel'),
    concat     = require('gulp-concat'),
    browserify = require('gulp-browserify');

gulp.task('sass', () => {
    return gulp.src(['src/sass/app.sass'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('js', () => {
    return gulp.src(['src/js/**/*.js'])
        .pipe(babel({
            presets: [ 'es2015' ],
            plugins: ['transform-es2015-modules-commonjs']
        }))
        .pipe(browserify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', () => {
    gulp.watch(['src/sass/**/*.sass'], ['sass']);
    gulp.watch(['src/js/app.js'], ['js']);
});

gulp.task('default', ['watch']);
