// gulp
var gulp			= require('gulp');
var config 		= require('../config').base;
var browser   = require('browser-sync');

// ローカルサーバ起動
gulp.task('server', function() {
	browser({
		server: {
			baseDir: config.publishDir,
			index	: 'index.html'
		}
	});
});

// ブラウザのリロード
gulp.task('reload', function(){
	browser.reload();
});
