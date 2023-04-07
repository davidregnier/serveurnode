const http = require('http');
const fs = require('fs');
const express = require('express')
const app = express()

const server = http.createServer(
    (Req, Res) => {
        let fichier = "";
        console.log("Server created successfully.")
        Res.setHeader('content-type', 'text/html; charset=utf8')
        if ((Req.url === '/' || Req.url === '/home') && Req.method === 'GET') {
            fichier = './HTML/index.html';
        } else if (Req.url === '/profil' && Req.method === 'GET') {
            fichier = './HTML/profil.html';
        } else if (Req.url === '/contact' && Req.method === 'GET') {
            fichier = './HTML/contact.html';
        } else if (Req.url === '/product' && Req.method === 'GET') {
            fichier = './HTML/product.html';
        }    else{
            fichier = './HTML/404.html';
        }
        fs.readFile(fichier,
            (error, Data) => {
                if (error) {
                    console.error(error);
                    Res.end();
                } else {
                    Res.write(Data);
                    Res.end();
                }
        })
    }
);

server.listen(8080, "localhost", () => {
    console.log("Server listening on port 8080");
})
