result = prompt("Jak Ci na imię?");

var name = result;

function askName(name = "Łukasz") {
  prompt(`Hello, ${name}! What is your question for Magic 8 Ball?`);
}

askName(name);

let magic8Ball = 
['It is certain',
'It is decidedly so',
'Without a doubt',
'Yes definitely',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Outlook good',
'Yes',
'Signs point to yes',
'Reply hazy, try again',
'Ask again later',
'Better not tell you now',
'Cannot predict now',
'Concentrate and ask again',
'Do not count on it',
'My reply is no',
'My sources say no',
'Outlook not so good',
'Very doubtful'];

let x = Math.floor(Math.random()*19);

alert('\n' + magic8Ball[x]);