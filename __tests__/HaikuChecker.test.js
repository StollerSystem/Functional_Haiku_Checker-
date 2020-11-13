import  { syllableCounter, haiku }  from "../src/js/HaikuChecker.js";


  describe('Recursive approach to counting syllables', () => {
    test('recursive function', () => {
      expect(syllableCounter('cat')).toEqual(1);
      });
  
    test('recursive function Eagle', () => {
      expect(syllableCounter('Eagle')).toEqual(2);
      });

    test('recursive function Dial', () => {
      expect(syllableCounter('Dial')).toEqual(2);
      });

    test('recursive function Habitat', () => {
      expect(syllableCounter('Habitat')).toEqual(3);
      });

    test('recursive function silence', () => {
      expect(syllableCounter('Silence')).toEqual(2);
      
      });

    test('HaikuCount', () => {
      expect(haiku('An old silent pond')('A frog jumps into the pond')('splash! Silence again')).toEqual(true);
      
      });

    test('HaikuCount', () => {
    expect(haiku("test")("test")("test")).toEqual(false);
      
    });
  
})