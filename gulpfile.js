const gulp = require('gulp')

const Sass_Gulp = require('gulp-sass')(require('sass'))

const sourceMapSass = require('gulp-sourcemaps')

const coomprimeIMG = require('gulp-imagemin')

// UGLIFY é responsável pela minificação do codigo JS, dentro do gulp.js
const uglify_gulp = require('gulp-uglify')

function minificarJS(){

    return gulp.src('./source/scripts/*.js')
    .pipe(uglify_gulp())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){

    return gulp.src('./source/estilos/*.scss')
    .pipe(sourceMapSass.init())
    .pipe(Sass_Gulp({

        outputStyle: 'compressed'
    }))
    .pipe(sourceMapSass.write('./maps'))
    .pipe(gulp.dest('./build/estilos'))

}

function comprimeIMG(){

    return gulp.src('./soruce/img/*').pipe(coomprimeIMG()).pipe(gulp.dest('./build/img'))
}

exports.compilasass = compilaSass
exports.comprimirIMG = comprimeIMG
exports.comprimindoJS = minificarJS