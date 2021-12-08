/* global luxon */ // Tell ESLint to ignore undefined `luxon`.
// main.recipe.js

import { searchForKey, parseISO, createTagList } from './util.js';

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

/** ['prepTime', 'cookTime', 'totalTime'] */
const TIME_FIELDS = ['prepTime', 'cookTime', 'totalTime'];

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
		let recipeData = JSON.parse(recipeJSON.textContent);

		//TODO: Add additional schema fields to fetched data (URL)
		recipeData.tags = createTagList(recipeData).string;

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
	// console.group('Recipe data');
	// console.log(data);
	// console.groupEnd('Recipe data');

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
	// Source author or organization
	const source = document.getElementById('source');
	if (searchForKey(data, 'publisher')) {
		source.textContent = searchForKey(data, 'publisher').name || 'Source N/A';
	} else {
		source.textContent = searchForKey(data, 'author').name || 'Source N/A';
	}

	// Source link
	const url = document.getElementById('url');
	url.href = data.url || searchForKey(data, '@id') || '#';
	if (url.href === window.location.href + '#') {
		url.textContent = 'Link N/A';
	} else {
		url.textContent = 'Link';
	}

	/* Recipe facts (tags, cook time, difficulty, servings) */
	// Tags
	const tags = document.getElementById('tags');
	tags.textContent = searchForKey(data, 'tags') || createTagList(data).string || 'N/A';

	// Prep time, cook time, and total time
	TIME_FIELDS.forEach((timeField) => {
		const timeElement = document.getElementById(timeField);
		timeElement.textContent = parseISO(searchForKey(data, timeField)) || 'N/A';
	});

	// Difficulty
	const difficulty = document.getElementById('difficulty');
	difficulty.textContent = searchForKey(data, 'difficulty') || 'N/A';

	// Servings
	const servings = document.getElementById('servings');
	servings.textContent = searchForKey(data, 'recipeYield') || 'N/A';

	// TODO: Nutrition

	// Description
	const description = document.getElementById('description');
	description.textContent = searchForKey(data, 'description');

	// Image
	const image = document.getElementById('image');
	image.src = searchForKey(data, 'image').url || 'https://via.placeholder.com/350x150?text=No+image+found';
	image.alt = searchForKey(data, 'name');

	// Ingredients - clear old & replace with new
	const ingredients = document.getElementById('ingredients');
	ingredients.replaceChildren();
	searchForKey(data, 'recipeIngredient').forEach((ingredient) => {
		const newIngredient = document.createElement('li');
		newIngredient.textContent = ingredient;

		ingredients.appendChild(newIngredient);
	});
	// TODO: Find way to make numbers bold

	// Steps - clear old & replace with new
	const steps = document.getElementById('steps');
	steps.replaceChildren();
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
	const data = JSON.parse(recipeJSON.textContent);

	/**
	 * Populate input elements in the drawer.
	 */
	// Title
	const title = document.getElementById('titleInput');
	title.value = searchForKey(data, 'name');

	/* Recipe facts (tags, cook time, difficulty, servings) */
	// Tags
	const tags = document.getElementById('tagsInput');
	tags.value = searchForKey(data, 'tags') || createTagList(data).string;

	// Prep time, cook time, and total time
	TIME_FIELDS.forEach((timeField) => {
		const timeElement = document.getElementById(`${timeField}Input`);
		timeElement.value = luxon.Duration.fromISO(searchForKey(data, timeField)).shiftTo('minutes').get('minutes');
	});

	// Difficulty
	const difficulty = document.getElementById('difficultyInput');
	difficulty.value = searchForKey(data, 'difficulty') || '';

	// Servings
	const servings = document.getElementById('servingsInput');
	servings.value = searchForKey(data, 'recipeYield');

	// Ingredients
	const ingredients = document.getElementById('ingredientsInput');
	ingredients.value = searchForKey(data, 'recipeIngredient').join('\n');

	// Steps
	const steps = document.getElementById('stepsInput');
	steps.value = searchForKey(data, 'recipeInstructions').join('\n\n');

	// Image link
	const imageInput = document.getElementById('imageInput');
	imageInput.value = searchForKey(data, 'image').url || '';

	// Description
	const description = document.getElementById('descriptionInput');
	description.value = searchForKey(data, 'description');

	// Source author or organization
	const sourceInput = document.getElementById('sourceInput');
	sourceInput.value = searchForKey(data, 'author').name;

	// Source link
	const urlInput = document.getElementById('urlInput');
	urlInput.value = data.url || '';
}

