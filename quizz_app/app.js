const question = [
    {
        ques: "Which is capital of India?",
        answers: [
            {text:"Chennai", correct:false},
            {text:"Hyderabad", correct:false},
            {text:"Delhi", correct:true},
            {text:"Mumbai", correct:false}
        ]
    },
    {
        ques: "Which is capital of Tamilnadu?",
        answers: [
            {text:"Chennai", correct:true},
            {text:"Hyderabad", correct:false},
            {text:"Delhi", correct:false},
            {text:"Mumbai", correct:false}
        ]
    },
    {
        ques: "Which is SAAS capital of India?",
        answers: [
            {text:"Chennai", correct:true},
            {text:"Hyderabad", correct:false},
            {text:"Delhi", correct:false},
            {text:"Mumbai", correct:false}
        ]
    },
    {
        ques: "Who is providing internship for me?",
        answers: [
            {text:"CodesonBytes", correct:true},
            {text:"Codeasy", correct:false},
            {text:"Codeacade", correct:false},
            {text:"Codedelhi", correct:false}
        ]
    },
    {
        ques: "Which complany have Ads generative leads as a software?",
        answers: [
            {text:"Microsoft", correct:false},
            {text:"Google and Meta", correct:true},
            {text:"Stripe", correct:false},
            {text:"Roblox", correct:false}
        ]
    },
    {
        ques: "Who is major shareholder of Google?",
        answers: [
            {text:"Larry Page", correct:false},
            {text:"Nadella Satya", correct:false},
            {text:"Elon Musk", correct:false},
            {text:"Sergery Bin", correct:true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const nextBnt = document.getElementById("sumbtn");

let currentquesindex = 0;
let score = 0;

function startquiz(){
    currentquesindex =0;
    score=0;
    nextBnt.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let curr = question[currentquesindex];
    let quesno = currentquesindex+1;
    questionElement.innerHTML = quesno+". "+ curr.ques;

    curr.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
 function resetState(){
    nextBnt.style.display = "none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
 }

function selectAnswer(e){
    const selection =  e.target;
    const iscorrect = selection.dataset.correct === "true";
    if(iscorrect){
        selection.classList.add("Correct");
        score++;
    }else{
        selection.classList.add("inCorrect")
    }
    Array.from(answerElement.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("Correct");
        }
        button.disabled = true;
    });
    nextBnt.style.display = "block";
}

nextBnt.addEventListener("click", () => {
    if(currentquesindex<question.length){
        handlenextbtn();
    }else{
        startquiz();
    }
});

function showscore(){
    resetState();
    questionElement.innerHTML = `Your Scored ${score} out of ${question.length}!`;
    // let x = 
    nextBnt.innerHTML = "Play Again";
    nextBnt.style.display = "block";
}
function handlenextbtn(){
    currentquesindex++;
    if(currentquesindex< question.length){
        showQuestion();
    }else{
        showscore();
    }
}


startquiz();

