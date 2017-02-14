

var sentence = prompt("Enter a sentence...");

var firstLetter = sentence.charAt(0);

var firstUpper = firstLetter.toUpperCase();

    alert(firstUpper);

var lastLetter = sentence.charAt(sentence.length-1);

var lastUpper = lastLetter.toUpperCase();

    alert(lastUpper);

var added = (lastUpper + firstUpper);

    alert(added);

var sentenceAdd = (sentence + added);

    alert(sentenceAdd);

var reverseString = function(str) {
    alert(str.split("").reverse().join(""));
}
reverseString(sentenceAdd);
