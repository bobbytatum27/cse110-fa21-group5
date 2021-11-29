// util.js

/**
 * Recursively search for a key nested somewhere inside an object
 * @param {Object} object the object with which you'd like to search
 * @param {String} key the key that you are looking for in the object
 * @returns {*} the value of the found key
 */
function searchForKey(object, key) {
	let value;
	Object.keys(object).some(function (k) {
		if (k === key) {
			value = object[k];
			return true;
		}
		if (object[k] && typeof object[k] === 'object') {
			value = searchForKey(object[k], key);
			return value !== undefined;
		}
	});
	return value;
}

/**
 * Takes in a list of ingredients raw from imported data and returns a neatly
 * formatted comma separated list.
 * @param {Array} ingredientArr The raw unprocessed array of ingredients from the
 *                              imported data
 * @return {String} the string comma separate list of ingredients from the array
 */
function createIngredientList(ingredientArr) {
	let finalIngredientList = '';

	/**
	 * Removes the quantity and measurement from an ingredient string.
	 * This isn't perfect, it makes the assumption that there will always be a quantity
	 * (sometimes there isn't, so this would fail on something like '2 apples' or 'Some olive oil').
	 * For the purposes of this lab you don't have to worry about those cases.
	 * @param {String} ingredient the raw ingredient string you'd like to process
	 * @return {String} the ingredient without the measurement & quantity
	 * (e.g. '1 cup flour' returns 'flour')
	 */
	function _removeQtyAndMeasurement(ingredient) {
		return ingredient.split(' ').splice(2).join(' ');
	}

	ingredientArr.forEach((ingredient) => {
		ingredient = _removeQtyAndMeasurement(ingredient);
		ingredient = ingredient.replace(/[0-9]|[()]|ml|/g, '');
		ingredient = ingredient.replace(/g /g, '');
		ingredient = ingredient.trim();

		if (ingredient !== '') {
			finalIngredientList += `${ingredient}, `;
		}
	});

	// Capitalize first letter
	finalIngredientList = finalIngredientList.charAt(0).toUpperCase() + finalIngredientList.slice(1);

	// The .slice(0,-2) here gets ride of the extra ', ' added to the last ingredient
	return finalIngredientList.slice(0, -2);
}

function createTagList(tagArr) {
	let finalIngredientList = '';

	tagArr.forEach((tag) => {
		tag = tag.trim();

		if (tag !== '') {
			finalIngredientList += `${tag}, `;
		}
	});

	// Capitalize first letter
	finalIngredientList = finalIngredientList.charAt(0).toUpperCase() + finalIngredientList.slice(1);

	// The .slice(0,-2) here gets ride of the extra ', ' added to the last ingredient
	return finalIngredientList.slice(0, -2);
}

export { searchForKey, createIngredientList, createTagList };
