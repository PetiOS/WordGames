const args = process.argv.slice(2);

const abcletter = 'abcdefghijklmnopqrstuvwxyz';
const movenumber = abcletter.length;

let outputArray = [];

const vstinput = args[0].toLowerCase();

const shift = parseInt(args[1]) %movenumber;

// the function changing the word
function cipher(word) {
    let writtenpis = '';
    for (let char of word) {
        const spaceinth = abcletter.indexOf(char);

        if (spaceinth === -1) {
            // Not a letter, keep value
            writtenpis += char;
            continue;
        }
        let newPosition = spaceinth + shift;
        if (newPosition < 0) {
            newPosition += movenumber;
        }
        
        newPosition = newPosition % movenumber;
        
        writtenpis += abcletter[newPosition];
    }
    return writtenpis;
}
console.log ("Cesar's output:");

const inputArray = vstinput.split(' ');

for (let word of inputArray) {
    outputArray.push(cipher(word));
}

console.log(outputArray.join(' '));