'use strict'

import {paths} from '../gulpfile.esm'
import del from 'del'

function cleanDist() {
    return del(paths.dist.clean)
}

export default cleanDist