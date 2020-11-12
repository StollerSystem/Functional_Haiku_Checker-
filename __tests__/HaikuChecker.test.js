import  syllableCounter  from "../src/js/HaikuChecker.js";
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

      test('recursive function Hilarious', () => {
        expect(syllableCounter('Hilarious')).toEqual(4);
        
        });
  
})