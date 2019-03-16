var path = require("path")
var friends = require('../data/friends.js')

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  
    app.post("/api/friends", function(req, res) {
     
        var userInput = req.body;
        var userName = userInput.userName;
        var userPhoto = userInput.userPhoto;
        var userScores = userInput.userScores;

        var totalDifference = 0;

        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

        
            for (var j = 0; j < 10; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                if (totalDifference <= bestMatch.friendDifference) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        friends.push(userInput);
        res.json(bestMatch);
    });
   
  };

  