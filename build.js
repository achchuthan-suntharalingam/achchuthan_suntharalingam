import esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'

const distDir = 'dist'

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

// Copy index.html to dist and update script reference
let htmlContent = fs.readFileSync('index.html', 'utf-8')
htmlContent = htmlContent.replace(
  /<script[^>]*src="[^"]*main\.tsx"[^>]*><\/script>/,
  '<script type="module" src="/main.js"><\/script>'
)
fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent)

// Copy public files if they exist
if (fs.existsSync('public')) {
  const publicFiles = fs.readdirSync('public')
  publicFiles.forEach(file => {
    const srcPath = path.join('public', file)
    const destPath = path.join(distDir, file)
    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, destPath)
    }
  })
}

// Build with esbuild
esbuild.build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  outdir: distDir,
  outbase: 'src',
  target: 'es2020',
  format: 'esm',
  loader: {
    '.css': 'css',
    '.svg': 'file',
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
}).catch(() => process.exit(1))
