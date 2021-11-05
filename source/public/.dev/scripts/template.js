// Variables
const SOME_CONSTANT = 5;
let someVariable = 'USE SINGLE QUOTES';
let someString = `template string w/ backticks if using '' is needed or for formatting w/ ${SOME_CONSTANT}`;

// Functions
function someFunction(someParam) {
	console.log(someVariable + someString + someParam);
}

// Page Initialization
window.addEventListener('DOMContentLoaded', function () {
	/* Code block: Elements -> Code -> Event listeners. */
	const button = document.querySelector('button');

	console.log(button);

	// Upon button click, call someFunction()
	button.addEventListener('click', function () {
		someFunction(this);
	});

	/* Next code block. */
});
