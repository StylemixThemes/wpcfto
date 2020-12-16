const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');
const cssmin = require('gulp-cssmin');
const clean = require('gulp-clean');

gulp.task('watch', function (done) {

    watch('./wp-custom-fields-theme-options/metaboxes/assets/scss/**/*.scss').on('change', (e) => {
        gulp.src('./wp-custom-fields-theme-options/metaboxes/assets/scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(cssmin())
            .pipe(gulp.dest('./wp-custom-fields-theme-options/metaboxes/assets/css'))
    });

    done();

});

gulp.task('default', gulp.series(gulp.parallel('watch')));


/*BUILD TASKS*/
gulp.task('clean_wpcfto_styles', function (done) {

    console.log('Cleaning WPCFTO styles');

    return gulp.src('./wp-custom-fields-theme-options/metaboxes/assets/css', {allowEmpty: true})
        .pipe(clean());
});

gulp.task('build_wpcfto_styles', function (done) {

    console.log('Compiling WPCFTO styles');

    gulp.src('./wp-custom-fields-theme-options/metaboxes/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./wp-custom-fields-theme-options/metaboxes/assets/css'));

    done();

});

gulp.task('build', gulp.series('clean_wpcfto_styles', 'build_wpcfto_styles'));