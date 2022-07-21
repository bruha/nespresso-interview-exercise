import esbuild from 'esbuild'
import { resolve } from 'path'

export const config = {
    logLevel: 'info',
    entryPoints: [resolve('src/main.js')],
    bundle: true,
    outdir: resolve('dist'),
    sourcemap: true,
    minify: true,
    splitting: true,
    format: 'esm',
    target: ['esnext']
}

export function bundle(defaultEsbuildConfig = {}) {
    return esbuild.build({
        ...defaultEsbuildConfig,
        ...config
    })
}
