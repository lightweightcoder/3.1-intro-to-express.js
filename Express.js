import express from 'express';

const app = express();

const PORT = 3000;

const diceRoll = () => Math.floor(Math.random() * 6 + 1);

// callback when a GET request is made to homepage
const whenIncomingRequest = (request, response) => {
  console.log('request came in');

  response.send('yay');
};

// callback when a GET request is made to /dice-roll path
const whenIncomingRequestForDiceRoll = (request, response) => {
  const numberRolled = diceRoll();

  const output = `You rolled ${numberRolled} on a 6-sided dice!`;

  response.send(output);
};

// set route to respond with 'yay' when a GET request is made to homepage
app.get('/', whenIncomingRequest);

// set route to respond with a dice roll when a GET request is made to /dice-roll path
app.get('/dice-roll', whenIncomingRequestForDiceRoll);

// set route to respond with 2 dice rolls when a GET request is made to /two-dice-roll path
app.get('/two-dice-roll', whenIncomingRequestForTwoDiceRoll);

// set the port to listen to
app.listen(PORT);
