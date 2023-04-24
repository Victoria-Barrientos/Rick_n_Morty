const http = require('http');
const PORT = 3001;

module.exports =
  http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
    if(url.includes("/rickandmorty/character/")) {
        const id = url.split("/").at(-1);
        const character = data.find((char) => char.id === parseInt(id));

        if(character) {
          res.writeHead(200, { "Content-Type": "Application/json" }).end(JSON.stringify(character))
        } else {
          res.writeHead(404, { "Content-Type": "Application/json" }).end(JSON.stringify({ error: "Character not found"}))
        }
    }
})
.listen(PORT, "localhost")