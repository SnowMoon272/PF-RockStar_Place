const {
	createMusicBand,
	deleteMusicBand,
	addBandReview,
	getMusicBand,
} = require('../../db/models/musicBandModel.ts');
const mongoose = require('mongoose');
const connect = require('../../db/db.ts');

export let musicBandTest = {
	personInCharge: 'Sebastian',
	name: 'Test de banda o músico',
	email: 'soyunTest1@gmail.com',
	password: 'test',
	rating: 5,
	reviews: [],
	dates: [],
	banned: false,
	role: 'musicband',
	description: 'Esta es una descripcion de un test',
	pendingDates: [],
	profilePicture: '',
};

let testReviews = {
	author: 'esteEsUnCorreo@gmail.com',
	comment: 'Increible',
	rating: 5,
};

jest.setTimeout(60000 * 2);

let band: any;

beforeAll(async () => {
	await connect();
	await deleteMusicBand(musicBandTest.email);
	band = await createMusicBand(musicBandTest);
});

afterAll(async () => {
	await deleteMusicBand(musicBandTest.email);
	await mongoose.connection.close();
});

test('band should to be object', () => {
	expect(typeof band).toBe('object');
});
test('band should to have property email', () => {
	expect(band).toHaveProperty('email');
});
test('band should to have property reviews', () => {
	expect(band).toHaveProperty('reviews');
});
test('band.reviews length should be 0', () => {
	expect(band.reviews).toHaveLength(0);
});
test('return of addBandReview should to have property reviews', async () => {
	const test = await addBandReview(musicBandTest.email, testReviews);
	expect(test).toHaveProperty('reviews');
});
test('band.reviews length should be 1', async () => {
	let test = await getMusicBand(musicBandTest.email);
	expect(test.reviews).toHaveLength(1);
});
