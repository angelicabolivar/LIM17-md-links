const fs = require("fs");
const { resolve } = require("path");
const Path = require('path');

//si la ruta existe
const existPath = (ruta) => fs.existsSync(ruta);

const isAbsolute = (ruta) => Path.isAbsolute(ruta);

const convertAbsolute = (ruta) => Path.resolve(ruta);

const isFolder = (ruta) => fs.statSync(ruta).isDirectory();


// const readFolder = (ruta) => {
//   return fs.readdir(ruta, (err , data) => {

//     if(err){
//       throw err
//     }
//     console.log(data);
//     return data
//   })
// }


// const readFile = (ruta) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(ruta, 'utf8', (err , data) =>{
  
      
//       resolve(data);
 
//   })
// })
// }


const getFileExtension = (ruta) => Path.extname(ruta)




const getLinks = (file, ruta) => {

  // return new Promise((resolve, reject) => {
  //   if (typeof file !==  'string') {
  //     reject("Dato incorrecto");
  //   }
 
    const regExp = /\[(.*?)\]\((.*?)\)/gm;
    const arrayRegExp = file.match(regExp);
    // console.log('file', file);
    // console.log('links', arrayRegExp);
    // return arrayRegExp
  const arrayObject = arrayRegExp.map((item) => {
    const objLink = {
      text: item.slice(1,item.indexOf(']')),
      href: item.slice(item.indexOf('(') + 1,item.indexOf(')')),
      ruta,
    }
    console.log('objeto', objLink)
     return objLink
  // const regExpr = /^\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/
  //const regex = /(?:^|)\[([^!].*?)\]\((.+?)\)/gim
  })
  return arrayObject
  // resolve(arrayObject)
//  })
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
  return rutas

};

const readFile = (ruta) =>{
  const file = fs.readFileSync(ruta, 'utf8')
  // const getLinks =(file, ruta) => {
  //   return new Promise((resolve, reject) => {
  //     .then(data =>{
  //       resolve(data)
  //     })
  //     .catch(reject)
  //   })

  // }

  const links = getLinks(file, ruta)
  return links
}

// const readFolderRecursive = (err, fileList) => {
//   if (err) {
//     reject('Error de lectura del archivo');
//   }
//   console.log('archivos de la carpeta', fileList)
//   let resultFiles = []
//   fileList.forEach((element) => {
//     const absolutePath = Path.join(ruta, element)
//     if(utils.isFolder(absolutePath)){
//       utils.readFolder(absolutePath).then(readFolderRecursive)
//     }else if(utils.getFileExtension(absolutePath) === '.md'){
//        resultFiles.push(absolutePath)
//     }

//   })
//   resolve(resultFiles) 
// };

// const text = `
// ## 1. Preámbulo

// [Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
// ligero muy popular entre developers. Es usado en muchísimas plataformas que
// manejan texto plano (GitHub, foros, blogs, ...), y es muy común
// encontrar varios archivos en ese formato en cualquier tipo de repositorio
// (empezando por el tradicional README.md).

// Estos archivos normalmente contienen _links_ (vínculos/ligas) que
// muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
// la información que se quiere compartir.

// Dentro de una comunidad de código abierto, nos han propuesto crear una
// herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
// en formato , para verificar los links que contengan y reportar
// algunas estadísticas.

// ![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)
// `
// getLinks(text);


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




