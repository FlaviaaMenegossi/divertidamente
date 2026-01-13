const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/*.html').on('change', copyHtml);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', copyJs);
    gulp.watch('./dist/js/**/*.js').on('change', browserSync.reload);
}

function copyHtml() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
}

function copyJs() {
    return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./dist/js'));
}

function copyImages() {
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dist/images'));
}

exports.style = style;
exports.watch = watch;
exports.default = gulp.series(gulp.parallel(copyHtml, copyJs, copyImages, style), watch);
