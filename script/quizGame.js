alert(" You be assessed in a simple JavaScript Quiz game. \n When prompted questions please either choose 'T' for True or 'F' for False. \n Press OK to start");

let correctAnswer = [];
let preAnswers = ["F","T","T","F","T","F","F","T"];

let q1 = prompt("JavaScript is primarily used for styling your webpage.");
let q2 = prompt("JavaScript was inveted by Brendon Eich.");
let q3 = prompt("JavaScript was invented in 1995.");
let q4 = prompt("JavaScript was originally developed for the Mozilla Firefox browser.");
let q5 = prompt("It is recommended to rather use the LET or CONST keywords for declaring variables and no longer the VAR keyword.");
let q6 = prompt("JavaScript became the ECMA-262 standard in 2001.");
let q7 = prompt("JavaScript and Java are the same programming language.");
let q8 = prompt("JavaScript is primarily used as a scripting programming language.");

if(q1 === "F" || q1 === 'f'){
    correctAnswer.push(preAnswers[0]);
};

if(q2 === "T" || q2 === 't'){
    correctAnswer.push(preAnswers[1]);
};

if(q3 === "T" || q3 === 't'){
    correctAnswer.push(preAnswers[2]);
};

if(q4 === "F" || q4 === 'f'){
    correctAnswer.push(preAnswers[3]);
};

if(q5 === "T" || q5 === 't'){
    correctAnswer.push(preAnswers[4]);
};

if(q6 === "F" || q6 === 'f'){
    correctAnswer.push(preAnswers[5]);
};

if(q7 === "F" || q7 === 'f'){
    correctAnswer.push(preAnswers[6]);
};

if(q8 === "T" || q8 === 't'){
    correctAnswer.push(preAnswers[7]);
};

let answers = correctAnswer;
console.log(answers);

document.getElementById("result").innerHTML = correctAnswer.length + "/8";