// imports express
const express = require('express'),
  morgan = require('morgan'),
  fs = require('fs'); // imports built-in module

// declares a variable that encapsulates Express’s functionality to configure your web server
const app = express();

// create a write stream(in append mode)
// 'a': Open file for appending. The file is created if it does not exist.
const accessLogStream = fs.createWriteStream('log.txt', {
  flag: 'a',
});

// JSON object of top 10 movies
let topTenMoviesIMDB = [
  {
    title: 'The Shawshank Redemption',
    rank: '1',
    id: 'tt0111161',
  },
  {
    title: 'The Godfather',
    rank: '2',
    id: 'tt0068646',
  },
  {
    title: 'The Godfather: Part II',
    rank: '3',
    id: 'tt0071562',
  },
  {
    title: 'Pulp Fiction',
    rank: '4',
    id: 'tt0110912',
  },
  {
    title: 'The Good, the Bad and the Ugly',
    rank: '5',
    id: 'tt0060196',
  },
  {
    title: 'The Dark Knight',
    rank: '6',
    id: 'tt0468569',
  },
  {
    title: '12 Angry Men',
    rank: '7',
    id: 'tt0050083',
  },
  {
    title: "Schindler's List",
    rank: '8',
    id: 'tt0108052',
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    rank: '9',
    id: 'tt0167260',
  },
  {
    title: 'Fight Club',
    rank: '10',
    id: 'tt0137523',
  },
];

// using morgan middleware to append logs
app.use(morgan('combined', { stream: accessLogStream }));

//GET requests
app.get('/', (req, res) => {
  // res.send --> sends a response of various types
  res.send('Welcome to my movie club!');
});

app.get('/movies', (req, res) => {
  // res.json --> sends a JSON response
  res.json(topTenMoviesIMDB);
});

// Serving Static Files
app.use(express.static('public'));

// 'err' parameter allows you to receive information about whatever unexpected error brought you to the current handler
//Information about the current error would be logged to the terminal using 'err.stack', which is a property of the error parameter for the middleware function.
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something Broke');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080');
});
