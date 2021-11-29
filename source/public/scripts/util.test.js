import { createIngredientList, createTagList, searchForKey } from './util.js';

test('Should return the value of the key in object', () => {					// eslint-disable-line
	const object1 = {
		name: 'Royce',
		age: 22,
		homeCity: 'La Jolla',
	};
	const object2 = {
		name: 'Andy',
		age: 21, 
		roommate: object1
	};
	const object3 = {
		name: 'James', 
		major: 'CS',
		classmate: object2
	};
	const object4 = {
		name: 'Dylan',
		bestFriend: object1
	};

	expect(searchForKey(object1, 'name')).toBe('Royce');						// eslint-disable-line
	expect(searchForKey(object1, 'email')).toBe(undefined);						// eslint-disable-line
	expect(searchForKey(object1, 'age')).toBe(22);								// eslint-disable-line
	expect(searchForKey(object1, 'roommate')).toBe(undefined);					// eslint-disable-line

	expect(searchForKey(object2, 'roommate')).toBe(object1);					// eslint-disable-line
	expect(searchForKey(object2, 'age')).toBe(21);								// eslint-disable-line
	expect(searchForKey(object2, 'homeCity')).toBe('La Jolla');					// eslint-disable-line
	expect(searchForKey(object2, 'email')).toBe(undefined);						// eslint-disable-line

	expect(searchForKey(object3, 'homeCity')).toBe('La Jolla');					// eslint-disable-line
	expect(searchForKey(object3, 'age')).toBe(21);								// eslint-disable-line

	expect(searchForKey(object4, 'name')).toBe('Dylan');						// eslint-disable-line
	expect(searchForKey(object4, 'homeCity')).toBe('La Jolla');					// eslint-disable-line
});

test('Should return a formatted list of ingredients', () => {					// eslint-disable-line
	const ingList1 = ['2 large eggs', '6 oz bacon', '1 cup gritz', '5 oz sausage'];
	const ingList2 = ['1 oz cheddar cheese'];
	const ingList3 = [];
	const ingList4 = ['1 lb chicken', '1 g paprika', '1 cup milk', '1 box pasta', '3'];
	
	expect(createIngredientList(ingList1)).toBe('Eggs, bacon, gritz, sausage');	// eslint-disable-line
	expect(createIngredientList(ingList2)).toBe('Cheddar cheese');				// eslint-disable-line
	expect(createIngredientList(ingList3)).toBe('');							// eslint-disable-line
	expect(createIngredientList(ingList4)).toBe('Chicken, paprika, milk, pasta');	// eslint-disable-line
});

test('Should return a string of formatted tags', () => {						// eslint-disable-line
	const tagList1 = ['Dessert', 'Chocolate', 'Ice Cream'];
	const tagList2 = ['Mexican'];
	const tagList3 = [''];

	expect(createTagList(tagList1)).toBe('Dessert, Chocolate, Ice Cream');		// eslint-disable-line
	expect(createTagList(tagList2)).toBe('Mexican');							// eslint-disable-line
	expect(createTagList(tagList3)).toBe('');									// eslint-disable-line
});