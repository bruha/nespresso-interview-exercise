import servbot from 'servbot'
import { bundle } from './esbuild.bundle.js'
import { copy } from './copyAssets.js'

const SERVER_PORT = 8080

copy()

export const configServer = {
    root: 'dist',
    reload: true,
    fallback: 'index.html' // fallback to index.html for SPA routes
}

const server = servbot(configServer)

// start our server at localhost:8000
server.listen(SERVER_PORT)

bundle({
    minify: false,
    sourcemap: true,
    watch: {
        onRebuild(error) {
            if (error) {
                console.error(error)
            } else {
                console.log('Bundled!')
            }
            server.reload() // <-- This will live reload on every rebuild
        }
    }
}).catch(error => {
    console.error(error)
    process.exit(1)
})
