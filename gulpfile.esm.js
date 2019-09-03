import gulp from 'gulp'
import cleanDist from './gulp-tasks/clean'
import server from './gulp-tasks/server'
import compilePug from './gulp-tasks/pug'
import styles from './gulp-tasks/styles'
import processingScripts from './gulp-tasks/processingScripts'
import processingImages from './gulp-tasks/images'
import svgSprite from './gulp-tasks/svg'
import copyFonts from './gulp-tasks/fonts'

const paths = {
    src: {
        pug: './src/pug/pages/**/*.pug',
        styles: './src/styles/**/main.styl',
        js: './src/js/**/*.js',
        images: './src/**/*.{jpg,jpeg,png,gif,tiff,svg}',
        svg: './src/img/svg/*.svg',
        fonts: './src/fonts/**/*.{eot,ttf,otf,woff,woff2}',
        html: ['./src/views/index.html','./src/views/pages/*.html']
    },
    dist: {
        clean: './dist/',
        html: './dist/',
        styles: './dist/styles',
        js: './dist/js',
        images: './dist/',
        svg: './dist/img/svgsprites',
        fonts: './dist/fonts'
    },
    watch: {
        pug: './src/pug/**/*.pug',
        styles: './src/styles/**/*.styl',
        js: './src/js/**/*.js',
        images: './src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}',
        svg: './src/img/svg/*.svg',
        fonts: './src/fonts/**/*.{eot,ttf,otf,woff,woff2}',
        html: './src/views/**/*.html'
    },
}

export { paths }

export const development = gulp.series(cleanDist,
    gulp.parallel([compilePug, styles, processingScripts, processingImages, copyFonts, svgSprite]),
    server
)
export const buildProd = gulp.series(cleanDist,
        gulp.series([compilePug, styles, processingScripts, processingImages, copyFonts, svgSprite]))

export default development