// const {
//   existPath, isAbsolute, 
//   convertAbsolute, isFolder,
//   readFolder, readFile, getFileExtension
// } = require('./utils.js')
const utils = require('./utils.js')

const mdLinks = (path, options) => {
  // console.log(path)
  utils.existPath(path)
  utils.isAbsolute(path)
  utils.convertAbsolute(path)
  if(utils.isFolder(path)){
    utils.readFolder(path)
  }else{
    utils.readFile(path)
    utils.getFileExtension(path)
  }
};
module.exports = mdLinks

// mdLinks('./data/file.md');
// mdLinks('data');
// mdLinks(__dirname + '/data'); //ruta absoluta 
// mdLinks(__dirname + '/data/file.md');