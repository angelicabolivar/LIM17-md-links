const utils = require('../src/utils.js');

const testRouteRelative = './src/data/file.md'
const testRouteRelative1 = '.\src\data\file.md'
const testRouteFolder = './src/data/'
const testRouteAbsolute = 'C:\\Users\\viang\\Desktop\\LIM17-md-links\\src\\data\\file.md'
const testRouteAbsolute1 = 'C:\Users\viang\Desktop\LIM17-md-links\src\data\file.md'

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
    expect(testRouteRelative1).toBe(testRouteAbsolute1)
  })
});

const isFolder = (ruta) => fs.statSync(ruta).isDirectory();
describe('utils.isFolder' , () => {
  it('if is a folder should return true', () => {
    expect(utils.isFolder(testRouteFolder)).toBe(true)
  })
});