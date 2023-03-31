const fs = require("fs");

const bioData = {
    name : "shalu",
    age : 23,
    channel : "CrystalS Crew",
};

// console.log(bioData.channel);

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const objData = JSON.parse(jsonData);

// console.log(objData);

//*task*
//1: convert into json
//2: Add to another file
//3: ReadFile
//4: convert back to js object 
//5: console.log

const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) => {
//     console.log("done");
// });

fs.readFile("json1.json", "utf-8", (err, data) =>{
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})