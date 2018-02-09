const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sourceMap = require('gulp-sourcemaps');
const groupCssMedia = require('gulp-group-css-media-queries');
const del = require('del');
const browserSync = require('browser-sync').create();
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const plumber = require('gulp-plumber');
const sassGlob = require('gulp-sass-glob');
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
const gulpCheerio = require('gulp-cheerio');
const gulpReplace = require('gulp-replace');
const svgMin = require('gulp-svgmin');

const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'build/assets/styles/'
    },    
    images: {
        src: 'src/images/**/*.*',
        dest: 'build/assets/images/'
    },
    fonts: {
        src: 'src/fonts/**/*.*',
        dest: 'build/assets/fonts/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'build/assets/scripts/'
    },
    svg: {
        src: 'src/icons/*.svg',
        dest: 'build/assets/svg/'
    }
};

// pug
function templates() {
    return gulp.src(paths.templates.pages)
    .pipe(plumber())
    .pipe(pug({pretty:true}))
    .pipe(gulp.dest(paths.root));
}
// scss
function styles()  {
    return gulp.src('./src/styles/main.scss')
        .pipe(plumber())
        .pipe(sourceMap.init())
        .pipe(sassGlob())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(groupCssMedia())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourceMap.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest));
}
//clean
function clean() {
    return del(paths.root);
}
// webpack
function scripts() {
    return gulp.src('src/scripts/app.js')
        .pipe(gulpWebpack(webpackConfig, webpack)) 
        .pipe(gulp.dest(paths.scripts.dest));
}
//watcher
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.fonts.src, fonts);
    gulp.watch(paths.scripts.src, scripts);
}
// browserSync
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}
// images
function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}
//fonts
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}
 //svg  
 const config = {
    mode: {
      symbol: {
        sprite: "../sprite.svg",
        example: {
          dest: '../tmp/spriteSvgDemo.html' // демо html
        }
      }
    }
  };              
function svg() {
        return gulp.src(paths.svg.src)
        // remove all fill, style and stroke declarations in out shapes
        .pipe(svgMin({
            js2svg: {
              pretty: true
            }
          }))
        .pipe(gulpCheerio({
			run: function($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
              },
              parserOptions: {
                xmlMode: true
              }
		}))
		//cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(gulpReplace('&gt;', '>'))
            //build svg sprite
        .pipe(svgSprite(config))
        .pipe(gulp.dest(paths.svg.dest));
}
              
exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.watch = watch;
exports.server = server;
exports.images = images;
exports.scripts = scripts;
exports.svg = svg;
exports.fonts = fonts;

gulp.task('default',gulp.series(
    clean,
    svg,
    gulp.parallel(styles, templates, images, scripts, fonts),
    gulp.parallel(watch,server)
));
