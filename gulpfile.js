const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const html = require("gulp-html");
const gulpReplace = require("gulp-replace");

function styles() {
    return gulp.src("./src/styles/*.scss")
        .pipe( sass({ outputStyle : "compressed" }) )
        .pipe(gulp.dest("./dist/css"));
}

function minificaImagem() {
    return gulp.src("./src/images/**/*")
        .pipe( imagemin())
        .pipe(gulp.dest("./dist/images/"))
}

function htmlPro() {
    return gulp.src("./src/*.html")
        .pipe(html())
        .pipe(gulp.dest("./dist/"));
}

function htmlReplace() {
    return gulp.src(["./src/*.html"])
        .pipe(gulpReplace('../dist/css/main.css', './dist/css/main.css'))
        .pipe(gulp.dest("./dist/"))
}

exports.default = gulp.parallel([styles, minificaImagem, htmlPro]);
exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
    gulp.watch("./src/*.html", gulp.parallel(htmlPro));
}