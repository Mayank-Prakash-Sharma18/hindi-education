// JS Code for Quiz. Sources: https://codeactually.com/interactivequiz.html; https://stackoverflow.com/questions/14709617/how-do-i-get-the-label-of-the-selected-radio-button-using-javascript

let result = 0, result2 = 0, correct = 0, incorrect = 0;

// creating the new div tags for tick and cross icons (will be added when a student chooses correct/incorrect options)
let tickIconTag = '<span class="icon tick">&nbsp &nbsp<i class="fas fa-check"></i></span>';
let crossIconTag = '<span class="icon cross">&nbsp &nbsp<i class="fas fa-times"></i></span>';

// On clicking the Submit button of the Quiz. Get the value of the selected radio buttons, and add them to get the result. The value of the default checked radio button in HTML code is 0 (it's invisible to user). 
// We also increment the correct and incorrect counters here. 
document.getElementById("makquiz").onsubmit=function() {
    document.getElementById('submitButtonId').disabled = true; //Disables the Submit button once it is clicked by the user, or once it's submitted automatically on completion of time. 

    quiz_q1 = parseInt(document.querySelector('input[name = "quiz_q1"]:checked').value);
    if (quiz_q1 == 20) 
      { 
        var questionId = document.querySelector('input[name = "quiz_q1"]:checked').id; //id of label is the same as the id of its radio button. So, we can use it to our advantage. 
        var labelId = 'label[for=' + questionId + ']'; //Construct the label id of the selected radio button. You can see this in HTML code
        var label = document.querySelector(labelId); //Get the reference of the selected label
        label.classList.add('correct'); //adding green color to correct selected option
        label.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        correct++ ;
    } 
    else if (quiz_q1 == -5) 
      { 
        var questionId = document.querySelector('input[name = "quiz_q1"]:checked').id; //id of label is the same as the id of its radio button. So, we can use it to our advantage. 
        var labelId = 'label[for=' + questionId + ']'; //Construct the label id of the selected radio button. You can see this in HTML code
        var label = document.querySelector(labelId); //Get the reference of the selected label
        label.classList.add("incorrect"); //adding red color to correct selected option
        label.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        incorrect++ ;
    }

    quiz_q2 = parseInt(document.querySelector('input[name = "quiz_q2"]:checked').value);
    if (quiz_q2 == 20) {
        var questionId = document.querySelector('input[name = "quiz_q2"]:checked').id;  
        var labelId = 'label[for=' + questionId + ']';
        var label = document.querySelector(labelId);
        label.classList.add('correct'); //adding green color to correct selected option
        label.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        correct++ ;
    } 
        
    else if (quiz_q2 == -5) {
        var questionId = document.querySelector('input[name = "quiz_q2"]:checked').id;  
        var labelId = 'label[for=' + questionId + ']';
        var label = document.querySelector(labelId);
        label.classList.add("incorrect"); //adding red color to correct selected option
        label.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        incorrect++ ;
    }

    quiz_q3 = parseInt(document.querySelector('input[name = "quiz_q3"]:checked').value);
    if (quiz_q3 == 20) {
        var questionId = document.querySelector('input[name = "quiz_q3"]:checked').id;  
        var labelId = 'label[for=' + questionId + ']';
        var label = document.querySelector(labelId);
        label.classList.add('correct'); //adding green color to correct selected option
        label.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        correct++ ;
    } 
    
    else if (quiz_q3 == -5) {
        var questionId = document.querySelector('input[name = "quiz_q3"]:checked').id;  
        var labelId = 'label[for=' + questionId + ']';
        var label = document.querySelector(labelId);
        label.classList.add("incorrect"); //adding red color to correct selected option
        label.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        incorrect++ ;
    }

    quiz_q4 = parseInt(document.querySelector('input[name = "quiz_q4"]:checked').value);
    if (quiz_q4 == 20) {
        var questionId = document.querySelector('input[name = "quiz_q4"]:checked').id;  
        var labelId = 'label[for=' + questionId + ']';
        var label = document.querySelector(labelId);
        label.classList.add('correct'); //adding green color to correct selected option
        label.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        correct++ ;
    } 
    else if (quiz_q4 == -5) {
        var questionId = document.querySelector('input[name = "quiz_q4"]:checked').id;  
        var labelId = 'label[for=' + questionId + ']';
        var label = document.querySelector(labelId);
        label.classList.add("incorrect"); //adding red color to correct selected option
        label.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        incorrect++ ;
    }

    quiz_q5 = parseInt(document.querySelector('input[name = "quiz_q5"]:checked').value);
    if (quiz_q5 == 20) {
        var questionId = document.querySelector('input[name = "quiz_q5"]:checked').id;  
        var labelId = 'label[for=' + questionId + ']';
        var label = document.querySelector(labelId);
        label.classList.add('correct'); //adding green color to correct selected option
        label.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        correct++ ;
    } 
    else if (quiz_q5 == -5) {
        var questionId = document.querySelector('input[name = "quiz_q5"]:checked').id;  
        var labelId = 'label[for=' + questionId + ']';
        var label = document.querySelector(labelId);
        label.classList.add("incorrect"); //adding red color to correct selected option
        label.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        incorrect++ ;
    }

    result = quiz_q1 + quiz_q2 + quiz_q3 + quiz_q4 + quiz_q5;

    // Publish Marks
    document.getElementById("quiz-marks").innerHTML = result;

    // Publish Number of Correct and Incorrect answers
    document.getElementById("quiz-correct-qs").innerHTML = correct;
    document.getElementById("quiz-incorrect-qs").innerHTML = incorrect;
    document.getElementById("quiz-unattempted-qs").innerHTML = 5 - (correct + incorrect);

    // To show comments without an image. Not used, as I am using teh version where Image is shown. 
    //  if (result == 0) {result2 = "I don't think you studied."};
    //  if (result == 25) {result2 = "You need to spend more time. Try again."};
    //  if (result == 50) {result2 = "I think you could do better. Try again."};
    //  if (result == 75) {result2 = "So close. Try again."};
    //  if (result == 100) {result2 = "Excellent! You're a JavaScript pro!"};
    //  document.getElementById("quiz-comment").innerHTML = result2; 

    // To show comments with an image
    if (result <= 0) {result2 = "मुझे नहीं लगता कि आपने पढ़ा है प्रिय।<br /><img src='../../../css/quiz-smiley-0.png' width='99%' />"};
    if (result > 0 && result <= 20) {result2 = "आपको पढ़ाई में और अधिक समय बिताने की आवश्यकता है। पुनः प्रयास करें।<br /><img src='../../../css/quiz-smiley-2.png' width='99%' />"};
    if (result > 20 && result <= 40) {result2 = "हमें लगता है कि आप बेहतर कर सकते हैं। पुनः प्रयास करें।<br /><img src='../../../css/quiz-smiley-4.png' width='99%' />"};
    if (result > 40 && result <= 60) {result2 = "आप सफलता के करीब हैं। पुनः प्रयास करें।<br /><img src='../../../css/quiz-smiley-6.png' width='99%' />"};
    if (result > 60 && result <= 80) {result2 = "आपने अच्छा किया! लेकिन सुधार की गुंजाइश है।<br /><img src='../../../css/quiz-smiley-8.png' width='99%' />"};
    if (result > 80 && result <= 100) {result2 = "आप एक प्रतिभावान छात्र हैं!<br /><img src='../../../css/quiz-smiley-10.png' width='99%' />"};

    document.getElementById("quiz-comment").innerHTML = result2; 

    // Show the Explanations (Once Submit button is clicked). Source: https://html-shark.com/HTML/ShowHideSections.htm; https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
    let v = document.getElementById("quiz-exp1");
    let w = document.getElementById("quiz-exp2");
    let x = document.getElementById("quiz-exp3");
    let y = document.getElementById("quiz-exp4");
    let z = document.getElementById("quiz-exp5");
    v.style.display = "block";
    w.style.display = "block";
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "block";

    return false; // required to not refresh the page, once the form is submitted; just leave this here
} //this ends the submit function


/*Timer JS Code. Source: https://stackoverflow.com/questions/35361637/how-to-add-5-minute-javascript-countdown-timer-which-submit-a-form*/

// var seconds = 15; In original code the value of seconds was hardcoded in JS file. I shifted it to HTML. 

var seconds = document.getElementById("quiz-time").innerText; //Get number of seconds inserted in HTML span element by me.

var submitButton = document.getElementById("submitButtonId");

function secondPassed(countdownTimer) {
    var minutes = Math.round((seconds - 30)/60),
        remainingSeconds = seconds % 60;

    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }

    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
       //Click the Submit button of the Form
       submitButtonId.click();
    } else {
        seconds--;
    }
}

// This function is called when a user clicks the Start Timer button. 
function startTimer() {
    document.getElementById('timerButton').style.display = 'none';

    var countdownTimer = setInterval('secondPassed()', 1000, countdownTimer); //Calls secondPassed() function every 1 second
}

