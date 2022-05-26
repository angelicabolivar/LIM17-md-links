#!/usr/bin/env node
const mdLinks = require('./index.js')

let inputPath = process.argv[2];

// console.log(inputPath);
mdLinks(inputPath)
.catch(err => {
  console.log(err)
});