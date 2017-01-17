// gulp
var gulp			= require('gulp');
var config 		= require('../config').html;
var include   = require('gulp-include');

// publish除外
var excludeFiles = '!'+config.partialFiles;

// htmlのpublish
gulp.task('publish_html', function() {
  gulp.src([
    config.templateFiles,
    excludeFiles
  ])
  .pipe(include())
    .on('error', console.log)
  .pipe(gulp.dest(config.htmlPath));

});
