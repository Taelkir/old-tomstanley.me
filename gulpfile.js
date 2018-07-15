'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');


gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon', "sass"], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
    files: ["./public/stylesheets/style.css", "./views/*.pug", "./javascript/*.js"],
    browser: "chrome",
    port: 7000,
	});
  gulp.watch("./public/stylesheets/*.scss", ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('./public/stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(browserSync.stream());
});

gulp.task('nodemon', function (cb) {
	var started = false;
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true;
		}
	});
});
