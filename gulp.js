var gulp = require('gulp'),
    scss = require("gulp-scss"),
    browserSync= require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer');
    //livereload = require('gulp-livereload') ;
    // sourcemaps = require('gulp-sourcemaps');

    gulp.task("scss", function () {
        gulp.src(
            "./scss/**/*.scss"
        ).pipe(scss(
            {"bundleExec": true}
        )).pipe(gulp.dest("./css"));
    });
// }(require));

//     gulp.task('css', function() {
//         gulp.src('./css/main.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist'))
//         .pipe(browserSync.stream({match: '**/*.css'}));
//     });
// gulp.task('default', function() {
//     // gulp.src('scss/**/*.scss')
//     // .pipe(sourcemaps.init())
//     // .pipe(autoprefixer())
//     // .pipe(concat('all.scss'))
//     // .pipe(sourcemaps.write('.'))
//     // .pipe(gulp.dest('dist'))

    
// });

// gulp.task('watch', function(){

// });