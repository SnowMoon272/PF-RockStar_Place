const { createPlace, deletePlace } = require('../../db/models/placeModel.ts');
const mongoose = require('mongoose');
const connect = require('../../db/db.ts');

export const placeTest = {
	capacity: '200',
	name: 'Local de prueba',
	email: 'soyunTest5@gmail.com',
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

test('place should be object', () => {
	expect(typeof place).toBe('object');
});
test('place should was created', () => {
	expect(place).toHaveProperty('email');
});
test('place should was created', () => {
	expect(place).toHaveProperty('adress');
});
test('trying to create a new place with the same email, should to have property error', async () => {
	const newPlace = await createPlace(placeTest);
	expect(newPlace).toHaveProperty('error');
});
