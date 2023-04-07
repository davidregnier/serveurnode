const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.use((req, res, next)=>{
    console.log('requete effectué: ' + Date().toString());
    next()
})

app.get('/index', function (req, res) {
  res.status(200).sendFile('./public/HTML/index.html', {root:__dirname})
})

app.get('/guide', function (req, res) {
  res.status(200).sendFile('./public/HTML/guide.html', {root:__dirname})
})

app.get('/jeux', function (req, res) {
  res.status(200).sendFile('./public/HTML/jeux.html', {root:__dirname})
})

app.get('/personnage', function (req, res) {
  res.status(200).sendFile('./public/HTML/personnage.html', {root:__dirname})
})

app.use((req,res)=>{
    res.status(404).sendFile('./public/HTML/404.html', {root:__dirname})
})

app.get('/', function (req, res) {
    res.status(301).redirect('/index')
  })
app.listen(port, () => {
    console.log("Server listening on port " + port);
})