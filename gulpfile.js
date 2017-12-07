const gulp = require('gulp'),
      pug = require('gulp-pug'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      sourceMap = require('gulp-sourcemaps'),
      del = require('del'),
      browserSync = require('browser-sync').create();


const paths = {
    root: './build',
    templates:{
        pages: 'src/templates/pages/*.pug',
        src:'src/templates/**/*.pug',
    },
    styles:{
            src:'src/styles/**/*.scss',
            dest: 'build/assets/styles/'
    },
    images:{
        src: 'src/images/**/*.*',
        dest: 'build/assets/images'
    }

}

//pug
function templates(){
    return gulp.src(paths.templates.pages)
    .pipe(pug({pretty:true}))
    .pipe(gulp.dest(paths.root));
}

//scss

function styles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourceMap.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourceMap.write())
        .pipe(gulp.dest(paths.styles.dest))
}

function clean(){
    return del(paths.root);
}


//watcher
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
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
        .pipe(gulp.dest(paths.images.dest));
        //добавить сжатиье картинок 
}

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.watch = watch;
exports.server = server;
exports.images = images;



gulp.task('default',gulp.series(
    clean,
    gulp.parallel(styles, templates, images),
    gulp.parallel(watch,server)
));