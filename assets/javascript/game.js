var wins = 0;
    var lose = 0;
    var guessCount = 5;
    var guessChoices = [];
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"]

    document.onkeyup = function(event) {

        var userGuess = event.key;

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n" ,"o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"]

        if(computerOptions.indexOf(userGuess) > -1){
            if (userGuess === computerGuess){
                wins++;
                document.getElementById("wins").innerHTML = " Wins: " + wins;
                guessCount = 5;
                guessChoices = [];
            }

            if (userGuess != computerGuess){
                guessCount --;
                document.getElementById("guessesLeft").innerHTML = " Guesses Left: " + guessCount;
                guessChoices.push(userGuess);
                document.getElementById("guessesSF").innerHTML = " Guesses So Far: " + guessChoices;
                
            }

            if (guessCount === 0) {
                guessCount = 5;
                lose ++;
                document.getElementById("losses").innerHTML = " Losses: " + lose;
                guessChoices = [];
                
            }


			}

        };