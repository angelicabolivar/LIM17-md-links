const fs = require("fs");
const path = require('path');

//si la ruta existe
const existPath = (ruta) => fs.existsSync(ruta);

const isAbsolute = (ruta) => path.isAbsolute(ruta) 

const convertAbsolute = (ruta) => path.resolve(ruta)

const isFolder = (ruta) => fs.statSync(ruta).isDirectory()


const readFolder = (ruta) => {
  fs.readdir(ruta, (err , data) => {

    if(err){
      throw err
    }
    // console.log(data);
    return data
  })
}



const readFile = (ruta) =>{
  fs.readFile(ruta, (err , data) =>{

    if(err){
      throw err
    }
    // console.log(data.toString());
    return data
  });
}


const getFileExtension = (ruta) => path.extname(ruta)


module.exports= {
  existPath,
  isAbsolute,
  convertAbsolute,
  isFolder,
  readFolder,
  readFile,
  getFileExtension,
}



// const param = (p) => {
//   let index= process.argv.indexOf(p); 
//   return process.argv[index - 1]; 
// }


// let ruta1= param('--ruta');
// console.log(ruta1);
// console.log(process.argv);
