function createQuestionArr(question, options, answer) {
	this.question = question;
	this.options = options;
	this.answer = answer;
}

// QUESTION 1
let q1 = new createQuestionArr(
	'Which tool can you use to ensure code quality?',
	['Angular', 'jQuery', 'RequireJS', 'ESLint'],
	4
);

// QUESTION 2
let q2 = new createQuestionArr(
	'To which object does the location property belong?',
	['Window', 'Position', 'Element', 'Location'],
	1
);

// QUESTION 3
let q3 = new createQuestionArr(
	'How do you find the number with the highest value of x and y?',
	['top(x,y)', 'Math.ceil(x,y)', 'ceil(x,y)', 'Math.max(x,y)'],
	4
);

// QUESTION 4
let q4 = new createQuestionArr(
	'Which of the following is not a framework?',
	['jQuery', '.NET', 'JavaScript', 'None of the mentioned'],
	3
);

// QUESTION 5
let q5 = new createQuestionArr(
	'Inside which HTML element do we put the JavaScript?',
	['&lt;javascript&gt;', '&lt;script&gt;', '&lt;scripting&gt;', '&lt;js&gt;'],
	2
);

// QUESTION 6
let q6 = new createQuestionArr(
	' new String("This is a string") instanceof String;',
	['true', 'false', 'ReferenceError', 'TypeError'],
	1
);

// QUESTION 7
let q7 = new createQuestionArr(
	'How do you round the number 7.25, to the nearest integer?',
	['Math.round(7.25)', 'Math.rnd(7.25)', 'rnd(7.25)', 'round(7.25)'],
	1
);

// QUESTION 8
let q8 = new createQuestionArr(
	'How do you write "Hello World" in an alert box?',
	[
		'alert("Hello World");',
		'msgBox("Hello World");',
		'prompt("Hello World");',
		'alertBox("Hello World");',
	],
	1
);

// QUESTION 9
let q9 = new createQuestionArr(
	'How do you create a function in JavaScript?',
	[
		'function = myFunction()',
		'function:myFunction()',
		'function myFunction()',
		'None of the mentioned',
	],
	3
);

// QUESTION 10
let q10 = new createQuestionArr(
	'How do you call a function named "myFunction"?',
	[
		'myFunction()',
		'call function myFunction()',
		'call myFunction()',
		'None of the mentioned',
	],
	1
);

let totalQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// console.log(totalQuestions);
