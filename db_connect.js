var mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
// var inquirer = require("inquirer");
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Character_DB',
  });

// Star Wars Characters (DATA)
// =============================================================
var characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./routes/characterPage.html"));
});

//   app.get('/api/characters/', (req, res) => {
//     return res.json(characters);
// });

// Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});
// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newcharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  console.log(newcharacter);
  characters.push(newcharacter);
  res.json(newcharacter);
});


require('./routes/api-routes')(app, connection);