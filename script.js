        /* variables */
        
        const rock = 'rock';
        const paper = 'paper';
        const scissors = 'scissors'
        let roundWinner = ''
        let games = 0;
        let playerScore = 0;
        let computerScore = 0;
        let winner = ''
        
        
        /* functions */
        

        /* computer choice */

        function getComputerChoice() {
            let result = Math.ceil(Math.random()* 3);
            if(result == 1) {
                return rock;
            } else if (result == 2) {
                return paper;
            } else {
                return scissors;
            }
        }

        const computerSelection = getComputerChoice;



        /* one game round */
       
            function playRound(playerSelection,computerSelection) {
                if (playerSelection === rock && computerSelection === rock || playerSelection === paper && computerSelection === paper 
                || playerSelection === scissors && computerSelection === scissors) {
                    games++;
                    roundWinner = 'tie';
                    console.log(`Mamy remis! Komputer wybral ${computerSelection} Player wybral ${playerSelection}`);
                } else {
                    if(playerSelection === rock && computerSelection === scissors) {
                        playerScore++;
                        games++
                        roundWinner = 'player'
                        console.log(`Player wins round | Komputer wybral ${computerSelection} Player wybral ${playerSelection}`)
                    } else if (playerSelection === paper && computerSelection === rock) {
                        playerScore++;
                        games++;
                        roundWinner = 'player'
                        console.log(`Player wins round | Komputer wybral ${computerSelection} Player wybral ${playerSelection}`)
                    } else if (playerSelection === scissors && computerSelection === paper) {
                        playerScore++;
                        games++;
                        roundWinner = 'player'
                        console.log(`Player wins round | Komputer wybral ${computerSelection} Player wybral ${playerSelection}`)
                    } else {
                        computerScore++;
                        games++;
                        roundWinner = 'computer'
                        console.log(`Computer wins round | Komputer wybral ${computerSelection} Player wybral ${playerSelection}`)
                    }
                }
                updateScore(games,playerScore,computerScore,roundWinner);
            }
        
            


       /*   event listener on button   */

        let emojis = document.querySelectorAll('button')

        
        emojis.forEach(button => button.addEventListener('click',logGame));

        function logGame(e) {
            playRound(this.id, computerSelection());
        }



        const result = document.querySelector('.result');
        const emoji = document.querySelector('.emoji');

        const element = document.getElementById('delete');
        
        
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');
        let h1End = document.createElement('h1')
        let playAgain = document.createElement('button')

        h1.setAttribute('style','text-align: center')
        h2.setAttribute('style','text-align: center')
        h1End.setAttribute('style','text-align: center')
        playAgain.setAttribute('style','margin-left: 750x;font-size: 128px;')

        function updateScore(games,playerScore,computerScore, roundWinner) {
            h1.textContent = `Game: ${games} | ${roundWinner.toUpperCase()}`;
            result.appendChild(h1);
            h2.textContent = `Player score: ${playerScore} | Computer score : ${computerScore}`
            result.appendChild(h2);
            if(playerScore >= 5 || computerScore >= 5) {
                result.removeChild(h1);
                result.removeChild(h2);
                if(computerScore>playerScore) {
                    h1End.textContent = `WINNER OF GAME IS COMPUTER. DO YOU WANNA PLAY AGAIN?`;
                    playAgain.textContent = 'PLAY AGAIN';
                    result.appendChild(h1End)
                    result.appendChild(playAgain);
                    element.remove();
                } else if (playerScore>computerScore) {
                    h1End.textContent = `WINNER OF GAME IS PLAYER. DO YOU WANNA PLAY AGAIN?`
                    playAgain.textContent = 'PLAY AGAIN'
                    result.appendChild(h1End);
                    result.appendChild(playAgain);
                    element.remove();
                } else if (playerScore === computerScore) {
                    h1End.textContent = "ITS A TIE. DO YOU WANNA PLAY AGAIN?"
                    playAgain.textContent = 'PLAY AGAIN'
                    result.appendChild(h1End)
                    result.appendChild(playAgain);
                    element.remove();
                } 
            }
        }

        playAgain.onclick = () => location.reload();


    


        
