const split=require('../src/split.js')

fdescribe('split',()=>{
  it('Splits a string into an array of letters',()=>{
    expect(split('hello')).toEqual(['h','e','l','l','o'])
    console.log('split result '+split('hello'))
  })
})