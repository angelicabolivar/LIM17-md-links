#!/usr/bin/env node
const mdLinks = require('./index.js')

let inputPath = process.argv[2];
// let validate = process.argv[3];
// console.log(process.argv)
const options = {
  validate : process.argv.includes('--validate'),
  stats : process.argv.includes('--stats')
}


mdLinks(inputPath, options)
.then(response =>{
  console.log('CLI:',response)
})
.catch(err => {
  console.log(err)
});