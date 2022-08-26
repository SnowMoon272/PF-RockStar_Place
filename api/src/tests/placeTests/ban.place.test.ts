const { createPlace, deletePlace, banHandler, getPlace } = require('../../db/models/placeModel.ts');
const mongoose = require('mongoose');
const connect = require('../../db/db.ts');

export const placeTest = {
	capacity: '200',
	name: 'Local de prueba',
	email: 'soyunTest7@gmail.com',
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
	banned: false,
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

test("place was created'p1", () => {
	expect(typeof place).toBe('object');
});
test('place was created p2', () => {
	expect(place).toHaveProperty('capacity');
});
test('property ban in place should to be false', async () => {
	const placeT = await getPlace(placeTest.email);
	expect(placeT.banned).toBeFalsy();
});
test('place.banned should be banned', async () => {
	await banHandler(placeTest.email);
	const placeT = await getPlace(placeTest.email);
	expect(placeT.banned).toBeTruthy();
});
test('place.banned should be unbanned', async () => {
	await banHandler(placeTest.email);
	const placeT = await getPlace(placeTest.email);
	expect(placeT.banned).toBeFalsy();
});
