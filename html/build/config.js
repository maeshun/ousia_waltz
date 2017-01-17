var DEVELOP_DIR = "../dev/";      // 開発用
var PUBLISH_DIR = "../publish/";  // 動作確認用
var RELEASE_DIR = "../release/";  // 動作確認用

// for auto prefixer
var TARGET_BROWSER = [
  'last 2 version',
  'ie >= 11',
  'Android >= 4.2',
  "ios_saf >= 8"
]

var ASSETS_DIR  = "assets/"
var DEVELOP_ASSETS_DIR = DEVELOP_DIR + ASSETS_DIR;
var PUBLISH_ASSETS_DIR = PUBLISH_DIR + ASSETS_DIR;
var RELEASE_ASSETS_DIR = RELEASE_DIR + ASSETS_DIR;

var baseConfig = {
  developDir: DEVELOP_DIR,
  publishDir: PUBLISH_DIR,
  releaseDir: RELEASE_DIR,
}

module.exports = {
  base: baseConfig,
  html: {
    templateFiles: DEVELOP_DIR+'**/*.html',
    partialFiles:  DEVELOP_DIR+'**/_*.html',
    // excludeFiles:  '!'+DEVELOP_DIR+'**/_*.html',
    htmlPath:      PUBLISH_DIR
  },
  css: {
    compassConfig: './config.rb',
    scssFiles:  DEVELOP_ASSETS_DIR+'scss/*.scss',
    scssPath:   DEVELOP_ASSETS_DIR+'scss/',
    devCssPath:    DEVELOP_ASSETS_DIR+'css/',
    devCssFiles:   DEVELOP_ASSETS_DIR+'css/**/*.css',
    pubCssPath:    PUBLISH_ASSETS_DIR+'css/',
    pubCssFiles:   PUBLISH_ASSETS_DIR+'css/**/*.css' ,
    releaseDir:   RELEASE_ASSETS_DIR+'css/',
    targetBrowser: TARGET_BROWSER,
  },
  js: {
    devJsFiles:  DEVELOP_ASSETS_DIR+'js/**/*.js',
    pubJsPath:   PUBLISH_ASSETS_DIR+'js/',
    releaseJsPath: RELEASE_ASSETS_DIR+'js/'
  },
  img: {
    devImgFiles:  DEVELOP_ASSETS_DIR+'img/**/*',
    pubImgPath:   PUBLISH_ASSETS_DIR+'img/',
    releasePath:   RELEASE_ASSETS_DIR+'img/',
  },
  resource: {
    devFiles:  DEVELOP_ASSETS_DIR+'resources/**/*',
    pubPath:   PUBLISH_ASSETS_DIR+'resources/',
    releasePath:   RELEASE_ASSETS_DIR+'resources/',
  }
}
