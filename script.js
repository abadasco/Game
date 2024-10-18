let randomNumber = Math.floor(Math.random() * 100) + 1;
        let guessesLeft = 10;

        const guessField = document.getElementById('guessField');
        const submitGuess = document.getElementById('submitGuess');
        const status = document.getElementById('status');
        const remainingGuesses = document.getElementById('remainingGuesses');

        submitGuess.addEventListener('click', function () {
            let userGuess = Number(guessField.value);

            if (userGuess < 1 || userGuess > 100) {
                status.textContent = "Te rog introdu un număr între 1 și 100.";
                status.classList.remove('win', 'lose');
                return;
            }

            guessesLeft--;

            if (userGuess === randomNumber) {
                status.textContent = "Felicitări! Ai ghicit numărul corect!";
                status.classList.add('win');
                submitGuess.disabled = true;
                guessField.disabled = true;
            } else if (guessesLeft === 0) {
                status.textContent = `Ai pierdut! Numărul corect era ${randomNumber}.`;
                status.classList.add('lose');
                submitGuess.disabled = true;
                guessField.disabled = true;
            } else {
                if (userGuess < randomNumber) {
                    status.textContent = "Numărul este prea mic!";
                } else {
                    status.textContent = "Numărul este prea mare!";
                }
                status.classList.remove('win', 'lose');
                remainingGuesses.textContent = `Încercări rămase: ${guessesLeft}`;
            }
        });