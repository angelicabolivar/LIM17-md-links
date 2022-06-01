// const {
//   existPath, isAbsolute, 
//   convertAbsolute, isFolder,
//   readFolder, readFile, getFileExtension
// } = require('./utils.js')
const utils = require('./utils.js')
const Path = require('path');
const fetch = require('node-fetch');


const mdLinks = (path, options) => {
  return new  Promise((resolve, reject) => {

    if(!utils.existPath(path)){
      reject('La ruta no existe');
    }
    if(!utils.isAbsolute(path)){
      path = utils.convertAbsolute(path)
    }
    if(utils.isFolder(path)){
      // directorios
      const fileListPath = utils.readDirectories(path)
        
      const arrayPromise = fileListPath.map((pathFile) => mdLinks(pathFile, options));
      Promise.all(arrayPromise)
        .then((data) =>{
          resolve(data)
        })
      
    }else{
      // archivo
      if(utils.getFileExtension(path) !== '.md'){
         reject('No es un archivo .md')
      }
      const links = utils.readFile(path);
      
      if(options.validate && options.stats){
        
        const arrayPromise = links.map(elem => {
          return fetch(elem.href)
          .then(response => {
            elem.status = response.status;
            elem.ok = response.ok;
            return elem
          })
        })
        return Promise.all(arrayPromise)
        .then(linksStatus =>{
          
          const uniqueData = new Set(links);
          let uniqueArray =[...uniqueData];
          let broken = 0;
          linksStatus.forEach(element => {
            if(element.status !== 200){
              broken++
            }
          })
          resolve({
              total : links.length,
              unique : uniqueArray.length,
              broken
          })
          })
      }
      if(options.validate){
        const arrayPromise = links.map(elem => {
          return fetch(elem.href)
                  .then(response => {
                    elem.status = response.status;
                    elem.ok = response.ok;
                    return elem
                  })
        })
        return Promise.all(arrayPromise)
          .then(response =>{
            
            resolve(response); 
          })
          
      }
      if(options.stats){

        const uniqueData = new Set(links);
        let uniqueArray =[...uniqueData];

        resolve({
          total : links.length,
          unique : uniqueArray.length,
      })
      }

      resolve(links); 

      
    }
  });
};
module.exports = mdLinks