/**
 * Activate editing functionality in the drawer.
 */
function activateDrawerEditing() {
	// TODO: Populate edit drawer
	let data = JSON.parse(recipeJSON.textContent);

	const elementIds = [
		'title',
		'tags',
		'prepTime',
		'cookTime',
		'totalTime',
		'difficulty',
		'servings',
		'ingredients',
		'steps',
		'image',
		'description',
		'source',
		'url',
	];

	/** Mappings of element id to json field name */
	const jsonMappings = {
		title: 'name',
		servings: 'recipeYield',
		image: ['image.url'],
		ingredients: 'recipeIngredient',
		steps: 'recipeInstructions',
		source: ['author.name', 'publisher.name'],
	};

	elementIds.forEach((elementId) => {
		const elementInput = document.getElementById(`${elementId}Input`);

		elementInput.addEventListener('input', function (event) {
			const newValue = event.target.value;

			const jsonMapping = jsonMappings[elementId];
			if (!jsonMapping) {
				// CASE: element id is same as json field, so there is no custom mapping
				if (TIME_FIELDS.includes(elementId)) {
					// CASE: Time field
					data[elementId] = `PT${newValue}M`;
				} else {
					// CASE: Normal field like `description`
					data[elementId] = newValue;
				}
			} else {
				// CASE: element id is different than json field, so there is a custom mapping
				if (Array.isArray(jsonMapping)) {
					// CASE: Multiple target fields OR nested field
					jsonMapping.forEach((field) => {
						if (field.includes('.')) {
							// CASE: Nested field
							const fieldArr = field.split('.'); // [parent, child]

							// TODO: Optimize image uploads somehow - currently too big for storage
							// if (elementId === 'image') {
							// 	const file = event.target.files[0];
							// 	const reader = new FileReader();

							// 	reader.addEventListener('load', function () {
							// 		data[fieldArr[0]][fieldArr[1]] = reader.result;

							// 		// Update front-end preview
							// 		populateRecipe(data);

							// 		/* Edit recipe in local storage */
							// 		let userRecipes = JSON.parse(localStorage.getItem('recipes'));
							// 		userRecipes[id] = data;

							// 		localStorage.setItem('recipes', JSON.stringify(userRecipes));
							// 	});

							// 	if (file) {
							// 		reader.readAsDataURL(file);
							// 	}
							// }

							data[fieldArr[0]][fieldArr[1]] = newValue;
						} else {
							// CASE: Single field
							data[jsonMapping] = newValue;
						}
					});
				} else {
					// CASE: Normal field with a mapping like `ingredients`
					if (elementId === 'tags') {
						data[jsonMapping] = newValue.split(',').map((tag) => tag.trim());
					} else if (elementId === 'ingredients') {
						data[jsonMapping] = newValue.split('\n');
					} else if (elementId === 'steps') {
						data[jsonMapping] = newValue.split('\n\n');
					} else {
						data[jsonMapping] = newValue;
					}
				}
			}

			// Log updated data
			console.log(data);

			// Update front-end preview
			populateRecipe(data);

			/* Edit recipe in local storage */
			let userRecipes = JSON.parse(localStorage.getItem('recipes'));
			userRecipes[id] = data;

			localStorage.setItem('recipes', JSON.stringify(userRecipes));
		});
	});
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

			const recipeData = presetRecipes[source][id];

			console.group('Recipe data');
			console.log(recipeData);
			console.groupEnd('Recipe data');

			populateRecipe(recipeData);
			populateDrawer();
			activateDrawerEditing();
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

	// Show edit drawer upon showing a completely new recipe 
	if (location.hash === '#new') {
		const drawer = document.getElementById('drawer');
		drawer.classList.add('show');
	}

	/**
	 * Access local storage to retrieve recipe data.
	 */
	const userRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
	const recipeData = userRecipes[id];

	console.group('Recipe data');
	console.log(recipeData);
	console.groupEnd('Recipe data');

	// If recipe exists, populate frontend with recipe data.
	if (!recipeData) {
		invalidRecipe();
	} else {
		populateRecipe(recipeData);
		populateDrawer();
		activateDrawerEditing();
	}
} else {
	invalidRecipe();
}
