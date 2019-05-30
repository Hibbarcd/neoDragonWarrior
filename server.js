const express = require('express');
const path = require('path');
//If switching to MongoDB
// const mongoose = require("mongoose");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();
// require("/src/routes/htmlRoutes")(app);
// require("src/routes/htmlRoutes")(app);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/html')));

// Serve up static assets (usually on heroku)

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.use(routes);

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist";
// mongoose.connect(MONGODB_URI || { useNewUrlParser: true });

var characters = [
    {
  routeName: "ortega",
  name: 'Ortega',
  class: 'Hero',
  level: '55',
  MaxMP: 100,
  MaxHP: 300,
  attributes: {
      strength: 5,
      vitality: 5,
      agility: 5,
      intelligence: 5,
      luck: 2,
      experience: 500000,
  },
  position: '1'
},
{
    routeName: "miyamoto",
    name: 'Miyamoto',
    level: '65',
    MaxMP: 100,
    MaxHP: 300,
    attributes: {
        strength: 5,
        vitality: 5,
        agility: 5,
        intelligence: 5,
        luck: 2,
        experience: 500000,
    },
    position: '2'
},
{
  routeName: "gilgamesh",
  name: 'Gilgamesh',
  level: '35',
  MaxMP: 100,
  MaxHP: 300,
  attributes: {
      strength: 5,
      vitality: 5,
      agility: 5,
      intelligence: 5,
      luck: 2,
      experience: 500000,
  },
  position: '3'
}
];

// Displays all characters
app.get("/api/characters", function(req, res) {
    return res.json(characters);
  });

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

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/html/charCreationScreen.html"));
  });
  
// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcharacter);
  
    characters.push(newcharacter);
  
    res.json(newcharacter);
  });
  

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
