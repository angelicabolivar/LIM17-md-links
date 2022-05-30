// // Callbacks
// const fs = require("fs");
// const Path = require("path");
const fetch = require('node-fetch');

// function operacion(a, b, callback){
//   console.log(a, b)
//   return callback(a, b)
// }

// function suma(a, b){
//   return a + b 
// }

// function mult(a , b){
//   return a*b
// }

// // console.log(operacion(2, 5, suma))
// // console.log(operacion(2, 5, mult))

// const funcPromesa = () => { 
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve('Hola mundo 4s')
//     }, 4000)
//   })
// }
// // promesa
// //   .then((data)=>{console.log('data:', data)})
// //   .catch((err)=>{console.log('erro:', err)})

// // console.log('Debajo de la promesa')

// // const lista = [
// //   Promise.resolve('Hola Mundo'),
// //   Promise.resolve('Otro Valor'),
// //   funcPromesa()
// // ]
// // console.log(lista)
// // Promise.all(lista).then((resp)=>{ console.log(resp)})
// // console.log('Debajo del promise all')
// const ruta = './src/data'

// console.log(LeerDirectorios(ruta));

// function LeerDirectorios(ruta) {
//   let rutas = []
//   const fileList = fs.readdirSync(ruta)
//   fileList.forEach((file) => {
//     rutaUnida = Path.join(ruta, file);
//     if (fs.statSync(rutaUnida).isDirectory()) {
//       const rutas2 = LeerDirectorios(rutaUnida)
//       rutas = rutas.concat(rutas2)
//     } else {
//       rutas.push(rutaUnida);
//     }
//   })
//   return rutas

// };
// const options = {
//   "method" : "GET",
// }

const fetchData = () =>{
return new Promise((resolve, reject) =>{

})
}
const url = 'https://hackersandslackers.com/making-api-requests-with-nodejs/';

fetch(url)
  .then(response => {
    console.log(response.status),
    console.log(response.statusText)
  })
  .catch(err =>{
    console.log(err);
  })