$(document).ready(function() {

    var questions = ["H.P. Lovecraft is credited for creating this grimoire.",
     "What is the name of the university referred to in H.P. Lovecraft's Stories?",
      "This Outer God was primarily responsible for the Dunwich Horror.",
       "Which story by H.P. Lovecraft features an 18th-century necromancer and mass murderer named Joseph Curwen revivified by his descendant (who then is promptly murdered and impersonated by his long-dead anscestor)?",
        "This Story ends with the narrator going mad at the realization that he is related to and slowly becoming an inbred of human and Old Gods known as The Deep Ones.",
         "This story follows Inspector Legrasse on his investigation of an odd sculpture, a painter and cults across the globe.",
          "H.P. Lovecraft designated this mad-man as the author of The Necronomicon."];

    var answers = [["Key of Solomon", "Necronomicon", "Codex Gigas", "Pseudomonarchia Daemonum"],
     ["Arkham University", "Boston University", "Miskatonic University", "Innsmouth University"],
      ["Azatoth", "Dagon", "Yog-Sothoth", "Nyarlathotep"],
       ["At the Mountains of Madness", "The Curious Case of Charles Dexter Ward", "The Lurking Fear", "The Horror at Red Hook"],
        ["The Mound", "The Call of Cthulhu", "The Shadow Over Innsmouth", "The Shadow out of Time"],
         ["The Dreams in the Witch House", "The Thing on the Doorstep", "The Dream-Quest of Unkown Kadath", "The Call of Cthulhu"],
          ["Abdul Alhazred", "Aleister Crowley", "Johann Weyer", "Zadok Allen"]];

    var answersCorrect = ["Necronomicon",
     "Miskatonic University",
      "Yog-Sothoth",
       "The Curious Case of Charles Dexter Ward",
        "The Shadow Over Innsmouth",
         "The Call of Cthulhu",
          "Abdul Alhazred"];

    var correctInfo = ["Correct. <br><br> The Necronomicon was a facet of horror created by H.P. Lovecraft, the other grimoires are REAL. <br><br> 'That is not dead which can eternal lie, and with strange aeons even death may die'",
     "Correct. <br><br> Miskatonic University also has a massive library of Occultism. <br><br> 'Ex Ignorantia Ad Sapientiam; Ex Luce Ad Tenebras (Out of ignorance into wisdom, Out of light into darkness)'",
      "Correct. <br><br> As a massive pile of eyeball and tendrils with Wilbur Whateley's face, the kin of Yog-Sothoth tore through Dunwich. <br><br> 'Bigger’n a barn . . . all made o’ squirmin’ ropes . . . hull thing sort o’ shaped like a hen’s egg bigger’n anything, with dozens o’ legs like hogsheads that haff shut up when they step . . . nothin’ solid abaout it—all like jelly, an’ made o’ sep’rit wrigglin’ ropes pushed clost together . . . great bulgin’ eyes all over it . . . ten or twenty maouths or trunks a-stickin’ aout all along the sides, big as stovepipes, an’ all a-tossin’ an’ openin’ an’ shuttin’ . . . all grey, with kinder blue or purple rings . . . an’ Gawd in heaven—that haff face on top! . . .'",
       "Correct. <br><br> The Curious Case of Charles Dexter Ward is a great lesson to not dabble in the Occult. <br><br> 'Do not call up that which you cannot put down.'",
        "Correct. <br><br> The unnamed narrator learns of his true fate as a Deep One and accepts himself into the madness. <br><br> 'Where does madness leave off and reality begin?'",
         "Correct. <br><br> Inspector Legrasse stumbled upon a connection between the nightmares of artists and various cults all over the world, the only connection: Cthulhu, an Old One only capable of speaking to humans in dreams. <br><br> 'We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far.'",
          "Correct. <br><br> Often referred to as 'The Mad Arab Abdul Alhazred' this man authored the fictional Necronomicon in 730 A.D. <br><br> 'Of his final death or disappearance many terrible and conflicting things are told. He is said by Ibn Khallikan to have been seized by an invisible monster in broad daylight and devoured horribly before a large number of fright-frozen witnesses. Of his madness many things are told. He claimed to have seen fabulous Irem, or City of Pillars, and to have found beneath the ruins of a certain nameless desert town the shocking annals and secrets of a race older than mankind. He was only an indifferent Moslem, worshipping unknown entities whom he called Yog-Sothoth and Cthulhu.'"];

    var incorrectInfo = ["Incorrect. <br><br> The correct answer is Necronomicon",
     "Incorrect. <br><br> The correct answer is Miskatonic University",
      "Incorrect. <br><br> The correct answer is Yog-Sothoth.",
       "Incorrect. <br><br> The correct answer is The Curious Case of Charles Dexter Ward.",
        "Incorrect. <br><br> The correct answer is The Shadow Over Innsmouth.",
         "Incorrect. <br><br> The correct answer is The Call of Cthulhu.",
          "Incorrect. <br><br> The correct answer is Abdul Alhazred."];

    var correctImage = ["<img src='https://i.pinimg.com/originals/2c/dc/cb/2cdccb79a3737cf43b2a508ca8c0286a.jpg' height='300px' width='200px'>",
     "<img src='https://cdn11.bigcommerce.com/s-v4eyu8t/images/stencil/1024x1024/products/1545/2043/Miskatonic_University_1__69083.1425055308.jpg?c=2' height='300px' width='300px'>",
      "<img src='https://i.ytimg.com/vi/SmZP0VSENCA/maxresdefault.jpg' height='300px' width='400px'>",
       "<img src='https://vignette.wikia.nocookie.net/vsbattles/images/d/de/Necro.jpeg/revision/latest?cb=20150808154125' height='300px' width='400px'>",
        "<img src='https://vignette.wikia.nocookie.net/creepypasta/images/1/1f/Deep_Ones_%26_Dagon.jpeg/revision/latest?cb=20180216221508' height='300px' width='400px'>",
         "<img src='https://i.pinimg.com/originals/f3/54/e1/f354e15aa87f7f9dec4c3a5888ed7a34.jpg' height='300px' width='300px'>",
          "<img src='https://i.pinimg.com/originals/8f/af/80/8faf809c927327890fb282db5dd4e3af.jpg' height='300px' width='200px'>"];

    var incorrectImage = ["<img src='https://c1.staticflickr.com/2/1023/525523742_fb2f53968c.jpg' height='300px' width='300px'>",
     "<img src='http://www.cardgamedb.com/forums/uploads/83652ced9d642fbb07d009ac0322780c.jpg' height='300px' width='400px'>",
      "<img src='https://i.imgur.com/ySnWy.jpg' height='300px' width='300px'>",
       "<img src='http://lolthulhu.com/wp-content/uploads/2007/06/internet-o_rlyeh_2.jpg' height='300px' width='250px'>",
        "<img src='https://c1.staticflickr.com/2/1023/525523742_fb2f53968c.jpg' height='300px' width='300px'>",
         "<img src='http://www.cardgamedb.com/forums/uploads/83652ced9d642fbb07d009ac0322780c.jpg' height='300px' width='400px'>",
          "<img src='https://shirleytwofeathers.com/The_Blog/memecity/wp-content/uploads/sites/15/2016/10/orlyeh2ra-475x578.jpg' height='300px' width='250px'>"];

    var outOfTimeInfo = ["You ran out of time. <br> The correct answer is The Necronomicon.",
     "You ran out of time. <br><br> The correct answer is Miskatonic University.",
      "You ran out of time. <br><br> The correct answer is Yog-Sothoth.",
       "You ran out of time. <br><br> The correct answer is The Curious Case of Charles Dexter Ward.",
        "You ran out of time. <br><br> The correct answer is The Shadow over Innsmouth.",
         "You ran out of time. <br><br> The correct answer is The Call of Cthulhu.",
          "You ran out of time. <br><br> The correct answer is Abdul Alhazred."]
          
          var questionCounter = 0;
          var count = 30;
          var intervalId;
          var correct = 0;
          var incorrect = 0;
          var unanswered = 0;
          var gameHTML = $(".questionBox");
      
          
          $(".button").click(function () {
              $(".button").hide();
              countDown();
              startGame();        
          });
      
          
          $("body").on("click", ".answer", function (event) {
      
              selectedAnswer = $(this).text();
              
              if (selectedAnswer === answersCorrect[questionCounter]) {
      
                  correctChoice();
                  
              }
              
              else {
      
                  
                  incorrectChoice();
                  
              }
          });
      
          function countDown() {
              clearInterval(intervalId);
              intervalId = setInterval(decrement, 1000);
          }
      
          function decrement() {
              count--
      
              $("#timer").html(count);
      
              if (count === 0) {
      
                  clearInterval(intervalId);
      
                  outOfTime();
              }
          }
      
          
          function correctChoice() {
              
              correct++
              $(gameHTML).hide();
              $(".answerBox").show();
              $("#message").html(correctInfo[questionCounter]);
              $("#image").html(correctImage[questionCounter]);
              setTimeout(wait, 10000);
          }
      
        
          function incorrectChoice() {
              
              incorrect++
              $(gameHTML).hide();
              $(".answerBox").show();
              $("#message").html(incorrectInfo[questionCounter]);
              $("#image").html(incorrectImage[questionCounter]);
              setTimeout(wait, 10000);
          }
      
        
          function wait() {
      
              
              if (questionCounter < 6) {
                  questionCounter++;
      
                  
                  $(".answerBox").hide();
      
                  clearInterval(intervalId);
                  count = 30;
      
                  countDown();
                  startGame();
      
              } else {
                  
                  clearInterval(intervalId);
      
                  finalScreen();
              }
          }
      
          function finalScreen() {
      
              $(".answerBox").hide();
      
              $(".finalScreen").show();
      
              $("#stats").html("Game Over!");
              $("#correct").html("Correct Answers: " + correct + "<br>");
              $("#incorrect").html("Incorrect Answers: " + incorrect + "<br>");
              $("#unanswered").html("Unanswered Questions: " + unanswered + "<br>");
              $(".restart").show();
      
              
              $(".restart").click(function () {
      
                  $(".restart").hide();
      
                  $(".finalScreen").hide();
      
                  clearInterval(timer);
                  count = 30;
                  correct = 0;
                  incorrect = 0;
                  unanswered = 0;
                  questionCounter = 0;
      
                  countDown();
                  startGame();
              });
          }
      
          
          function startGame() {
      
              
              $(gameHTML).show();
      
              $("#timer").html(count);
      
              $("#question").html(questions[questionCounter]);
              $("#answerOne").html(answers[questionCounter][0]);
              $("#answerTwo").html(answers[questionCounter][1]);
              $("#answerThree").html(answers[questionCounter][2]);
              $("#answerFour").html(answers[questionCounter][3]);
          }
      
          
          function outOfTime() {
             
              unanswered++
      
              
              $(gameHTML).hide();
      
              
              $(".answerBox").show();
      
              
              $("#message").html(outOfTimeInfo[questionCounter]);
      
              
              $("#image").html(incorrectImage[questionCounter]);
      
              
              setTimeout(wait, 10000);
          }
});