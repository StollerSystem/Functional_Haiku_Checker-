
export function syllableCounter(userInput) {
  console.log("Checking: "+userInput)
  let mapped = userInput.split("");
  let syllableCount = 0;
  let index = 0;
  let vowelArray = ['a','e','i','o','u','y']
  
  function recursive(mapped) {    
    if (mapped.length === index) { 
      return;
    }
    if (mapped.length <= 3) { 
      syllableCount++;
      return;
    }
    if (vowelArray.includes(mapped[index])) {      
      if (index === mapped.length-1) {         
        if(mapped[index] === 'e' && mapped[index-1] === 'l' && vowelArray.includes(mapped[index-2]) === false) { 
          syllableCount++;
        } else if (vowelArray.includes(mapped[index]) && mapped[index] != "e") {
          syllableCount++;
        }
      } else if (vowelArray.includes(mapped[index+1]) === false) { 
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
};


export function haiku(firstline) {
  let answer = false
  let line1 = sentenceChopper(firstline)  
  return function insideOfLineHolder(secondline){
    let line2 = sentenceChopper(secondline)    
    return function insideTheOtherOne(thirdline) {
      let line3 = sentenceChopper(thirdline)      
      if (line1 === 5 && line2 ===7 && line3 ===5){
        answer = true;
        return answer
      } 
      else {        
        return answer
      }
    }    
  }  
};


export function sentenceChopper(inputLine) {
  const splitLine = (inputLine.split(" ")).map(e => syllableCounter(e));
  const picklerMan = splitLine.reduce(function(currentValue, element) {
    return element + currentValue;
  }, 0);
  return picklerMan;
}