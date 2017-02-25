var wordContainer = document.getElementById("container");

var wordSequence = [
    "", "",
    "", ""
];

function printWord(index){
    wordContainer.innerHTML = wordSequence[index];
}

function clearScreen(){
    wordContainer.innerHTML = "";
}

var i = 0;

function printWords(){
    setTimeout(function () {
        printWord(i);

        i++;
        if(i < wordSequence.length){
            printWords();
        } else {
            setTimeout(clearScreen, 1200);
        }
    }, 1200);
}


printWords();


