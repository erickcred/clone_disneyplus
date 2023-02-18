const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemap = require("gulp-sourcemaps");
const imagemin = require("gulp-imagemin");
const html = require("gulp-html");
const uglify = require("gulp-uglify");

function styles() {
    return gulp.src("./src/styles/*.scss")
        .pipe(sourcemap.init())
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

function scriptJs() {
    return gulp.src("./src/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/scripts/"));
}

exports.default = gulp.parallel([styles, minificaImagem, htmlPro]);
exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
    gulp.watch("./src/*.html", gulp.parallel(htmlPro));
    gulp.watch("./src/scripts/*.js", gulp.parallel(scriptJs))
}