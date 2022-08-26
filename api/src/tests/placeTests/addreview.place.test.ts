const {
	createPlace,
	deletePlace,
	addPlaceReview,
	getPlace,
} = require('../../db/models/placeModel.ts');
const mongoose = require('mongoose');
const connect = require('../../db/db.ts');

export const placeTest = {
	capacity: '200',
	name: 'Local de prueba',
	email: 'soyunTest6@gmail.com',
	password: 'estaesunacontrasena',
	hasSound: true,
	city: 'Bogota',
	adress: 'Avenida las americas',
	description: 'Esta es una descripción',
	reviews: [],
	dates: [],
	availableDates: [],
	pendingDates: [],
	profilePicture: 'not-working',
};

let testReviews = {
	author: 'esteEsUnCorreo@gmail.com',
	comment: 'Increible',
	rating: 5,
};

jest.setTimeout(60000 * 2);

let place: any;
beforeAll(async () => {
	await connect();
	place = await createPlace(placeTest);
});

afterAll(async () => {
	await deletePlace(placeTest.email);
	await mongoose.connection.close();
});

test('place should to be object', () => {
	expect(typeof place).toBe('object');
});
test('place should to have property email', () => {
	expect(place).toHaveProperty('email');
});
test('place should to have property reviews', () => {
	expect(place).toHaveProperty('reviews');
});
test('place.reviews length should be 0', () => {
	expect(place.reviews).toHaveLength(0);
});
test('return of addPlaceReview should to have property reviews', async () => {
	const test = await addPlaceReview(placeTest.email, testReviews);
	expect(test).toHaveProperty('reviews');
});
test('band.reviews length should be 1', async () => {
	let test = await getPlace(placeTest.email);
	expect(test.reviews).toHaveLength(1);
});
