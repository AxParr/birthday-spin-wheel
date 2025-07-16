#!/usr/bin/env node
import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3004;
const HOST = '0.0.0.0';

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const server = createServer(async (req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

    let filePath = req.url === '/' ? '/examples/playground/index.html' : req.url;

    // Remove leading slash
    filePath = filePath.substring(1);

    // Security: prevent directory traversal
    if (filePath.includes('..')) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    try {
        const fullPath = join(__dirname, '..', filePath);
        const content = await readFile(fullPath);
        const ext = extname(filePath);
        const contentType = mimeTypes[ext] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    } catch (error) {
        console.error(`Error serving ${filePath}:`, error.message);
        res.writeHead(404);
        res.end('File not found');
    }
});

server.listen(PORT, HOST, () => {
    console.log(`🚀 Server running at:`);
    console.log(`   Local: http://localhost:${PORT}/examples/playground/`);
    console.log(`   Network: http://0.0.0.0:${PORT}/examples/playground/`);
    console.log(`   Your IP: http://10.44.247.147:${PORT}/examples/playground/`);
    console.log(`\n📱 Accessible from any device on your network!`);
    console.log(`🌐 For internet access, configure port forwarding on your router:`);
    console.log(`   External Port: ${PORT} → Internal IP: 10.44.247.147:${PORT}`);
}); 