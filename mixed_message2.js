let nounStore = ["I", "You", "He", "She", "It", "They", "Jake", "Carl", "Susan", "Karen"];
let verbStore = ["swim", "eat", "cook", "love", "break", "fix", "chew", "scream", "lick", "smell"];
let objectStore = ["toys", "books", "glass", "food", "shoes", "shirts", "boxes", "screen", "tails", "poop"];
let wordBox = [nounStore,verbStore,objectStore];

function randomExtractor (){
    let randomNum = Math.floor(Math.random() * 10);
    return randomNum
    }


function messageGenerator (arr1, randomizer) {
    let finalSentence = [];
    for (i = 0; i < arr1.length; i++) {
        let indexPrime = randomizer;
        finalSentence.push(arr1[i][indexPrime]);
    }
    console.log(finalSentence.join(" ") + ".");
    
}
    
messageGenerator(wordBox, randomExtractor());