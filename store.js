// // const http = require("http");
// // const port = 3000;
// // const hostname = "127.0.0.1";
// // const server = http.createServer((req, res) => {
// //     console.log(req.url);

// //     res.end("<h1>welcome to the node js server</h1>");
// // });

// // server.listen(port, hostname, () => {
// //     console.log(`server is running on port http://${hostname}:${port}`);
// // });

// const http = require("http");
// const fs = require("fs");
// const port = 3000;
// const hostname = "127.0.0.1";
// const server = http.createServer((req, res) => {
//     const handleFile = (statusCode, fileLocation) => {
//         fs.readFile(fileLocation, (err, data) => {
//             res.writeHead(statusCode, {"content-type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     };
//     if (req.url === "/") {
//         handleFile(200, "./VIEWS/index.html");
//     } else if (req.url === "/about") {
//         handleFile(200, "./VIEWS/about.html");
//     } else if (req.url === "/contact") {
//         handleFile(200, "./VIEWS/contact.html");
//     } else if (req.url === "/server") {
//         handleFile(200, "./VIEWS/server.html");
//     } else handleFile(200, "./VIEWS/error.html");
// });

// server.listen(port, hostname, () => {
//     console.log(`server is running on port http://${hostname}:${port}`);
// });
