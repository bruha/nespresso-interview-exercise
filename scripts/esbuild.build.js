import { bundle } from './esbuild.bundle.js'
import { copy } from './copyAssets.js'

copy()
bundle({ minify: true })
    .then(() => {
        console.log('Bundled!')
    })
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
