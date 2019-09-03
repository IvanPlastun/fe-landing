'use strict'

import { paths } from '../gulpfile.esm'
import browserSync from 'browser-sync'
import gulp from 'gulp'
import svg from 'gulp-svg-sprite'

function svgSprite() {
    return gulp.src(paths.src.svg)
        .pipe(svg({
            shape: {
                dest: 'base-svg'
            },
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(gulp.dest(paths.dist.svg))
        .on('end', browserSync.reload)
}


export default svgSprite