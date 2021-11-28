// main.recipe.js

import { searchForKey } from './util.js';

// ----- Variables -----
/**
 * Retrieve GET queries for current recipe.
 * /recipe.html?source=placeholder&id=index
 * See https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
 */
const params = new URL(document.location).searchParams;

/**
 * Either 'user' to specify a user recipe, or an external source
 * like 'delicious.com.au' to specify a preset recipe.
 */
const source = params.get('source');

/** Unique integer identifier & index for the recipe. */
const id = parseInt(params.get('id'));

/** LD-JSON structured data storing recipe data in the document head. */
const recipeJSON = document.createElement('script');
recipeJSON.setAttribute('type', 'application/ld+json');

/**
 * Container with recipe data elements.
 */
const recipeDiv = document.getElementById('recipe');
const cornerBtnsDiv = document.getElementById('cornerBtns');

// ----- Functions -----
/**
 * Replaces recipe content with 404 message if there is no valid specified recipe to load.
 */
function invalidRecipe() {
	recipeDiv.classList.remove('invisible');

	// Replace recipe content
	const errorHeading = document.createElement('h2');
	errorHeading.textContent = '404: The recipe you are looking for does not exist!';
	recipeDiv.replaceChildren(errorHeading);

	// Remove corner action buttons
	cornerBtnsDiv.replaceChildren();
}

/**
 * Deletes specified corner buttons.
 * @param {string[]} btnIds - IDs of buttons to delete. {'addBtn', 'editBtn', 'deleteBtn'}
 */
function deleteCornerBtns(btnIds) {
	btnIds.forEach((btnId) => {
		cornerBtnsDiv.removeChild(document.getElementById(btnId));
	});
}

/**
 * "Add recipe" button logic.
 */
function activateAddBtn() {
	const addBtn = document.getElementById('addBtn');
	addBtn.addEventListener('click', function () {
		/**
		 * Add recipe data to user recipes array.
		 */
		// Retreive recipes array and push new recipe.
		const userRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
		const recipeData = JSON.parse(recipeJSON.textContent);
		userRecipes.push(recipeData);

		// Update recipes array in storage.
		localStorage.setItem('recipes', JSON.stringify(userRecipes));

		// Redirect user to their new recipe.
		window.location.href = `/recipe.html?source=user&id=${userRecipes.length - 1}`;
	});
}

/**
 * "Toggle speech commands" button logic.
 */
function activateSpeechBtn() {
	const speechBtn = document.getElementById('speechBtn');
	speechBtn.addEventListener('click', function () {
		// TODO: Activate Web Speech API
	});
}

/**
 * "Delete recipe" button logic.
 */
function activateDeleteBtn() {
	const deleteBtn = document.getElementById('confirmDeleteBtn');
	deleteBtn.addEventListener('click', function () {
		/**
		 * Delete recipe data from user recipes array.
		 */
		// Retreive recipes array and remove recipe.
		const userRecipes = JSON.parse(localStorage.getItem('recipes'));
		userRecipes.splice(id, 1);

		// Update recipes array in storage.
		localStorage.setItem('recipes', JSON.stringify(userRecipes));

		// Redirect user to the recipes page.
		window.location.href = `/index.html`;
	});
}

/**
 * Populates recipe content with recipe data.
 * @param {Object} data - Recipe data.
 */
function populateRecipe(data) {
	// Log recipe Object.
	console.group('Recipe data');
	console.log(data);
	console.groupEnd('Recipe data');

	/**
	 * Populate LD-JSON in the document head.
	 */
	recipeJSON.textContent = JSON.stringify(data);
	document.head.appendChild(recipeJSON);

	/**
	 * Populate frontend elements.
	 */
	// Title
	const title = document.getElementById('title');
	title.textContent = searchForKey(data, 'name');

	// TODO: Source & Link

	// TODO: Recipe facts (tags, cook time, difficulty, servings)

	// TODO: Nutrition

	// Description
	const description = document.getElementById('description');
	description.textContent = searchForKey(data, 'description');

	// Image
	const recipeImg = document.getElementById('recipeImg');
	recipeImg.src = searchForKey(data, 'image').url;
	recipeImg.alt = searchForKey(data, 'name');

	// Ingredients
	const ingredients = document.getElementById('ingredients');
	searchForKey(data, 'recipeIngredient').forEach((ingredient) => {
		const newIngredient = document.createElement('li');
		newIngredient.textContent = ingredient;

		ingredients.appendChild(newIngredient);
	});
	// TODO: Find way to make numbers bold

	// Steps
	const steps = document.getElementById('steps');
	searchForKey(data, 'recipeInstructions').forEach((step, index) => {
		const newStep = document.createElement('li');
		newStep.textContent = step;

		// TODO: Save index for user's recipe progress
		if (source === 'user' && index === 0) {
			newStep.classList.add('active');
		}

		// Highlight certain step upon clicking it
		newStep.addEventListener('click', function () {
			for (let i = 0; i < steps.children.length; i++) {
				steps.children[i].classList.remove('active');
			}

			newStep.classList.add('active');
		});

		steps.appendChild(newStep);
	});

	// Reveal recipe after population finishes
	recipeDiv.classList.remove('invisible');
	cornerBtnsDiv.classList.remove('invisible');
}

/**
 * Populates the editing drawer with recipe data.
 */
function populateDrawer() {
	// TODO: Populate edit drawer
}

// ----- Page Initialization -----
/**
 * Recipe query logic.
 * Determining if recipe is from user recipes or preset recipes.
 */
// Log query info
console.log(`Source: ${source}`);
console.log(`ID: ${id}`);

// Log local storage
console.group('Local storage');
console.log(localStorage);
console.log('User recipes (localStorage.recipes):');
console.log(JSON.parse(localStorage.recipes || '[]'));
console.groupEnd('Local storage');

// Validate recipe source and id
if (!source || isNaN(id)) {
	invalidRecipe();
} else if (source !== 'user') {
	/* CASE: Preset Recipe Source */

	// Delete edit & delete corner buttons
	deleteCornerBtns(['speechBtn', 'editBtn', 'deleteBtn']);

	// Activate add button
	activateAddBtn();

	/**
	 * Fetch preset recipe to populate frontend.
	 */
	fetch('/data/recipe-data.json')
		.then((response) => response.json())
		.then((presetRecipes) => {
			// The external recipe source must be in the JSON
			if (!presetRecipes.hasOwnProperty(source) || !presetRecipes[source][id]) {
				return invalidRecipe();
			}

			populateRecipe(presetRecipes[source][id]);
			populateDrawer();
		})
		.catch((err) => console.error(err));
} else if (source === 'user') {
	/* CASE: User Recipe Source */

	// Delete add corner button
	deleteCornerBtns(['addBtn']);

	// Activate speech butotn
	activateSpeechBtn();

	// Activate delete button
	activateDeleteBtn();

	/**
	 * Access local storage to retrieve recipe data.
	 */
	const userRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
	const recipeData = userRecipes[id];

	// If recipe exists, populate frontend with recipe data.
	if (!recipeData) {
		invalidRecipe();
	} else {
		populateRecipe(recipeData);
		populateDrawer();
	}
} else {
	invalidRecipe();
}
