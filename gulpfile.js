const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const cssmin = require('gulp-cssmin');
const clean = require('gulp-clean');

gulp.task('serve', function (done) {
    "use strict";

    browserSync.init({
        proxy: "http://localhost/masterstudy/",
        host: "192.168.0.124",
        port: 3000,
        notify: true,
        ui: {
            port: 3001
        },
        open: false
    });

    done();
});

gulp.task('watch', function (done) {

    watch('./metaboxes/assets/scss/**/*.scss').on('change', (e) => {
        gulp.src('./metaboxes/assets/scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(cssmin())
            .pipe(gulp.dest('./metaboxes/assets/css'))
            .pipe(browserSync.stream())
    });

    done();

});

gulp.task('default', gulp.series(gulp.parallel('watch', 'serve')));


/*BUILD TASKS*/
gulp.task('clean_wpcfto_styles', function (done) {

    console.log('Cleaning WPCFTO styles');

    return gulp.src('./metaboxes/assets/css', {allowEmpty: true})
        .pipe(clean());
});

gulp.task('build_wpcfto_styles', function (done) {

    console.log('Compiling WPCFTO styles');

    gulp.src('./metaboxes/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./metaboxes/assets/css'));

    done();

});

gulp.task('build', gulp.series('clean_wpcfto_styles', 'build_wpcfto_styles'));
