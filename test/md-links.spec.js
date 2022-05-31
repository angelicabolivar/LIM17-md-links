const mdLinks = require('../');
const fetch = require('node-fetch');
const testRouteFolder = "./test/data/"
const testRouteFile = "./test/data/data2/file.md"
const arrayLinks = [
  [
    {
      text: 'Google',
      href: 'https://google.com',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\data2\\file.md'
    },
    {
      text: 'Node.js',
      href: 'https://nodejs.org/',
      ruta: "C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\data2\\file.md"
    },
    {
      text: 'md-links',
      href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
      ruta: "C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\data2\\file.md"
    }
  ],
  [
    {
      
      text: 'Markdown',
      href: 'https://es.wikipedia.org/wiki/Markdown',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\file.md'
    },
    {
      text: 'Node.js',
      href: 'https://nodejs.org/',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\file.md'
    },
    {
      text: 'md-links',
      href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\file.md'
    }
  ],
]
const arrayFetch = [
  [
    {
      text: 'Google',
      href: 'https://google.com',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\data2\\file.md',
      status: 200,
      ok: true
    },
    {
      text: 'Node.js',
      href: 'https://nodejs.org/',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\data2\\file.md',
      status: 200,
      ok: true
    },
    {
      text: 'md-links',
      href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',       
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\data2\\file.md',
      status: 200,
      ok: true
    }
  ],
  [
    {
      text: 'Markdown',
      href: 'https://es.wikipedia.org/wiki/Markdown',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\file.md',
      status: 200,
      ok: true
    },
    {
      text: 'Node.js',
      href: 'https://nodejs.org/',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\file.md',
      status: 200,
      ok: true
    },
    {
      text: 'md-links',
      href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',   
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\file.md',
      status: 200,
      ok: true
    }
  ]
]
const arrayStats = [ 
  { total: 3, unique: 3 }, 
  { total: 3, unique: 3 } 
]
const arrayStatsValidate = [
  { total: 3, unique: 3, broken: 0 },
  { total: 3, unique: 3, broken: 0 }
]
jest.mock('node-fetch', ()=>jest.fn())

describe('mdLinks', () => {

  it('should return a list whith links from the folder', () => {
    const options = {
      validate : false,
      stats : false
    }
    mdLinks(testRouteFolder, options).then((resp) => {
      expect(resp).toStrictEqual(arrayLinks)
    })
  });

  it('should return a list whith links from the file', () => {
    const options = {
      validate : false,
      stats : false
    }
    mdLinks(testRouteFile, options).then((resp) => {
      expect(resp).toStrictEqual(arrayLinks[0])
    })
  });

  it('should return a list whith links from the file and options', () => {
    fetch.mockImplementation(()=> Promise.resolve({
      ok : true, 
      status :200,
    }))
    const options = {
      validate : true,
      stats : false
    }
    mdLinks(testRouteFile, options).then((resp) => {
      expect(resp).toStrictEqual(arrayFetch[0])
    })
  });

  it('should return a list whith links from the folder and options', () => {
    fetch.mockImplementation(()=> Promise.resolve({
      ok : true, 
      status :200,
    }))
    const options = {
      validate : true,
      stats : false
    }
    mdLinks(testRouteFolder, options).then((resp) => {
      expect(resp).toStrictEqual(arrayFetch)
    })
  });

  it('should return a list whith the stats', () => {
    fetch.mockImplementation(()=> Promise.resolve({
      ok : true, 
      status :200,
    }))
    const options = {
      validate : false,
      stats : true
    }
    mdLinks(testRouteFolder, options).then((resp) => {
      expect(resp).toStrictEqual(arrayStats)
    })
  });

  it('should return a object whith the stats', () => {
    fetch.mockImplementation(()=> Promise.resolve({
      ok : true, 
      status :200,
    }))
    const options = {
      validate : false,
      stats : true
    }
    mdLinks(testRouteFile, options).then((resp) => {
      expect(resp).toStrictEqual(arrayStats[0])
    })
  });

  it('should return a list whith the stats and validate', () => {
    fetch.mockImplementation(()=> Promise.resolve({
      ok : true, 
      status :200,
    }))
    const options = {
      validate : true,
      stats : true
    }
    mdLinks(testRouteFolder, options).then((resp) => {
      expect(resp).toStrictEqual(arrayStatsValidate)
    })
  });

  it('should return a list whith the stats and validate', () => {
    fetch.mockImplementation(()=> Promise.resolve({
      ok : true, 
      status :200,
    }))
    const options = {
      validate : true,
      stats : true
    }
    mdLinks(testRouteFile, options).then((resp) => {
      expect(resp).toStrictEqual(arrayStatsValidate[0])
    })
  });

  it('should return true if the route exist', () => {
    // fetch.mockImplementation(()=> Promise.resolve({
    //   ok : true, 
    //   status :200,
    // }))
    const options = {
      validate : false,
      stats : false
    }
    mdLinks('ruta.md', options).catch(err =>{
      expect(err).toBe('La ruta no existe')
    })
  });
  it('should return true if the route exist', () => {
    // fetch.mockImplementation(()=> Promise.resolve({
    //   ok : true, 
    //   status :200,
    // }))
    const options = {
      validate : false,
      stats : false
    }
    mdLinks('./src/data/file.txt', options).catch(err =>{
      expect(err).toBe('No es un archivo .md')
    })
  });
})

