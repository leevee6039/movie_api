const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  uuid = require('uuid');

app.use(bodyParser.json());

let users = [
  {
    id: 1,
    name: 'Kim',
    favoriteMovies: [],
  },
  {
    id: 2,
    name: 'Joe',
    favoriteMovies: ['Silence of the Lambs'],
  },
];

let movies = [
  {
    _id: {
      $oid: '5db84bfb22a14ce2324bb434',
    },
    Title: 'Silence of the Lambs',
    Description:
      'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    Genre: {
      Name: 'Thriller',
      Description:
        'Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.',
    },
    Director: {
      Name: 'Jonathan Demme',
      Bio: 'Robert Jonathan Demme was an American director, producer, and screenwriter.',
      Birth: '1944',
      Death: '2017',
    },
    IMagePath: 'silenceofthelambs.jpg',
    Featured: true,
  },
  {
    _id: {
      $oid: '5db85bf122a14ce2324bb435',
    },
    Title: 'Steel Magnolias',
    Description:
      'A young beautician, newly arrived in a small Louisiana town, finds work at the local salon, where a small group of women share a close bond of friendship, and welcome her into the fold.',
    Genre: {
      Name: 'Drama',
      Description:
        'Drama films are serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature. A dramatic film shows us human beings at their best, their worst, and everything in-between.',
    },
    Director: {
      Name: 'Herbert Ross',
      Bio: 'Herbert Ross was born on May 13, 1927 in Brooklyn, New York City, New York, USA as Herbert David Ross. He is known for his work on The Turning Point (1977), The Goodbye Girl (1977) and Steel Magnolias (1989). He was married to Lee Radziwill and Nora Kaye.',
      Birth: '1927',
      Death: '2001',
    },
    ImagePath: 'steelmagnolias.jpg',
    Featured: true,
  },
  {
    _id: {
      $oid: '5db85d4322a14ce2324bb436',
    },
    Title: 'Life Is Beautiful',
    Description:
      'Drama films are serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature. A dramatic film shows us human beings at their best, their worst, and everything in-between.',
    Genre: {
      Name: 'Drama',
      Description:
        'Drama films are serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature. A dramatic film shows us human beings at their best, their worst, and everything in-between.',
    },
    Director: {
      Name: 'Roberto Benigni',
      Bio: 'Roberto Benigni was born on October 27, 1952 in Manciano La Misericordia, Castiglion Fiorentino, Tuscany, Italy as Roberto Remigio Benigni. He is an actor and writer, known for Life Is Beautiful (1997), The Tiger and the Snow (2005) and Down by Law (1986). He has been married to Nicoletta Braschi since December 26, 1991.',
      Birth: '1952',
    },
    ImagePath: 'lifeisbeautiful.jpg',
    Featured: true,
  },
  {
    _id: {
      $oid: '5db8621822a14ce2324bb437',
    },
    Title: 'Schindlers List',
    Description:
      'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    Genre: {
      Name: 'Drama',
      Description:
        'Drama films are serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature. A dramatic film shows us human beings at their best, their worst, and everything in-between.',
    },
    Director: {
      Name: 'Steven Speilberg',
      Bio: 'One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywoods best known director and one of the wealthiest filmmakers in the world.',
      Birth: '1946',
    },
    ImagePath: 'schindlerslist.jpg',
    Featured: false,
  },
  {
    _id: {
      $oid: '5db8650222a14ce2324bb438',
    },
    Title: 'Raiders of the Lost Ark',
    Description:
      "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
    Genre: {
      Name: 'Action',
      Description:
        'Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, and frantic chases.',
    },
    Director: {
      Name: 'Steven Speilberg',
      Bio: 'One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywoods best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer.',
      Birth: '1946',
    },
    ImagePath: 'raidersofthelostark.jpg',
    Featured: true,
  },
  {
    _id: {
      $oid: '5db869e722a14ce2324bb439',
    },
    Title: 'Moana',
    Description:
      "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana'sisland, she answers the Ocean's call to seek out the Demigod to set things right.",
    Genre: {
      Name: 'Fantasy',
      Description:
        'Unlike science fiction films that base their content upon some degree of scientific truth, fantasy films take the audience to netherworld, fairy-tale places where events are unlikely to occur in real life. In mythological or legendary times, they transcend the bounds of human possibility and physical laws. Fantasy films are often in the context of the imagination, dreams, or hallucinations of a character or within the projected vision of the storyteller. Fantasy films often have an element of magic, myth, wonder, escapism, and the extraordinary. They may appeal to both children and adults, depending upon the particular film.',
    },
    Director: {
      Name: 'Taika Waititi',
      Bio: 'Taika Waititi, also known as Taika Cohen, hails from the Raukokore region of the East Coast of New Zealand, and is the son of Robin (Cohen), a teacher, and Taika Waiti, an artist and farmer.',
      Birth: '1975',
    },
    ImagePath: 'moana.jpg',
    Featured: true,
  },
  {
    _id: {
      $oid: '5db86b9022a14ce2324bb43a',
    },
    Title: 'Apocalypto',
    Description:
      'As the Mayan kingdom faces its decline, a young man is taken on a perilous journey to a world ruled by fear and oppression.',
    Genre: {
      Name: 'Adventure',
      Description:
        'Adventure film is a genre that revolves around the conquests and explorations of a protagonist. The purpose of the conquest can be to retrieve a person or treasure, but often the main focus is simply the pursuit of the unknown. These films generally take place in exotic locations and play on historical myths.',
    },
    Director: {
      Name: 'Mel Gibson',
      Bio: 'Mel Columcille Gerard Gibson was born January 3, 1956 in Peekskill, New York, USA, as the sixth of eleven children of Hutton Gibson, a railroad brakeman, and Anne Patricia (Reilly) Gibson (who died in December of 1990). His mother was Irish, from County Longford, while his American-born father is of mostly Irish descent.',
      Birth: '1956',
    },
    ImagePath: 'apocalypto.jpg',
    Featured: false,
  },
  {
    _id: {
      $oid: '5db86c9322a14ce2324bb43b',
    },
    Title: 'Better Off Dead',
    Description:
      'A teenager has to deal with his girlfriend dumping him among family crises, homicidal paper boys, and a rival skier.',
    Genre: {
      Name: 'Comedy',
      Description:
        'Comedy films are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment. The comedy genre humorously exaggerates the situation, the language, action, and characters. Comedies observe the deficiencies, foibles, and frustrations of life, providing merriment and a momentary escape from day-to-day life. They usually have happy endings, although the humor may have a serious or pessimistic side.',
    },
    Director: {
      Name: 'Savage Steve Holland',
      Bio: 'Marvelously quirky and creative writer, director, producer and animator Savage Steve Holland was born in 1960. Holland earned the childhood nickname Savage after he kicked a kid in the teeth during a soccer game. He studied animation at the California Institute of the Arts.',
      Birth: '1958',
    },
    ImagePath: 'betteroffdead.jpg',
    Featured: true,
  },
  {
    _id: {
      $oid: '5db86d9922a14ce2324bb43c',
    },
    Title: 'Hunt for the Wilder People',
    Description:
      'A national manhunt is ordered for a rebellious kid and his foster uncle who go missing in the wild New Zealand bush.',
    Genre: {
      Name: 'Adventure',
      Description:
        'Adventure film is a genre that revolves around the conquests and explorations of a protagonist. The purpose of the conquest can be to retrieve a person or treasure, but often the main focus is simply the pursuit of the unknown. These films generally take place in exotic locations and play on historical myths.',
    },
    Director: {
      Name: 'Taika Waititi',
      Bio: 'Taika Waititi, also known as Taika Cohen, hails from the Raukokore region of the East Coast of New Zealand, and is the son of Robin (Cohen), a teacher, and Taika Waiti, an artist and farmer.',
      Birth: '1975',
    },
    ImagePath: 'huntforthewilderpeople.jpg',
    Featured: false,
  },
  {
    _id: {
      $oid: '5db86e8b22a14ce2324bb43d',
    },
    Title: 'The Pirate Movie',
    Description:
      'The crew of a large ship sail the high seas encountering other pirates from other ships. The boy from the ship ends up having to save his girlfriend who is kidnapped by a bunch of other pirates.',
    Genre: {
      Name: 'Adventure',
      Description:
        'Adventure film is a genre that revolves around the conquests and explorations of a protagonist. The purpose of the conquest can be to retrieve a person or treasure, but often the main focus is simply the pursuit of the unknown. These films generally take place in exotic locations and play on historical myths.',
    },
    Director: {
      Name: 'Ken Annakin',
      Bio: 'A former salesman and journalist, Ken Annakin got into the film industry making documentary shorts. His feature debut, Holiday Camp (1947), was a comedy about a Cockney family on vacation. It was made for the Rank Organization and was a modest success, spawning three sequels, all of which he directed.',
      Birth: '1914',
    },
    ImagePath: 'thepiratemovie.jpg',
    featured: false,
  },
];

