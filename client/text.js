const path = require("path")

// console.log(__dirname)
console.log("Dirname" ,  __dirname);  // Current directory of the file
console.log("FileName", __filename); // Full path to the current file
console.log("====")
console.log(path.resolve(__dirname, "./src"))
console.log(path.isAbsolute(__dirname))