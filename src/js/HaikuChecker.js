// let userInput = "cat"
// let mapped = (userInput).split(" ");
// let mapped = input.map(e => e.split(""));

// vowelSearch(input) {
// transformed = input.filter(/([aeiou]e)\w+/gi)
//   return transformed
// }

// filter(vowelSearch())



export default function syllableCounter(userInput) {

  let mapped = userInput.split("");
  // console.log(mapped);
  let syllableCount = 0;

  let index = 0;

  let vowelArray = ['a','e','i','o','u','y']
  
  function recursive(mapped) {

    

    if (mapped.length === index) { //BASE CASE??
      return;
    }

    if (mapped.length <= 3) { // weed out 3 letter words
      syllableCount = 1;
      return;
    }

    if (vowelArray.includes(mapped[index])) {
      console.log(mapped[index]+" index:"+index)
      if (mapped[index] === mapped[mapped.length-1]) { // weed out vowels at end
        if(mapped[index] === 'e' && mapped[index-1] === 'l' && vowelArray.includes(mapped[index-2]) === false) { // weed out multiples
          syllableCount++;
        }
      } else if (vowelArray.includes(mapped[index+1]) === false) { // if a vowel is following a vowel
        syllableCount++;

      } else if (mapped[index] === 'i' && mapped[index+1] === 'a') {
        syllableCount += 1;

      } else if (vowelArray.includes(mapped[index+1]) && vowelArray.includes(mapped[index+2])) {
        syllableCount++;
      }

    }
    index++;
    recursive(mapped);
  }
  recursive(mapped);
  return syllableCount;
}