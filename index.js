// // server.mjs

// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         fs.readFile("./VIEWS/index.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     } else if (req.url === "/about") {
//         fs.readFile("./VIEWS/about.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     } else if (req.url === "/contact") {
//         fs.readFile("./VIEWS/contact.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     } else if (req.url === "/server") {
//         fs.readFile("./VIEWS/server.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     } else {
//         fs.readFile("./VIEWS/error.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     }
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, "127.0.0.1", () => {
//     console.log("Listening on http://127.0.0.1:3000");
// });

// // run with `node server.mjs`
// server.mjs
// // server.mjs
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         fs.readFile("./VIEWS/index.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end("Hello World!\n");
//         });
//     } else if (req.url === "/about") {
//         fs.readFile("./VIEWS/about.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end("Hello World!\n");
//         });
//     } else if (req.url === "/contact") {
//         fs.readFile("./VIEWS/contact.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end("Hello World!\n");
//         });
//     } else if (req.url === "/server") {
//         fs.readFile("./VIEWS/server.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end("Hello World!\n");
//         });
//     } else {
//         fs.readFile("./VIEWS/error.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end("Hello World!\n");
//         });
//     }
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, "127.0.0.1", () => {
//     console.log("Listening on http://127.0.0.1:3000");
// });

// run with `node server.mjs`
// server.mjs

// const http = require("http");
// const fs = require("fs");
// const e = require("express");
// const handleFile = (filename, statusCode, req, res) => {
//     fs.readFile(filename, "utf-8", (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end("Hello World!\n");
//         }
//     });
// };
// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         handleFile("./VIEWS/index.html", 200, req, res);
//     } else if (req.url === "/about") {
//         handleFile("./VIEWS/about.html", 200, req, res);
//     } else if (req.url === "/contact") {
//         handleFile("./VIEWS/contact.html", 200, req, res);
//     } else if (req.url === "/server") {
//         handleFile("./VIEWS/server.html", 200, req, res);
//     } else {
//         handleFile("./VIEWS/error.html", 200, req, res);
//     }
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, "127.0.0.1", () => {
//     console.log("Listening on http://127.0.0.1:3000");
// });

// run with `node server.mjs`
// server.mjs
const http = require("http");
const fs = require("fs");
const handleFile = (fileName, statusCode, req, res) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end("Hello World!\n");
        }
    });
};
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        handleFile("./VIEWS/index.html", 200, req, res);
    } else if (req.url === "/about") {
        handleFile("./VIEWS/about.html", 200, req, res);
    } else if (req.url === "/contact") {
        handleFile("./VIEWS/contact.html", 200, req, res);
    } else if (req.url === "/server") {
        handleFile("./VIEWS/server.html", 200, req, res);
    } else {
        handleFile("./VIEWS/error.html", 200, req, res);
    }
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
    console.log("Listening on http://127.0.0.1:3000");
});

// run with `node server.mjs`
