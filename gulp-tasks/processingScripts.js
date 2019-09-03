'use strict'

import { paths } from '../gulpfile.esm'
import webpack from 'webpack'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import rename from 'gulp-rename'
import webpackStream from 'webpack-stream'
import gulp from 'gulp'
import gulpif from 'gulp-if'
import browserSync from 'browser-sync'
import yargs from 'yargs'

const webpackConfig = require('../webpack.config.js')
const argv = yargs.argv,
    production = !!argv.production

webpackConfig.mode = production ? 'production' : 'development'
webpackConfig.devtool = production ? false : 'source-map'

function processingScripts() {
    return gulp.src(paths.src.js)
        .pipe(plumber({
            errorHandler: notify.onError(err => {
                return {
                    title: 'processingScripts',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulpif(production, rename({
            suffix: '.min'
        })))
        .pipe(gulp.dest(paths.dist.js))
        .on('end', browserSync.reload)
}

export default processingScripts