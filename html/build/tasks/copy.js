/*******************

リソースのコピータスク

*******************/

// gulp
var gulp        = require('gulp');
var imgConfig   = require('../config').img;
var jsConfig    = require('../config').js;
var cssConfig   = require('../config').css;
var resourceConfig = require('../config').resource;
// var contentsConfig = require('../config').contents;

// 開発用コピータスク
gulp.task('copy_assets_to_publish', function() {
  console.log("=======copy_assets_to_publish======");
  gulp.src(imgConfig.devImgFiles).pipe(gulp.dest(imgConfig.pubImgPath));
  gulp.src(jsConfig.devJsFiles).pipe(gulp.dest(jsConfig.pubJsPath));
  gulp.src(cssConfig.devCssFiles).pipe(gulp.dest(cssConfig.pubCssPath));
  gulp.src(resourceConfig.devFiles).pipe(gulp.dest(resourceConfig.pubPath));
  // gulp.src(contentsConfig.devFiles).pipe(gulp.dest(contentsConfig.pubPath));
});

// cssのコピータスク
// cssの本番化時に利用
gulp.task('copy_css_dev_to_pub', function(){
   return gulp.src(cssConfig.devCssFiles).pipe(gulp.dest(cssConfig.pubCssPath));
})