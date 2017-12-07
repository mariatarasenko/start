const gulp = require('gulp'),
      pug = require('gulp-pug'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      sourceMap = require('gulp-sourcemaps'),
      del = require('del'),
      gulpWebpack = require('gulp-webpack'),
      webpack= require('webpack'),
      webpackConfig = require('./webpack.config.js'),
      browserSync = require('browser-sync').create(),
      plumber = require('gulp-plumber'),
      rename = require('gulp-rename'),
      sassGlob = require('gulp-sass-glob'),
      groupCssMedia = require('gulp-group-css-media-queries'),
      imagemin = require('gulp-imagemin'),
      svgSprite = require('gulp-svg-sprite')
      injectGulp = require('gulp-inject')
      ;


const paths = {
    root: './build',
    templates:{
        pages: 'src/templates/pages/*.pug',
        src:'src/templates/**/*.pug',
    },
    styles:{
            src:'src/styles/**/**/*.scss',
            dest: 'build/assets/styles/'
    },
    images:{
        src: 'src/images/**/*.*',
        dest: 'build/assets/images'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'build/assets/js/'
    },
    svg: {
        src: 'src/svg/**/*.svg',
        dest: 'build/assets/images/svg/'
    }

}

//pug
function templates() {
    return gulp.src(paths.templates.pages)
    

    .pipe(plumber())
    .pipe(pug({pretty:true}))
    .pipe(gulp.dest(paths.root));
}

// function inject(){
//     return gulp.src('./src/templates/template.pug')
//     var sources = gulp.src(['./build/assets/js/*.js', './build/assets/styles/*.min.css'])
//     .pipe(injectGulp(sources))
//     .pipe(gulp.dest(paths.root));
// }

//scss

function styles() {
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
        .pipe(gulp.dest(paths.styles.dest))
}

//clean
function clean(){
    return del(paths.root);
}


// webpack
function scripts() {
    return gulp.src('src/js/app.js')
        .pipe(plumber())
        .pipe(gulpWebpack(webpackConfig, webpack)) 
        .pipe(gulp.dest(paths.scripts.dest));
}


//watcher
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
}

//browserSync
function server(){
        browserSync.init({
            server: paths.root
        });
        browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

//remove images
function images(){
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
        //добавить сжатиье картинок 
}
const configur					= {
    shape				: {
        dimension		: {		
            maxWidth	: 32,
            maxHeight	: 32
        },
        spacing			: {			
            padding		: 10
        }
    }
};

function svg(){
    return gulp.src(paths.svg.src)
        .pipe(svgSprite(configur))
}

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.watch = watch;
exports.server = server;
exports.images = images;
exports.scripts = scripts;
exports.svg = svg;
//exports.inject = inject;




gulp.task('default',gulp.series(
    clean,
    gulp.parallel(styles, templates, images, scripts),
   
    gulp.parallel(watch,server)
));