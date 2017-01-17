// gulp
var gulp         = require('gulp');
var cssConfig    = require('./config').css;
var imgConfig    = require('./config').img;
var jsConfig     = require('./config').js;
var htmlConfig   = require('./config').html;
var requireDir   = require('require-dir');
var htmlConfig   = require('./config').html;
// var contentsConfig = require('./config').contents;
requireDir('./tasks', {recurse: true});



// default task
gulp.task('default', ['server','publish_html','compass','copy_assets_to_publish'], function() {

  // htmlのパブリッシュ
  gulp.watch(htmlConfig.templateFiles, ['publish_html', 'reload']);
  // コンパス
  gulp.watch(cssConfig.scssFiles, ['sass','reload']);
  // assets監視
	gulp.watch([jsConfig.devJsFiles, imgConfig.devImgFiles], ['copy_assets_to_publish','reload']);
});



// リリースビルド
gulp.task('release', ['releaseResources','releaseCss','releaseJs','releaseHtml'], function() {
});
