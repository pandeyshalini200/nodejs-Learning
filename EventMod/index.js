const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("sayMyName", () => {
//     console.log("your name is shalu");
// });

// event.on("sayMyName", () => {
//     console.log("your name is pandey");
// });

// event.on("sayMyName", () => {
//     console.log("your name is tripathi");
// });

// event.emit("sayMyName");

event.on("checkpage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkpage", 200, "ok")
