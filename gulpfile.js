"use strict";

let gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    concat     = require('gulp-concat'),
    browserify = require('browserify'),
    babelify   = require('babelify'),
    source     = require('vinyl-source-stream'),
    webserver  = require('gulp-server-livereload');

gulp.task('sass', () => {
    return gulp.src(['src/sass/app.sass'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function () {
    return browserify({entries: 'src/js/app.js'})
        .transform(babelify, { presets: ['es2015'] })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('webserver', function() {
    gulp.src('')
        .pipe(webserver({
            open: true
        }));
});

gulp.task('watch', () => {
    gulp.watch(['src/sass/**/*.sass'], ['sass']);
    gulp.watch(['src/js/**/*.js'], ['js']);
});

gulp.task('default', ['webserver','watch']);
