if (typeof window === 'undefined') {
    global.window = {}
}
if (typeof self === 'undefined') {
    global.self = {}
}
const fs = require('fs')
const path = require('path') 
const express = require('express')
const { renderToString } = require('react-dom/server')
const SSR = require('../dist/search_server.js')
const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8')

const renderMarkup = (str) => {
    console.log("renderMarkup -> str", str)
    return template.replace('<!--HTML_PLACEHOLDER-->', str)
}

const server = (port) => {
    const app = express();
    app.use(express.static('dist'));
    app.get('/search', (req, res) => {
        console.log("server -> SSR", SSR)
        const html = renderMarkup(renderToString(SSR))
        res.status(200).send(html);
    });
    app.listen(port, () => {
        console.log(`server is running on port`)
    });
};

server(process.env.PORT || 3000)

