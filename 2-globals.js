// GLOBALS - NO WINDOW !!!!

// _dirname  - path to current directory
// _filename - file name
// require   - function o use models (CommonJS)
// module   - info about current module (file)
// process   - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
    console.log('hello world!')
}, 1000)