/*******************

htmlのリリースビルド
・改行コードをCR/LFに変換

*******************/

// gulp
var gulp			  = require('gulp');
var config 		  = require('../config').base;
var htmlConfig  = require('../config').html;
var include     = require('gulp-include');

var convertEncoding = require('gulp-convert-encoding');
var replace = require('gulp-replace');

// publish除外
var excludeFiles = '!'+htmlConfig.partialFiles;

gulp.task('releaseHtml', function() {
  gulp.src([
    htmlConfig.templateFiles,
    excludeFiles
  ])
  .pipe(include())
    .on('error', console.log)
  .pipe(replace(/\n|\r/g,'\r\n'))
  // .pipe(replace(/\<meta charset\=\"utf-8\"\>/,'<meta charset="shift_jis">'))
  // .pipe(convertEncoding({to:'Shift_JIS'}))
  .pipe(gulp.dest(config.releaseDir))
});

