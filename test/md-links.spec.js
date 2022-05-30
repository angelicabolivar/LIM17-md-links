const mdLinks = require('../');
const testRouteFolder = './test/data/'
const testRouteFile = './test/data/file.md'
const arrayLinks = [
  [
    {
      text: 'Google',
      href: 'https://google.com',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\src\\data\\data2\\file.md'
    },
    {
      text: 'Node.js',
      href: 'https://nodejs.org/',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\src\\data\\data2\\file.md'
    },
    {
      text: 'md-links',
      href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\src\\data\\data2\\file.md'
    }
  ],
  [
    {
      text: 'Markdown',
      href: 'https://es.wikipedia.org/wiki/Markdown',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\src\\data\\file.md'
    },
    {
      text: 'Node.js',
      href: 'https://nodejs.org/',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\src\\data\\file.md'
    },
    {
      text: 'md-links',
      href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
      ruta: 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\src\\data\\file.md'
    }
  ]
]

describe('mdLinks', () => {

  it('should...', () => {
    mdLinks(testRouteFolder).then((resp) => {
      expect(resp).toStrictEqual(arrayLinks)
    })
  });

  it('should...', () => {
    mdLinks(testRouteFile).then((resp) => {
      expect(resp).toStrictEqual(arrayLinks[0])
    })
  });

});
