//Separates the input word of the 2nd position
const choice = process.argv.slice(2);
console.log(choice);


const possiblemoves= ["rock", "paper", "scissors"];
const rnd= Math.floor(Math.random()*3);


const computermove= possiblemoves[rnd];

console.log ('User chose '+choice+' and computer chose '+computermove);
if (choice=="scissors"&& computermove=="rock"){ 
    console.log("Computer has won!");
}
  else if (choice=="scissors"&& computermove=="paper"){ 
    console.log("You won!");
} 
else if (choice=="scissors"&& computermove=="scissors"){ 
  console.log("Play again.");
} 

if (choice=="paper"&& computermove=="rock"){ 
  console.log("You won!");
}
else if (choice=="paper"&& computermove=="paper"){ 
  console.log("Play again.");
} 
else if (choice=="paper"&& computermove=="scissors"){ 
console.log("Computer has won!");
} 

if (choice=="rock"&& computermove=="rock"){ 
  console.log("Play again.");
}
else if (choice=="rock"&& computermove=="paper"){ 
  console.log("Computer has won!");
} 
else if (choice=="rock"&& computermove=="scissors"){ 
console.log("You won!");
} 


