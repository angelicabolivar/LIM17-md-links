#!/usr/bin/env node
const mdLinks = require('./index.js')
const utils = require('./utils.js')
let inputPath = process.argv[2];
// let validate = process.argv[3];
// console.log(process.argv)
const options = {
  validate : process.argv.includes('--validate'),
  stats : process.argv.includes('--stats')
}


mdLinks(inputPath, options)
.then(response =>{
  // console.log('CLI:',response)
if(utils.isFolder(inputPath)){
  if(options.stats & options.validate){
    response.forEach(elment=>{
      console.log('total:',elment.total)
      console.log('unique:',elment.unique)
      console.log('broken:',elment.broken)
    })
  }else if(options.stats){
    response.forEach(elment=>{
      console.log('total:',elment.total)
      console.log('unique:',elment.unique)
    })
  }else{
    response.forEach(elemt =>{
      elemt.forEach(link =>{
        if(options.validate){
          const ok = link.ok ? 'ok' : 'fail'
          console.log(link.ruta, link.href, ok, link.status, link.text)
        }else{
          console.log(link.ruta, link.href, link.text)
        }
      })
    })
  }
}else{
  if(options.stats & options.validate){
    console.log('total:',response.total)
    console.log('unique:',response.unique)
    console.log('broken:',response.broken)
  }else if(options.stats){
    console.log('total:',response.total)
    console.log('unique:',response.unique)
  }else{
    response.forEach(elemt =>{
      if(options.validate){
        const ok = elemt.ok ? 'ok' : 'fail'
        console.log(elemt.ruta, elemt.href, ok, elemt.status, elemt.text)
      }else{
        console.log(elemt.ruta, elemt.href, elemt.text)
      }
    })
  }
}
})
.catch(err => {
  console.log(err)
});