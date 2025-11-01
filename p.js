// const http = require("http");
// const port = 3000;
// const hostname = "127.0.0.1";
// const server = http.createServer((req, res) => {
//     console.log(req.url);

//     res.end("<h1>welcome to the node js server</h1>");
// });

// server.listen(port, hostname, () => {
//     console.log(`server is running on port http://${hostname}:${port}`);
// });

// const http = require("http");
// const fs = require("fs");
// const port = 3000;
// const hostname = "127.0.0.1";
// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         fs.readFile("./VIEWS/index.html", (err, data) => {
//             res.writeHead(200, {"content-type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     } else if (req.url === "/about") {
//         fs.readFile("./VIEWS/about.html", (err, data) => {
//             res.writeHead(200, {"content-type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     } else if (req.url === "/contact") {
//         fs.readFile("./VIEWS/contact.html", (err, data) => {
//             res.writeHead(200, {"content-type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     } else if (req.url === "/server") {
//         fs.readFile("./VIEWS/server.html", (err, data) => {
//             res.writeHead(200, {"content-type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     } else
//         fs.readFile("./VIEWS/error.html", (err, data) => {
//             res.writeHead(200, {"content-type": "text/html"});
//             res.write(data);
//             res.end();
//         });
// });

// server.listen(port, hostname, () => {
//     console.log(`server is running on port http://${hostname}:${port}`);
// });
// server.mjs

// run with `node server.mjs`
