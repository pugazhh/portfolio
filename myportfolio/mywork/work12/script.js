let wrapper = document.querySelector(".wrapper");
let start_Quiz = document.querySelector(".start-quiz")
let displayContainer = document.getElementById("display-container");
let countOfQuestion = document.getElementById("no-of-question");
let scoreContainer = document.getElementById("score-container");
let userScore = document.getElementById("user-score");
let timeLeft = document.getElementById("time-left");
let restart = document.getElementById("restart");



let questionCount;
let scoreCount;
let count = 11;
let countdown;
let quizData = [
    {
        Id:"0",
        question:"what is processed by the computer into information",
        options:["Alphabets","Pictures","Numbers","Data"],
        correct:"Data"
    },
    {
        Id:"1",
        question:"Holding the mouse button down while moving an object of text is known as",
        options:["Highlighting","Dropping","Moving","Dragging"],
        correct:"Dragging"
    },
    {
        Id:"2",
        question:"The time a device takes to locate data and instructions and make them available to CPU is known as",
        options:["A processing cycle","Clock speed","Access time","CPU speed"],
        correct:"A processing cycle"
    },
    {
        Id:"3",
        question:"The CPU also called the ____ when talking about PCs does the vast majority of the processing for a computer.",
        options:["Macro processor","Memory system","RAM","Microprocessor"],
        correct:"Microprocessor"
    },
    {
        Id:"4",
        question:"The term  ______ refers to any computer component that is required to perform work.",
        options:["Resource","Source code","Kernel","Bootstrap"],
        correct:"Resource"
    }
]

replay = () => {
    start_Quiz.classList.remove("hide");
    restart.style.display="none"
    clearInterval()
}

exit = () => {
    start_Quiz.classList.remove("hide")
    wrapper.classList.add("hide");

}

startQuiz = () => {
    console.log(wrapper);
    wrapper.classList.remove("hide");
    start_Quiz.classList.add("hide");
    initial();
}

initial = () => {
    displayContainer.innerHTML="";
    questionCount = 0;
    scoreCount = 0;
    clearInterval(countdown);
    count = 11;
    timerDisplay();
    quizCreate();
    quizDisplay(questionCount)
}

quizDisplay = (questionCount) => {
    let quizcards = document.querySelectorAll(".container_mid");

    quizcards.forEach((card) => {
        card.classList.add("hide");
    });
    quizcards[questionCount].classList.remove("hide");
}

timerDisplay = () => {
    countdown = setInterval(() => {
		count--;
		timeLeft.innerHTML = `${count}s`;
		if (count == 0) {
			//when countdown reaches 0 clearInterval and go to next question
			clearInterval(countdown);
			nextQuiz();
		}
	}, 1000);
}

quizCreate = () => {
    for ( let i of quizData) {
        let div = document.createElement("div");
        div.classList.add("container_mid" , "hide")
        countOfQuestion.innerHTML=1 + " of " + quizData.length +" Question";
        
        div.innerHTML = `
        <p class="question">${i.question}</p> 
<button class="option-div" onclick=checker(this)>${i.options[0]}</button>
<button class="option-div" onclick=checker(this)>${i.options[1]}</button>
<button class="option-div" onclick=checker(this)>${i.options[2]}</button>
<button class="option-div" onclick=checker(this)>${i.options[3]}</button>
`;
		displayContainer.appendChild(div);
    }

}

nextQuiz = () =>{
    questionCount += 1;
    //if last question
    if (questionCount == quizData.length) {
        //hide question container and display score
        wrapper.classList.add("hide");
        scoreContainer.classList.remove("hide");
        // user score
        userScore.innerHTML =
            "Your score is " + scoreCount + " out of " + questionCount;
            restart.style.display="block"
    } else {
        //display questionCount
        countOfQuestion.innerHTML =
            questionCount + 1 + " of " + quizData.length + " Question";
        //display Quiz
        quizDisplay(questionCount);
        //count=11 (so that it starts with 10)
        count = 11;
        //clear interval for next question
        clearInterval(countdown);
        //display timer (start countdown)
        timerDisplay();
    }
}

function checker(userOption) {
	let userSolution = userOption.innerText;
	let question = document.getElementsByClassName("container_mid")[questionCount];
	console.log(questionCount);
	let options = question.querySelectorAll(".option-div");
	console.log(options);
	//if user's clicked anaswer==correct option stored in object
	if (userSolution === quizData[questionCount].correct) {
		//green background and score increment
		userOption.classList.add("correct");
		scoreCount++;
	} else {
		//red background
		userOption.classList.add("inCorrect");
		//for marking green(correct)
		options.forEach((element) => {
			if (element.innerText == quizData[questionCount].correct) {
				element.classList.add("correct");
			}
		});
	}
	//clear interval(stop timer)
	clearInterval(countdown);
	//disabled all options
	options.forEach((element) => {
		element.disabled = true;
	});
}