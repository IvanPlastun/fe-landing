'use strict'

import { paths } from '../gulpfile.esm'
import gulp from 'gulp'

function copyFonts() {
    return gulp.src(paths.src.fonts)
        .pipe(gulp.dest(paths.dist.fonts))
}

export default copyFonts