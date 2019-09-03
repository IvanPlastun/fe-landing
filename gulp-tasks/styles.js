import {paths} from '../gulpfile.esm'
import gulp from 'gulp'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import gulpif from 'gulp-if'
import stylus from 'gulp-stylus'
import autoprefixer from 'gulp-autoprefixer'
import rename from 'gulp-rename'
import mincss from 'gulp-clean-css'
import groupMediaQueries from 'gulp-group-css-media-queries'
import sourcemaps from 'gulp-sourcemaps'
import yargs from 'yargs'

const argv = yargs.argv,
    production = !!argv.production

function styles() {
    return gulp.src(paths.src.styles)
        .pipe(plumber({
            errorHandler: notify.onError(err => {
                return {
                    title: 'styles',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(gulpif(!production, sourcemaps.init()))
        .pipe(stylus())
        .pipe(groupMediaQueries())
        .pipe(gulpif(production, autoprefixer({
            cascade: false
        })))
        .pipe(gulpif(production, mincss({
            compatibility: 'ie9', level: {
                1: {
                    specialComments: 0,
                    removeEmpty: true,
                    removeWhitespace: true
                },
                2: {
                    mergeMedia: true,
                    removeEmpty: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                    removeUnusedAtRules: false
                }
            }
        })))
        .pipe(gulpif(production, rename({
            suffix: '.min'
        })))
        .pipe(gulpif(!production, sourcemaps.write('./maps/')))
        .pipe(gulp.dest(paths.dist.styles))
        .pipe(browserSync.stream())
}

export default styles