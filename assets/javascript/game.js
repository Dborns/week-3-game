var wins = 0;
        var losses = 0;
        var totalLives = 9;
        var lives = 9;
        var guesses =[];
        var html = '';
        
        var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];  
        
        document.onkeypress = function(event) 
        {
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            
            var indexFound = computerChoices.indexOf(userGuess);
            if(indexFound >= 0)
            {
                
                var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                        
                if( userGuess == computerGuess )
                {
                    wins++;
                    lives = totalLives;
                    guesses = [];
                    html = "<p>wins : " +  wins + "</p>" + "<p>losses : " + 
                        losses + "</p>" + "<p>Guesses Left : " + 
                        lives + "</p>" + "<p>Your Guesses so far : " + 
                        guesses + "</p>";
                }
                else
                {
                    if(lives > 1)
                    {
                        lives--;
                        guesses.push(userGuess);
                        
                        html = "<p>wins : " +  wins + "</p>" + "<p>losses : " + 
                            losses + "</p>" + "<p>Guesses Left : " + 
                            lives + "</p>" + "<p>Your Guesses so far : " + 
                            guesses + "</p>";
                    }
                    else
                    {
                        lives = totalLives;
                        losses++;
                        guesses = [];
                        
                        html = "<p>wins : " +  wins + "</p>" + "<p>losses : " + 
                            losses + "</p>" + "<p>Guesses Left : " + 
                            lives + "</p>" + "<p>Your Guesses so far : " + 
                            guesses + "</p>";
                    }
                }
                
                document.querySelector('#game').innerHTML = html;
            }
        }
        function GetLives()
        {
            return "<p>Guesses Left : " + String(lives) + "</p>";
        }
