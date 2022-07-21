import { config } from './esbuild.bundle.js'
import fs from 'fs'
import { resolve } from 'path'

const indexFile = 'index.html'

export function copy() {
    fs.copyFile(resolve(indexFile), resolve(config.outdir, indexFile), err => {
        if (err) {
            throw err
        }
        console.log(`${indexFile} as been copy`)
    })
}
