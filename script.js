const start = document.getElementById('start');
const startBtn = document.querySelector('#start button');
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const optionA = document.getElementById('option-0');
const optionB = document.getElementById('option-1');
const optionC = document.getElementById('option-2');
const optionD = document.getElementById('option-3');
const counter = document.getElementById('counter');
const timeGauge = document.getElementById('timeGauge');
const progress = document.getElementById('progress');
const scoreDiv = document.getElementById('score');

// VARIABLES
const lastQuestion = totalQuestions.length - 1;
let runningQuestion = 0;
// let count = 0;
// const questionTime = 10;
// const gaugeWidth = 150; // 150px
// const gaugeUnit = gaugeWidth / questionTime;
// let TIMER;
let score = 0;
let scoreColor;

// console.log(start);

startBtn.addEventListener('click', function () {
	start.style.display = 'none';

	startQuiz();
});

// STARTS QUIZ
function startQuiz() {
	renderQuestion();

	quiz.style.display = 'block';
	renderProgress();
	// renderCounter();
	// TIMER = setInterval(renderCounter, 1000);
}

// RENDERS A QUESTION
function renderQuestion() {
	let q = totalQuestions[runningQuestion];

	question.innerHTML = `<p>${q.question}</p>`;
	let p = document.querySelector('#question p');
	p.classList.add('fade-in');

	let options = q.options;
	// console.log(options);

	for (let i = 0; i < options.length; i++) {
		let option = document.querySelector(`#option-${i + 1}`);

		option.innerHTML = `<p>${options[i]}</p>`;
		let opt = document.querySelector(`#option-${i + 1} p`);
		opt.classList.add('fade-in');
	}
}

function renderProgress() {
	let progressBar = document.getElementById('progress');
	for (let i = 0; i < totalQuestions.length; i++) {
		let span = document.createElement('span');
		span.className = 'step';
		progressBar.appendChild(span);
	}
}

// function renderCounter() {
// 	if (count < questionTime) {
// 		counter.innerHTML = count;
// 		timeGauge.style.width = count * gaugeUnit + 'px';
// 		count++;
// 	} else {
// 		count = 0;

// 		if (runningQuestion < lastQuestion) {
// 			runningQuestion++;
// 			renderQuestion();
// 		} else {
// 			// END QUIZ & SHOW SCORE
// 			clearInterval(TIMER);
// 			renderScore();
// 		}
// 	}
// }

function updateStep() {
	// removes the "active" class of all steps...
	let i;
	let x = document.getElementsByClassName('step');
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(' active', '');
	}
	x[n - 1].className += ' active'; // and adds the "active" class on the current step
}

// RENDERS SCORE
function renderScore() {
	scoreDiv.style.display = 'block';

	// CALCULATE PERCENTAGE
	const scorePercent = Math.round(100 * score) / totalQuestions.length;

	if (scorePercent == 100) {
		scoreColor = 'teal';
		scoreDiv.innerHTML += '<h2>Excellent, You Pass!</h2>';
		scoreDiv.innerHTML += '<br> Your Score: ' + score;
	} else if (scorePercent >= 80) {
		scoreColor = 'green';
		scoreDiv.innerHTML += '<h2>Very Good! You Pass.</h2>';
		scoreDiv.innerHTML += '<br> Your Score: ' + score;
	} else if (scorePercent >= 60) {
		scoreColor = 'blue';
		scoreDiv.innerHTML += '<h2>Good! You Pass.</h2>';
		scoreDiv.innerHTML += '<br> Your Score: ' + score;
	} else if (scorePercent >= 40) {
		scoreColor = 'orange';
		scoreDiv.innerHTML += '<h2>Fair! You Pass.</h2>';
		scoreDiv.innerHTML += '<br> Your Score: ' + score;
	} else {
		scoreColor = 'red';
		scoreDiv.innerHTML += '<h2>Oh No! You Failed...</h2>';
		scoreDiv.innerHTML += '<br> Your Score: ' + score;
	}

	let path = `<svg viewBox="0 0 36 36" class="circular-chart ${scoreColor}">
	<path class="circle-bg" d="M18 2.0845     a 15.9155 15.9155 0 0 1 0 31.831     a 15.9155 15.9155 0 0 1 0 -31.831"/>
	<path class="circle" stroke-dasharray="${scorePercent}, 100" d="M18 2.0845     a 15.9155 15.9155 0 0 1 0 31.831     a 15.9155 15.9155 0 0 1 0 -31.831"/>
	<text x="19" y="21" id="percentage">${scorePercent}</text>     
	</svg>`;
	scoreDiv.innerHTML += path;

	let button = `<button class="custom-btn btn"><span>Retake Quiz</span></button>`;
	scoreDiv.innerHTML += button;

	let btn = document.querySelector('#score button');

	btn.addEventListener('click', retakeQuiz);
}

function checkAnswer(answer) {
	// console.log(answer);

	let finishStep = document.querySelectorAll('.step');

	finishStep[runningQuestion].classList.add('finish');

	if (answer == totalQuestions[runningQuestion].answer) {
		score++;
	}

	if (runningQuestion < lastQuestion) {
		runningQuestion++;
		renderQuestion();
	} else {
		quiz.style.display = 'none';
		renderScore();
	}
}

function retakeQuiz() {
	start.style.display = 'none';
	scoreDiv.style.display = 'none';

	runningQuestion = 0;
	score = 0;

	renderQuestion();

	quiz.style.display = 'block';

	let progressBar = document.getElementById('progress');
	progressBar.innerHTML = '';

	scoreDiv.innerHTML = '';

	renderProgress();
}
