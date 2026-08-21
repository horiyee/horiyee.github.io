import { copyFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const clientRoot = path.resolve(root, '..')
const source = path.join(clientRoot, 'node_modules/@picocss/pico/css/pico.min.css')
const destinationDir = path.join(clientRoot, 'public/assets')
const destination = path.join(destinationDir, 'pico.min.css')

await mkdir(destinationDir, { recursive: true })
await copyFile(source, destination)
console.log(
  `copied ${path.relative(clientRoot, source)} -> ${path.relative(clientRoot, destination)}`,
)
