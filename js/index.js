var wordContainer = document.getElementById("container");

var wordSequence = [
    "I",    "loved",    "you",    "once:",    "perhaps",    "that",    "love",    "has",    "yet",    "To",
    "die",    "down",    "thoroughly",    "within",    "my",    "soul;",    "But",    "let",    "it",
    "not",    "dismay",    "you",    "any",    "longer;",    "I",    "have",    "no",    "wish",    "to",    "cause",
    "you",    "any",    "sorrow.",    "I",    "loved",    "you",    "wordlessly,",    "without",    "a",    "hope,",
    "By",    "shyness",    "tortured,",    "or",    "by",    "jealousy.",    "I",    "loved",    "you",    "with",
    "such",    "tenderness",    "and",    "candor",    "And",    "pray",    "God",    "grants",    "you",    "to",
    "be",    "loved",    "that",    "way",    "again."
];

function printWord(index){
    wordContainer.innerHTML = wordSequence[index];
}

function clearScreen(){
    wordContainer.innerHTML = "";
}

var i = 0;

function printWords(){

    var wordTimeout =  wordSequence[i].length * 200;

    setTimeout(function () {
        printWord(i);

        i++;
        if(i < wordSequence.length){
            printWords();
        } else {
            setTimeout(clearScreen, wordTimeout);
        }
    }, wordTimeout);
}


printWords();

