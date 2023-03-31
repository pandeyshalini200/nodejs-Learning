
const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    // fs.readFile("input.txt", (err, data) => {
    //     if (err) return cconsole.error(err);
    //     res.end(data.toString());
    // });

    // 2nd way 
    // Reading from a stream
    // Create a readable stream
    // Handle stream events --> DataTransfer, end, and error

//     const rStream = fs.createReadStream("input.txt")

//     rStream.on("data", (chunkdata) => {
//         res.write(chunkdata);
//     });
//     rStream.on("end", () => {
//         res.end();
//     });
//     rStream.on("error", (err) => {
//         console.log(err);
//         res.end("file not found");
//     });

// });

    // 3rd way
    const rStream = fs.createReadStream("input.txt")
        rStream.pipe(res);
    });

server.listen(8000, "127.0.0.1");