import { config } from './esbuild.bundle.js'
import fs from 'fs'
import { resolve } from 'path'

const indexFile = 'index.html'

export function copy() {
    if (!fs.existsSync(config.outdir)) {
        fs.mkdirSync(config.outdir, {
            recursive: true
        })
    }

    fs.copyFile(resolve(indexFile), resolve(config.outdir, indexFile), err => {
        if (err) {
            throw err
        }
        console.log(`${indexFile} as been copy`)
    })
}
