const path = require("path");

console.log(path.dirname("E:/nodejslearning/PathModule/path.js"));
console.log(path.extname("E:/nodejslearning/PathModule/path.js"));
console.log(path.basename("E:/nodejslearning/PathModule/path.js"));

const myPath = path.parse("E:/nodejslearning/PathModule/path.js");
console.log(myPath.name);
