const input = (userInput).split(" ");
input.map(e => e.split(""));

vowelSearch(input) {
transformed = input.filter(/([aeiou]e)\w+/gi)
  return transformed
}

filter(vowelSearch())



function syllableCounter (input) {

  let syllableCount = 0;

  let index = 0;
  
  function recursive (input) {

    if (input.length === index) { //BASE CASE??
      return;
    }

    if (input.length <= 3) { // weed out 3 letter words
      syllableCount = 1;
      return;
    }

    if (['a','e','i','o','u','y'].contains(input[index])) {
      if (index === input.length-1) { // weed out vowels at end
        if(input[index+1] != input[index]) { // weed out multiples
        
        }     
      }
        
      
    }
  }
  input.map(e => recursive(e))

  return syllableCount
}