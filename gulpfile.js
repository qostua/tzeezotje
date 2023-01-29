const gulp = require('gulp');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const webp = require('gulp-webp');

const convertFonts = () => {
  gulp.src('src/fonts/*.ttf')
    .pipe(ttf2woff2())
    .pipe(gulp.dest('public/fonts'))
  return gulp.src('src/fonts/*.ttf')
    .pipe(ttf2woff())
    .pipe(gulp.dest('public/fonts'))
};

const convertToWebp = () => {
  gulp.src('src/img/*.{jpg,png}')
    .pipe(gulp.dest('public/img'))
  return gulp.src('src/img/*.{jpg,png}')
    .pipe(webp())
    .pipe(gulp.dest('public/img'))
}

exports.convertFonts = convertFonts;
exports.convertToWebp = convertToWebp;
