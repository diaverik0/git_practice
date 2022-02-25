let nounStore = ["I", "You", "He", "She", "It", "They"];
let verbStore = ["swim", "eat", "cook", "love", "break", "fix"];
let objectStore = ["toys", "books", "glass", "food", "shoes", "shirts"];

function randomExtractor (){
    let randomNum = Math.floor(Math.random() * 6);
    return randomNum
    }

function messageGenerator (arr1, arr2, arr3, randomizer) {
let finalSentence = [];
let word1Index = randomizer;
let word2Index = randomizer;
let word3Index = randomizer;

finalSentence.push(arr1[word1Index]);
finalSentence.push(arr2[word2Index]);
finalSentence.push(arr3[word3Index]);

console.log(finalSentence.join(" ") + "."); 

}

messageGenerator(nounStore, verbStore, objectStore, randomExtractor());