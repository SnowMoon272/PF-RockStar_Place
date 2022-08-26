const {
	createPlace,
	deletePlace,
	addPlaceReview,
	getPlaceByID,
} = require('../../db/models/placeModel.ts');
const mongoose = require('mongoose');
const connect = require('../../db/db.ts');

export const placeTest = {
	capacity: '200',
	name: 'Local de prueba',
	email: 'soyunTest9@gmail.com',
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

test('place should to be object', () => {
	expect(typeof place).toBe('object');
});
test('place should to have property name', () => {
	expect(place).toHaveProperty('name');
});
test('place should to be in db', async () => {
	const placeById = await getPlaceByID(place._id);
	expect(typeof placeById).toBe('object');
});
test('place should to be in db', async () => {
	const placeById = await getPlaceByID(place._id);
	expect(placeById).toHaveProperty('name');
});
