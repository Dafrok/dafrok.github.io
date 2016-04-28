var gulp = require('gulp')
var webpack = require('webpack-stream')
var pug = require('gulp-pug')
var plumber=require('gulp-plumber')
var uglify=require('gulp-uglify')
var browserSync=require('browser-sync')

var paths={
    dev:{
        pug:'src/pug/**/*.pug',
        js:'src/js/**',
        store:'src/store/**',
        vue:'src/vue/**',
        css:'src/resource/css/**'
    },
    build:{
        html:'dist',
        js:'dist/js',
        css:'dist/css'
    }
}

gulp.task('browser-sync',function(){
    browserSync({
        server:{
            baseDir:'./dist/',
            // index: '/html/index.html'
        }
    })
    gulp.watch(paths.dev.pug, ['pug'])
    gulp.watch([paths.dev.js, paths.dev.store, paths.dev.vue],['webpack'])
    gulp.watch(['dist/**'],['reload'])
})

gulp.task('reload',function(){
    return browserSync.reload()
})

gulp.task('css',function(){
    return gulp.src(paths.dev.css)
        .pipe(gulp.dest(paths.build.css))
})

gulp.task('pug',function(){
    return gulp.src(paths.dev.pug)
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest(paths.build.html))
})

gulp.task('webpack',function(){
    return gulp.src([paths.dev.js])
        .pipe(plumber())
        .pipe(webpack({
            entry:'./src/js/entry.js',
            output:{
                filename:'main.js'
            },
            module:{
                loaders:[
                    {test: /\.js?$/, exclude: /node_modules/, loader: 'babel'},
                    {test: /\.vue?$/, exclude: /node_modules/, loader: 'vue'}
                ]
            }
        }))
    .pipe(gulp.dest(paths.build.js))
})

gulp.task('default',['browser-sync','webpack','pug','css'])