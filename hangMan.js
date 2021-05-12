
let words = ['python', 'ruby', 'java', 'javascript', 'html', 'c', 'php', 'swift', 'sql', 'css',
    'fortran', 'assembly', 'holyc', 'pascal', 'kotlin', 'perl', 'rust', 'scala', 'typescript', 'foxpro',
    'racket', 'go'];
let word = words[Math.floor(Math.random() * words.length)];
let hiddenWord = '';
let hiddenWordToArray = [];
let count = 6;


//This function transforms the given word, to the length times underscores. 
//It also displays the lives count.
function displayWord() {
    for (i = 0; i < word.length; i++) {
        hiddenWord += "_";
    }
    document.getElementById("word").innerHTML = hiddenWord;
    document.getElementById('tries').innerHTML = 'Lives: ' + count;

}

displayWord();

//This functions keeps track of the lives, and tells you if you win.  I should probably 
// integrate this with the  you lost part of the subsequente function
function win() {
    if (count > 1 && word === hiddenWord) document.getElementById('tries').innerHTML = 'You won';
    else if (count === 0) {
        document.getElementById('tries').innerHTML = 'You lost';
        document.getElementById('word').innerHTML = word;
    }
}


/*This function displays the letter if is included in the word. It also keeps trakc or the lives
 What I did here was to get the string to be an array, then replace the letter, 
 and then get it back to an string. After that I deleted the commas that 
 are generated with the array. By the end of the function we call the win() function*/
function displayLetter(letter) {

    hiddenWordToArray = hiddenWord.split('');

    if (count >= 1 && hiddenWord !== word) {
        if (word.includes(letter)) {

            for (let count = 0; count < word.length; count++) {
                if (word[count] === letter) {
                    hiddenWordToArray[count] = letter;
                }
            }
        }

        else count--;
        document.getElementById('tries').innerHTML = 'Lives: ' + count;
    }


    hiddenWord = hiddenWordToArray.toString().replace(/,/gi, '');
    document.getElementById("word").innerHTML = hiddenWord;
    win();
    displayGraphics();
}

function displayGraphics() {
    if (count === 5) document.getElementById("graphics").src = "images/2.png";
    else if (count === 4) document.getElementById("graphics").src = "images/3.png";
    else if (count === 3) document.getElementById("graphics").src = "images/4.png";
    else if (count === 2) document.getElementById("graphics").src = "images/5.png";
    else if (count === 1) document.getElementById("graphics").src = "images/6.png";
    else if (count === 0) document.getElementById("graphics").src = "images/7.png";
}

function reset() {
    word = words[Math.floor(Math.random() * words.length)];
    hiddenWord = '';
    hiddenWordToArray = [];
    count = 6;
    document.getElementById("graphics").src = "images/1.png";

    displayWord();
}



