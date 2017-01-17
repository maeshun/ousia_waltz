/*******************

jsのリリースビルド
・console.log()の除去
・minify

*******************/

// gulp
var gulp     = require('gulp');
var config 	 = require('../config').base;
var jsConfig = require('../config').js;

var uglify   = require('gulp-uglify');
var replace  = require('gulp-replace');
var stripDebug = require('gulp-strip-debug');
var pump     = require('pump');

gulp.task('releaseJs', function(cb) {
  pump([
    gulp.src(jsConfig.devJsFiles),
    stripDebug(),
    uglify(),
    gulp.dest(jsConfig.releaseJsPath)
  ],
  cb
  );
});

