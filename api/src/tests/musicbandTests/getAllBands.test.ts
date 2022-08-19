const { createMusicBand, deleteMusicBand, getAllMusicBands } = require("../../db/models/musicBandModel");
const mongoose = require("mongoose")
const connect = require("../../db/db");

export let musicBandTest = {
  personInCharge: "Sebastian",
  name: "Test de banda o músico",
  email: "soyunTest2@gmail.com",
  password: "test",
  rating: 5,
  reviews: [],
  dates: [],
  banned: false,
  role: "musicband",
  description: "Esta es una descripcion de un test",
  pendingDates: [],
  profilePicture: "",
};

jest.setTimeout(60000*2);

let allBands: any;
let band : any;
beforeAll(async () => {
  await connect();
  band = await createMusicBand(musicBandTest);
  allBands = await getAllMusicBands();
});

afterAll(async () => {
  await deleteMusicBand(musicBandTest.email);
  await mongoose.connection.close();
})

test("band should be created'p1", () => {
  expect(typeof band).toBe("object");
});
test("band should be created p2", () => {
  expect(band).toHaveProperty("personInCharge");
});
test("getAllBands should return an array of bands", () => {
  expect(Array.isArray(allBands)).toBe(true);
});
test("allBands[0] should to have property email", () => {
  expect(allBands[0]).toHaveProperty("email");
});
test("allBands[0] should to have property name", () => {
  expect(allBands[0]).toHaveProperty("name");
});