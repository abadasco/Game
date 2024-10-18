let randomNumber = Math.floor(Math.random() * 100) + 1;
        let guessesLeft = 10;

        const guessField = document.getElementById('guessField');
        const submitGuess = document.getElementById('submitGuess');
        const status = document.getElementById('status');
        const remainingGuesses = document.getElementById('remainingGuesses');

        submitGuess.addEventListener('click', function () {
            let userGuess = Number(guessField.value);

            if (userGuess < 1 || userGuess > 100) {
                status.textContent = "Please enter a number between 1 and 100.";
                status.classList.remove('win', 'lose');
                return;
            }

            guessesLeft--;

            if (userGuess === randomNumber) {
                status.textContent = "Congratulations! You guessed the number right!";
                status.classList.add('win');
                submitGuess.disabled = true;
                guessField.disabled = true;
            } else if (guessesLeft === 0) {
                status.textContent = `You lost! The correct number was ${randomNumber}.`;
                status.classList.add('lose');
                submitGuess.disabled = true;
                guessField.disabled = true;
            } else {
                if (userGuess < randomNumber) {
                    status.textContent = "The number is too small!";
                } else {
                    status.textContent = "The number is too high!";
                }
                status.classList.remove('win', 'lose');
                remainingGuesses.textContent = `Remaining attempts: ${guessesLeft}`;
            }
        });
