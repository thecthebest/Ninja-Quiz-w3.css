        // Array that stores the correct answers
        const correctAnswers = ["B", "B", "B", "B"];
        // Handle to form element
        const form = document.querySelector("form");
        // Handle to display score result
        const scoreDisplay = document.querySelector(".score");
        // Added eventlistener to listen for submit action
        form.addEventListener("submit", (e)=>{
            // Stop browers from refreshing when submit is pressed
            e.preventDefault();
            // Declare and initailse
            let userScore = 0;
            // Declare and initailse
            let totalScore = 0;
            // Timer to animate the result
            let output = 0;
            // This array stores user answers 
            userScore = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
            // Foreach method to compare the users answers with the correct anwers
            userScore.forEach((userSelection, index) => {
                // Every correct answer increment by 25
                if (userSelection === correctAnswers[index]) {
                    totalScore += 25;
                }
            });
            // Scroll to the top using window Object
            scrollTo(0,0);
            const timer = setInterval(() => {
              // Show Result into Span
              scoreDisplay.textContent = `${output}%`;
              if (output === totalScore) {
                clearInterval(timer);
              }
              else {
                output++;
              }
           }, 10);
          // Remove hidden class
          scoreDisplay.classList.remove("w3-hide");
          // Timer for result animation
          console.log(totalScore);
        });