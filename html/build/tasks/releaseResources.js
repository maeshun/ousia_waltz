/*******************

resourceのリリースビルド
・assets/resources
・assets/img
・headfoot

*******************/

// gulp
var gulp     = require('gulp');
var imgConfig   	 = require('../config').img;
var resourceConfig = require('../config').resource;
// var contentsConfig = require('../config').contents;

gulp.task('releaseResources', function() {
  gulp.src(resourceConfig.devFiles).pipe(gulp.dest(resourceConfig.releasePath));
  gulp.src(imgConfig.devImgFiles).pipe(gulp.dest(imgConfig.releasePath));
  // gulp.src(contentsConfig.devFiles).pipe(gulp.dest(contentsConfig.releasePath));
});

