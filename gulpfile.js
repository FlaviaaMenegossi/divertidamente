const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');

function style() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
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
    gulp.watch('./src/*.html').on('change', minifyHtml);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', minifyJs);
    gulp.watch('./dist/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./src/images/**/*', optimizeImages);
    gulp.watch('./src/favicon.svg', copyFavicon);
}

function copyFavicon() {
    return gulp.src('./src/favicon.svg')
        .pipe(gulp.dest('./dist'));
}

function minifyHtml() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
}

function minifyJs() {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

async function optimizeImages() {
    const imagemin = (await import('gulp-imagemin')).default;
    return gulp.src('./src/images/**/*', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.style = style;
exports.watch = watch;
exports.minifyHtml = minifyHtml;
exports.minifyJs = minifyJs;
exports.optimizeImages = optimizeImages;
exports.copyFavicon = copyFavicon;

exports.default = gulp.series(
    gulp.parallel(minifyHtml, minifyJs, optimizeImages, style, copyFavicon),
    watch
);
