// const {
//   existPath, isAbsolute, 
//   convertAbsolute, isFolder,
//   readFolder, readFile, getFileExtension
// } = require('./utils.js')
const utils = require('./utils.js')
const Path = require('path');

const mdLinks = (path, options) => {
  return new  Promise((resolve, reject) => {

    if(!utils.existPath(path)){
      return reject('La ruta no existe')
    }
    if(!utils.isAbsolute(path)){
      path = utils.convertAbsolute(path)
    }
    if(utils.isFolder(path)){
      
      const fileList = utils.readDirectories(path)
        
      const fileListPaths = fileList.map((file) => utils.readFile(file))
      console.log(fileListPaths)
      return fileListPaths
          
         
    }else{
      console.log('extension', path)
      if(utils.getFileExtension(path) !== '.md'){
         reject('No es un archivo .md')
      }
      const links = utils.readFile(path);
      console.log(links)
      return links 
      
    }
  });
};
module.exports = mdLinks

