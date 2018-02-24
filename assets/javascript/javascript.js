$(document).ready(function() {
    var question;
    var choices;
    var correctAnswer;
    var image;
    var summary;
    var i = 0;
    var userGuess;
    var isChoiceMade = false;
    var time = 10;
    var intervalId;
    var correctAnswerTotal = 0;
    var incorrectAnswerTotal = 0;
    var unAnsweredTotal = 0;
    var correct = "YOU GUESSED RIGHT!";
    var incorrect = "YOU GUESSED WRONG!";
    var unanswered = "TIME'S UP!";
    var answer = "The correct answer is ";
  
    var tenQuestions = [
     {
      name: "Question One",   
      question: "Who is the king of Westeros when the series begins?",
      choices: ["Jon Snow", "Robert Baratheon", "Joffrey Baratheon", "Daenerys Targaerean" ],
      correctAnswer: 1,
      image:  "<img src='assets/images/RobertBaratheon.gif' class= 'img-responsive'>",
      summary: "Robert Baratheon is King of Westeros in the series premiere. Eddard Stark is Lord of Winterfell. Tywin Lannister is Lord of Westerlands. Aerys Targaryan was king before Robert"
     },
     {
      name: "Question Two",    
      question: "What body part does Jaime Lannister lose?",
      choices: ["Left Hand", "Right Leg", "Right Hand", "Left Foot" ],
      correctAnswer: 2,
      image:  "<img src='assets/images/JaimeLannisterWave.gif' class= 'img-responsive'>",
      summary: `After being captured by men from House Bolton led by a man named Locke, Jaime attempts to bribe them to turn House Lannister. Locke has his men untie Jaime on the pretext of letting him go. But then his men hold Jaime down on a tree stump while Locke grabs a carving knife. He tells Jaime that his father can't help him now, and "this should help you remember!" - as he hacks off Jaime's sword-hand.`
     },
     {
      name: "Question Three",    
      question: "Brienne pledged her alliance to which of these pairs?",
      choices: ["Renly Baratheon and Melisandre", "Sansa Stark and Selwyn Tarth", "Stannis Baratheon and Catelyn Stark", "Catelyn Stark and Renly Baratheon" ],
      correctAnswer: 3,
      image:  "<img src='assets/images/BrienneOfTarth.gif' class= 'img-responsive'>",
      summary: "Brienne of Tarth served in Renly's Kingsguard and deeply loved him. After he was murdered by a shadow with the face of Stannis, Brienne swore to avenge his death, succeeding in this deed. She became Catelyn's sworn sword after being accused of murdering Renly and fleeing the camp."
     },
     {
      name: "Question Four",    
      question: "What is the name of Jon Snow's direwolf?",
      choices: ["Nymeria", "Grey Wind", "Ghost", "Summer" ],
      correctAnswer: 2,
      image:  "<img src='assets/images/DirewolfGhost.gif' class= 'img-responsive'>",
      summary: "Ghost is one of six direwolf pups that are found by the children of House Stark. He is adopted and raised by Jon Snow. Ghost is an albino with white fur and red eyes. Though he was the runt of the litter when he was born, he quickly grew to be as big as the rest of his siblings. Along with Nymeria, he's one of the two direwolves still alive."  
     },
     {
      name: "Question Five",    
      question: 'Who dies at the "Red Wedding"?',
      choices: ["Eddard Stark", "Arya Stark", "Rob Stark", "Sansa Stark" ],
      correctAnswer: 2,
      image:  "<img src='assets/images/RobStarkRedWedding.gif' class= 'img-responsive'>",
      summary: "The Red Wedding was a massacre arranged by Lord Walder Frey as revenge against King Robb Stark for breaking the marriage pact between House Stark and House Frey. Robb, his wife, Queen Talisa, his mother, Lady Catelyn, and most of his men are murdered following the marriage feast of Edmure Tully, Robb's uncle, and Roslin Frey."
     },
     {
      name: "Question Six",    
      question: "Which chemical was used during the Battle of the Blackwater to destroy Stannis Baratheon's fleet?",
      choices: ["Milk of the poppy", "Wildfire", "Essence of Nightshade", "The Strangler" ],
      correctAnswer: 1,
      image:  "<img src='assets/images/Wildfire.gif' class= 'img-responsive'>",
      summary: "Wildfire is a very volatile substance, used by Tyrion Lannister in order to destroy Stannis' fleet when he intended to conquer King's Landing through Blackwater Bay. Milk of the poppy is used as an anesthetic, while Essence of Nightshade has also a medical use but can be fatal. The Strangler is a poison, used to kill King Joffrey during his wedding."
     },
     {
      name: "Question Seven",    
      question: " What is the name of Arya Stark's sword?",
      choices: ["Needle", "Widow's Wail", "Ice", "Longclaw" ],
      correctAnswer: 0,
      image:  "<img src='assets/images/AryaNeedle.gif' class= 'img-responsive'>",
      summary: "Needle is the sword of Arya Stark. Arya is the daughter of Lord Eddard and Lady Catelyn Stark. The sword is a gift from her half-brother Jon Snow. She is trained in sword fighting, and when her father tells her that a little lady shouldn't play with swords, she replies, 'I wasn't playing. And I don't want to be a lady.'"
     },
     {
      name: "Question Eight",    
      question: " Sansa Stark and Tyrion Lannister were suspected of poisoning King Joffrey. Who, however, really did the young monarch in?",
      choices: ["Jaime Lannister", "Jon Snow", "Arya Stark", "Olenna Tyrell " ],
      correctAnswer: 3,
      image:  "<img src='assets/images/OlennaTyrellTellCersei.gif' class= 'img-responsive'>",
      summary: "The 'Queen of Thorns' had no intention of seeing her granddaughter wed to King Robert's illegitimate and sadistic heir."
     },
     {
      name: "Question Nine",    
      question: "Which House is extinct at the time Cersei Lannister becomes Queen of Westeros?",
      choices: ["Stark", "Baratheon", "Tully", "Tyrell" ],
      correctAnswer: 1,
      image:  "<img src='assets/images/TommenJump.gif' class= 'img-responsive'>",
      summary: "Following the destruction of the Great Sept of Baelor, King Tommen Baratheon commits suicide after acknowledging the death of his wife, amongst others. He was the last living person bearing the surname Baratheon, and his death extinguished House Baratheon."
     },
     {
      name: "Question Ten",    
      question: "Daenerys Targaryen has three children. These 'children' are actually what?",
      choices: ["Unicorns", "Reindeer", "Chupacabras", "Dragons" ],
      correctAnswer: 3,
      image:  "<img src='assets/images/Dragons.gif' class= 'img-responsive'>",
      summary: "Daenerys, who feels she has a rightful claim to the Iron Throne, is given three dragon eggs as a wedding gift. When her husband Kahl Drago dies, she puts his body on a funeral pyre. Daenerys, who has the supernatural ability to withstand heat, walks into the fire with the eggs and uses the heat to hatch them. These dragons are the first to come into the world in over a century."
     }
    ];
  
    var gameName;
    var gameQuestion;
    var gameChoices;
    var choiceOne;
    var choiceTwo;
    var choiceThree;
    var choiceFour;
    var gameAnswer;
    var answerImage;
    var answerSummary;
  
    var resultDisplay = $(".resultDisplay");
    var answerDisplay = $(".answerDisplay");
    var gameDisplay = $(".gameDisplay");
    var timer = $(".timer");
    var message = $(".message");
    var questionDisplay = $(".questionDisplay");
  
  
    //  ******* TIMER *******  //
    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    // DISPLAYS AND DECREASES THE TIMER AND SETS UP WHAT HAPPENS IF YOU DON;T ANSWER IN TIME
    function decrement() {
      time--;
      timer.html("<h2>Time Remaining: " + time + "</h2>");
  
      if (time === 0 && isChoiceMade === false) {
        unAnsweredTotal++;
        message.text(unanswered);
        questionDisplay.text(answer + gameAnswer);
        answerReveal();
      };
    }
  
    // STOPS THE TIMER
    function stop() {
      time = 10;
      clearInterval(intervalId);
    }
  
    // STARTS THE TIMER TO CHANGE QUESTIONS
    function nextQuestionTimer() {
      setTimeout(nextQuestion, 1000 * 7);
    }
  
    // SETS THE NEXT QUESTION OR ENDS THE GAME WHEN ALL QUESTIONS ARE ASKED
    function nextQuestion() {
      if (i <= 9) {
        questionReveal();
      
      } else {
        message.text("Winter is Here...");
        questionDisplay.html("<h2>" + "Here are your results" + "</h2>");
        answerDisplay.hide();
        $("#correctTotal").text("CORRECT: " + correctAnswerTotal);
        $("#incorrectTotal").text("INCORRECT: " + incorrectAnswerTotal);
        $("#unAnsweredTotal").text("UNANSWERED: " + unAnsweredTotal);
        resultDisplay.show();
        reset();
      };
    }
  
    // HIDES THE TIMER AND GAME DISPLAY AND SHOWS THE ANSWER. THEN SETS THE TIMER FOR THE NEXT QUESTION.
    function answerReveal() {
      stop();
      timer.hide();
      gameDisplay.hide();
      message.show();
      answerDisplay.show();
      if (isChoiceMade) return;
      isChoiceMade = true;
      i++;
      nextQuestionTimer();
    }
  
    // RESETS THE DISPLAY TO SHOW THE 
    function questionReveal() {
      message.hide();
      answerDisplay.hide();
      timer.show();
      gamePlay(i);
    }
  
    // SETS THE RESET BUTTON VALUES
    function reset() {
      $("#resetButton").click(function(){
      resultDisplay.hide();
      correctAnswerTotal = 0;
      incorrectAnswerTotal = 0;
      unAnsweredTotal = 0;
      i = 0;
      questionReveal();
      });
    }
  
    function gamePlay(i) {
      gameName = tenQuestions[i].name;
      gameQuestion = tenQuestions[i].question;
      gameChoices = tenQuestions[i].choices;
      gameAnswer = gameChoices[tenQuestions[i].correctAnswer];
      answerImage = tenQuestions[i].image;
      answerSummary = tenQuestions[i].summary;
      choiceOne = gameChoices[0];
      choiceTwo = gameChoices[1];
      choiceThree = gameChoices[2];
      choiceFour = gameChoices[3];
  
      timer.html("<h2>Time Remaining: " + time + "</h2>");
      questionDisplay.text(gameQuestion);
      $("#choiceOne").text(choiceOne);
      $("#choiceTwo").text(choiceTwo);
      $("#choiceThree").text(choiceThree);
      $("#choiceFour").text(choiceFour);
      $("#answerInfo").text(answerSummary);
      $("#imageHolder").html(answerImage);
  
      userGuess = "";
      isChoiceMade = false;
      gameDisplay.show();
      run();
    }; 
  
      $(".choiceButton").on("click", function(event) {
          userGuess = event.currentTarget.id;
          questionDisplay.text(answer + gameAnswer);
          
          if (userGuess === "choiceOne" && choiceOne === gameAnswer) {
            message.text(correct);
            correctAnswerTotal++;
            answerReveal();
  
          } else if (userGuess === "choiceTwo" && choiceTwo === gameAnswer) {
            message.text(correct);
            correctAnswerTotal++;
            answerReveal();
          
          } else if (userGuess === "choiceThree" && choiceThree === gameAnswer) {
            message.text(correct);
            correctAnswerTotal++;
            answerReveal(); 
          
          } else if (userGuess === "choiceFour" && choiceFour === gameAnswer) {
            message.text(correct);
            correctAnswerTotal++;
            answerReveal();
  
          } else {
            message.text(incorrect);
            incorrectAnswerTotal++;
            answerReveal();
          };
      });
  
  //  ******* INITIALIZE GAME ******* //
        
      //Hides the different display pages 
      gameDisplay.hide();
      resultDisplay.hide();
      message.hide();
      answerDisplay.hide();
      timer.html("<h2>" + "Winter is coming..." + "</h2>");
      
      // What happens when you press the start button
      $("#startButton").click(function(){
        $("#startButton").hide();
        gamePlay(i);
      });
  
  });