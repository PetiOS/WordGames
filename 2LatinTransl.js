const args = process.argv.slice(2);

const wtotransl = [];

function isCharVowel(character) {
    "aeiouAEIOU".indexOf(character) !== -1;
}


function capitalizeFirstLetter(word) {

    return word[0].toUpperCase() + word.slice(1);
}

function translate(word) {
    let result = word;



    const firstLetter = word[0];
    let isUpperCase = false;
    if (firstLetter === firstLetter.toUpperCase()) isUpperCase = true;

   
    word = word.toLowerCase();

   //the function
    if (!isCharVowel(firstLetter) && word[1] && isCharVowel(word[1])) {
        const firstLetter = firstLetter;
        const restString = word.slice(1);
        result = restString + firstLetter + 'ay';

    } else if (!isCharVowel(firstLetter) && word[1] && !isCharVowel(word[1])) {
        const firstTwoLetters = word.slice(0, 2);
        const restString = word.slice(2);
        result = restString + firstTwoLetters + 'ay';
    } else if (isCharVowel(firstLetter)) {
        result = word + 'way';
    }


   

    return result;
}

// the output
for (let word of args) {
    wtotransl.push(translate(word))
}

console.log(wtotransl.join(' '));