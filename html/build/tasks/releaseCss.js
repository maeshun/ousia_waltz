/*******************

cssのリリースビルド
・buildしてコピーのみ

*******************/

// gulp
var gulp      = require('gulp');
var config 		  = require('../config').base;
var cssConfig    = require('../config').css;

gulp.task('releaseCss', ['copy_css_dev_to_pub','sass'], function() {
  gulp.src(cssConfig.pubCssFiles).pipe(gulp.dest(cssConfig.releaseDir));
});

