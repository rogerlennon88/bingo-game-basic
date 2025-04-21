const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const hostname = '127.0.0.1'; // localhost
const port = 3000;
const publicDir = path.join(__dirname, 'public');

const getContentType = (filePath) => {
    const extname = path.extname(filePath).toLowerCase();
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        case '.json':
            return 'application/json';
        case '.png':
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg';
        case '.gif':
            return 'image/gif';
        default:
            return 'application/octet-stream';
    }
};

const serveFile = async (req, res, filePath) => {
    try {
        const fullPath = path.join(publicDir, filePath);
        const data = await fs.readFile(fullPath);
        const contentType = getContentType(fullPath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
        } else {
            console.error(`Error serving ${filePath}: ${err}`);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 Internal Server Error</h1>');
        }
    }
};

// Simulación de los datos de la aplicación (esto vendría de tu lógica real)
let latestBall = 0;

// Función para actualizar la última balota (simulando la interfaz administrativa)
const updateLatestBall = (newBall) => {
    latestBall = newBall;
};

const server = http.createServer(async (req, res) => {
    const reqUrl = req.url === '/' ? '/index.html' : req.url;

    if (reqUrl === '/api/last-number') {
        // Endpoint para obtener la última balota
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ lastNumber: latestBall }));
        return;
    }

    if (reqUrl.startsWith('/views/')) {
        const viewPath = reqUrl.substring(1); // Remove the leading slash
        const lastChar = viewPath.slice(-1);
        if (lastChar === '/' || path.extname(viewPath) === '') {
            await serveFile(req, res, viewPath + '/index.html');
        } else {
            await serveFile(req, res, viewPath);
        }
    } else {
        await serveFile(req, res, reqUrl);
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://<span class="math-inline">\{hostname\}\:</span>{port}/`);
});

// Simulación de la lógica de la interfaz administrativa (en un escenario real,
// esto estaría en tu main.js o en otra parte de tu backend)
const simulateAdminUpdate = () => {
    // Simula que cada 5 segundos se marca una nueva balota
    setInterval(() => {
        const newBall = Math.floor(Math.random() * 75) + 1;
        updateLatestBall(newBall);
        console.log(`[Servidor] Última balota actualizada: ${newBall}`);
    }, 5000);
};

simulateAdminUpdate();