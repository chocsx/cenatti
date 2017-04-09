'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();
var prefix = require('autoprefixer-stylus');

gulp.task('css', function() {
	return gulp.src('./styl/*.styl')
		.pipe(stylus({
			use: prefix()
		}))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        host: "localhost",
        open: false,
        notify: false
    });

    gulp.watch("./styl/**/*.styl", ['css']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['css', 'serve']);