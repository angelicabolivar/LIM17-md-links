const fs = require("fs");
const { resolve } = require("path");
const Path = require('path');

//si la ruta existe
const existPath = (ruta) => fs.existsSync(ruta);

const isAbsolute = (ruta) => Path.isAbsolute(ruta);

const convertAbsolute = (ruta) => Path.resolve(ruta);

const isFolder = (ruta) => fs.statSync(ruta).isDirectory();

const getFileExtension = (ruta) => Path.extname(ruta)




const getLinks = (file, ruta) => {

    const regExp = /\[(.*?)\]\(h(.*?)\)/gm;
    const arrayRegExp = file.match(regExp);
    
    const arrayObject = arrayRegExp.map((item) => {
    const objLink = {
      text: item.slice(1,item.indexOf(']')),
      href: item.slice(item.indexOf('(') + 1,item.indexOf(')')),
      ruta,
    }
    
     return objLink
  
  })
  return arrayObject
  
}

function readDirectories(ruta) {
  let rutas = []
  const fileList = fs.readdirSync(ruta)
  fileList.forEach((file) => {
    rutaUnida = Path.join(ruta, file);
    if (fs.statSync(rutaUnida).isDirectory()) {
      const rutas2 = readDirectories(rutaUnida)
      rutas = rutas.concat(rutas2)
    } else if(getFileExtension(rutaUnida) === '.md'){
      rutas.push(rutaUnida);
    }
  })
  // console.log('lo que retorna readDirectories', rutas);
  return rutas

};

const readFile = (ruta) =>{
  const file = fs.readFileSync(ruta, 'utf8')

  const links = getLinks(file, ruta)
  return links
}

module.exports= {
  existPath,
  isAbsolute,
  convertAbsolute,
  isFolder,
  readFile,
  getFileExtension,
  getLinks, 
  readDirectories,
}




