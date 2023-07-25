const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css');

const styles = () => {
    return src('./styles/sass/*.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(dest('./styles/css/'));
}

const watcher = () => {
    return watch(['./styles/sass/**/*.scss'], styles);
}

exports.default = series(watcher, styles);