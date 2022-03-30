'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  let trimWord = word.trim();
  let lwWord = trimWord.toLowerCase();

    let aIdx = lwWord.indexOf('a');
    let eIdx = lwWord.indexOf('e');
    let iIdx = lwWord.indexOf('i');
    let oIdx = lwWord.indexOf('o');
    let uIdx = lwWord.indexOf('u');
    // let len = lwWord.length;

    let lowestIndex = -1;

    // console.log("The first 'a' is at position", aIdx);
    // console.log("The first 'e' is at position", eIdx);
    // console.log("The first 'i' is at position", iIdx);
    // console.log("The first 'o' is at position", oIdx);
    // console.log("The first 'u' is at position", uIdx);
    // console.log("The length of the word is", len);

    if(aIdx !== -1){
        lowestIndex = aIdx;
    } else if(eIdx !== -1){
        lowestIndex = eIdx;
    } else if(iIdx !== -1){
        lowestIndex = iIdx;
    } else if (oIdx !== -1){
        lowestIndex = oIdx;
    } else if (uIdx !== -1){
        lowestIndex = uIdx;
    };

    if(eIdx !== -1 && eIdx<lowestIndex){
        lowestIndex = eIdx;
    }
    if(iIdx !== -1 && iIdx<lowestIndex){
        lowestIndex = iIdx;
    }
    if(oIdx !== -1 && oIdx<lowestIndex){
        lowestIndex = oIdx;
    }
    if(uIdx !== -1 && uIdx<lowestIndex){
        lowestIndex = uIdx;
    }

    console.log("The value of lowestIndex is: ", lowestIndex);

    if(aIdx===-1 && eIdx===-1 && iIdx===-1 && oIdx===-1 && uIdx===-1){
      console.log(lwWord + 'ay');
      let newWord = lwWord + 'ay';
      return newWord;

    }else if(lowestIndex >= 1){
        let array = lwWord.split('');
        // console.log('array before for loop', array)
        for(let i=0; i<lowestIndex; i++){
            array[array.length+i] = array[i];
        
            // console.log(array);
        }
        for(let i=0; i<lowestIndex; i++){
            array.shift();
        }
        let newWord = array.join('');
        let newPigWord = newWord + 'ay';
        console.log(newPigWord)
        return newPigWord;
    }else{
        console.log(lwWord+'yay');
        return lwWord+'yay';
    };  

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
