/*******************

cssの開発ビルド
・compass
・autoPrefixer

*******************/

// gulp
var gulp      = require('gulp');
var config    = require('../config').css;

// css関連
var compass 		= require('gulp-compass');
var autoPrefixer  = require('autoprefixer');
var postcss     = require('gulp-postcss');
var plumber 		= require('gulp-plumber');	

gulp.task('sass', ['compass'], function() {
  console.log("===add vender prefix===");
  return gulp.src(config.pubCssFiles)
    .pipe(postcss([autoPrefixer({ browsers: config.targetBrowser })]))
    .pipe(gulp.dest(config.pubCssPath));
});

gulp.task('compass', function() {
	return gulp.src(config.scssPath)
		.pipe(plumber())
		.pipe(compass({
			config_file: config.compassConfig,
			css: config.pubCssPath,
			sass: config.scssPath
		}))
});


gulp.task('info', function(){
  var info = autoPrefixer({ browsers: config.targetBrowser }).info();
  console.log(info);
})
