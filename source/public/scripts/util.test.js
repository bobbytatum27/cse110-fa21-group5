import { createIngredientList, createTagList, searchForKey } from './util.js';

test('Should return the value of the key in object', () => {
	const object1 = {
		name: 'Royce',
		age: 22,
		homeCity: 'La Jolla',
	};
	const object2 = {
		name: 'Andy',
		age: 21, 
		roommate: object1
	}
	const object3 = {
		name: 'James', 
		major: 'CS',
		classmate: object2
	}
	const object4 = {
		name: 'Dylan',
		bestFriend: object1
	}

	expect(searchForKey(object1, 'name')).toBe('Royce');
	expect(searchForKey(object1, 'email')).toBe(undefined);
	expect(searchForKey(object1, 'age')).toBe(22);
	expect(searchForKey(object1, 'roommate')).toBe(undefined);

	expect(searchForKey(object2, 'roommate')).toBe(object1);
	expect(searchForKey(object2, 'age')).toBe(21);
	expect(searchForKey(object2, 'homeCity')).toBe('La Jolla');
	expect(searchForKey(object2, 'email')).toBe(undefined);

	expect(searchForKey(object3, 'homeCity')).toBe('La Jolla');
	expect(searchForKey(object3, 'age')).toBe(21);

	expect(searchForKey(object4, 'name')).toBe('Dylan');
	expect(searchForKey(object4, 'homeCity')).toBe('La Jolla');
});

test('Should return a formatted list of ingredients', () => {
	const ingList1 = ['2 large eggs', '6 oz bacon', '1 cup gritz', '5 oz sausage'];
	const ingList2 = ['1 oz cheddar cheese'];
	const ingList3 = [];
	const ingList4 = ['1 lb chicken', '1 g paprika', '1 cup milk', '1 box pasta', '3'];
	
	expect(createIngredientList(ingList1)).toBe('Eggs, bacon, gritz, sausage');
	expect(createIngredientList(ingList2)).toBe('Cheddar cheese');
	expect(createIngredientList(ingList3)).toBe('');
	expect(createIngredientList(ingList4)).toBe('Chicken, paprika, milk, pasta');
});

test('Should return a string of formatted tags', () => {
	const tagList1 = ['Dessert', 'Chocolate', 'Ice Cream'];
	const tagList2 = ['Mexican'];
	const tagList3 = [''];

	expect(createTagList(tagList1)).toBe('Dessert, Chocolate, Ice Cream');
	expect(createTagList(tagList2)).toBe('Mexican');
	expect(createTagList(tagList3)).toBe('');
});