// CREATE
app.post('/users', (req, res) => {
  const newUser = req.body;

  if (!newUser.name) {
    res.status(400).send('User need name!');
  } else {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).json(newUser);
  }
});

// UPDATE
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updateUser = req.body;

  let user = users.find((user) => user.id == id);

  if (!user) {
    res.status(400).send('No such user!');
  } else {
    user.name = updateUser.name;
    res.status(201).json(user);
  }
});

// CREATE
app.post('/users/:id/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

  let user = users.find((user) => user.id == id);

  if (!user) {
    res.status(400).send('No such movie in users favorite movies!');
  } else {
    user.favoriteMovies.push(movieTitle);
    res
      .status(200)
      .send(`${movieTitle} has been added to user ${user.name}'s array`);
  }
});

// DELETE
app.delete('/users/:id/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

  let user = users.find((user) => user.id == id);

  if (!user) {
    res.status(400).send('No such movie in users favorite movies!');
  } else {
    user.favoriteMovies = user.favoriteMovies.filter(
      (title) => title !== movieTitle
    );
    res
      .status(200)
      .send(`${movieTitle} has been removed to user ${user.name}'s array`);
  }
});

// DELETE
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  let user = users.find((user) => user.id == id);

  if (!user) {
    res.status(400).send('No such user!');
  } else {
    users = users.filter((user) => user.id != id);
    res.status(200).send(`User ${user.name} has been deleted`);
  }
});

// READ
app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

// READ
app.get('/movies/:title', (req, res) => {
  const { title } = req.params;
  const movie = movies.find((movie) => movie.Title === title);

  if (!movie) {
    res.status(400).send('No such movie!!');
  } else {
    res.status(200).send(movie);
  }
});

// READ
app.get('/movies/genre/:genreName', (req, res) => {
  const { genreName } = req.params;
  const genre = movies.find((movie) => movie.Genre.Name === genreName).Genre;

  if (!genre) {
    res.status(400).send('No such genre!!');
  } else {
    res.status(200).send(genre);
  }
});

// READ
app.get('/movies/directors/:directorName', (req, res) => {
  const { directorName } = req.params;
  const director = movies.find(
    (movie) => movie.Director.Name === directorName
  ).Director;

  if (!director) {
    res.status(400).send('No such director!!');
  } else {
    res.status(200).send(director);
  }
});

app.listen(8080, () => console.log('Your app is listening on port 8080'));
