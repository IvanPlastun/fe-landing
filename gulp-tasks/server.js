import { paths } from '../gulpfile.esm'
import gulp from 'gulp' 
import browserSync from 'browser-sync'
import compilePug from './pug'
import styles from './styles'
import processingScripts from './processingScripts'
import processingImages from './images'
import svgSprite from './svg'
import copyFonts from './fonts'

function server() {
    browserSync.init({
        server: {
            baseDir: './dist/'
        },
        port: 8081
    })

    gulp.watch(paths.watch.pug).on('change', gulp.parallel(compilePug))
    gulp.watch(paths.watch.styles).on('change', gulp.parallel(styles))
    gulp.watch(paths.watch.js).on('change', gulp.parallel(processingScripts))
    gulp.watch(paths.watch.images).on('change', gulp.parallel(processingImages))
    gulp.watch(paths.watch.svg).on('change', gulp.parallel(svgSprite))
    gulp.watch(paths.watch.fonts).on('change', gulp.parallel(copyFonts))
}

export default server