const utils = require('../src/utils.js');

const testRouteRelative = './test/data/file.md'
const testRouteFolder = './test/data/'
const testRouteAbsolute = 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\file.md'
const testFile = `[Google](https://google.com) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional README.md).

Estos archivos Markdown normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato Markdown, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)`

const arrayLinks = [
  {
   text: "Google",
   href: "https://google.com",
   ruta: "C:\\Users\\viang\\Desktop\\LIM17-md-links\\test\\data\\file.md",
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
},
]

describe('utils.existPath' , () => {
  it('if the route exist should return true', () => {
    expect(utils.existPath(testRouteRelative)).toBe(true)
  })
});

describe('utils.isAbsolute' , () => {
  it('if the route is absolute should return true', () => {
    expect(utils.isAbsolute(testRouteAbsolute)).toBe(true)
  })
});

describe('utils.convertAbsolute', () => {
  it('if the route is relative should convert to absolute', () => {
    expect(utils.convertAbsolute(testRouteRelative)).toBe(testRouteAbsolute)
  })
});

describe('utils.isFolder' , () => {
  it('if is a folder should return true', () => {
    expect(utils.isFolder(testRouteFolder)).toBe(true)
  })
});

describe('utils.getFileExtension', () => {
  it('should return the file extension', () =>{
    expect(utils.getFileExtension(testRouteAbsolute)).toBe('.md')
  })
});

describe('utils.getLinks', () => {
  it('should return an object with properties', () =>{
    const expected = utils.getLinks(testFile, testRouteAbsolute)
    expect(expected).toStrictEqual(arrayLinks)
  })
});